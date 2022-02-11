<template>
    <section class="h-screen w-full flex justify-center items-center bg-gray-50 p-2">
        <div class="w-96 h-auto rounded overflow-hidden bg-gray-100">
            <form @submit.prevent="handleSubmit">
                <h1 class="text-xl font-bold text-center py-2 bg-gray-200 text-green-500">
                    <span>
                        <img class="inline-block" src="../assets/vueJs.png" />
                    </span>
                    <span>
                        <img class="inline-block" src="../assets/firerbase.png" />
                    </span>
                    Leave a Public Message
                </h1>
                <div class="p-2">
                    <div class="w-full">
                        <label class="block text-base text-gray-500">Name</label>
                        <input
                            class="w-full h-10 my-2 p-1 outline-none border-l-2 border-green-500"
                            type="text"
                            v-model="name"
                            placeholder="Write your Name"
                            required
                        />
                    </div>
                    <div class="w-full">
                        <label class="block text-base text-gray-500">Email</label>
                        <input
                            class="w-full h-10 my-2 p-1 outline-none border-l-2 border-green-500"
                            type="email"
                            v-model="email"
                            placeholder="Write your Email"
                            required
                        />
                    </div>
                    <div class="w-full">
                        <label class="block text-base text-gray-500">Meassage</label>
                        <textarea
                            v-model="message"
                            class="outline-none w-full h-32 resize-none p-1 border-l-2 border-green-500"
                            placeholder="Write your message"
                            required
                        ></textarea>
                    </div>
                    <div class="text-center">
                        <button
                            :disabled="isDisabled"
                            id="btn"
                            class="py-2 px-7 my-3 rounded-full bg-green-500 hover:bg-green-700 text-gray-50 font-semibold"
                        >
                            {{ Submit }}
                            <img
                                v-if="notSubmit"
                                class="inline-block animate-spin w-5 h-5 text-white"
                                src="../assets/loading-svgrepo-com.svg"
                                alt
                            />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </section>

    <section v-if="isShow" id="public" class="w-full h-auto bg-gray-50">
        <div>
            <h1 class="text-2xl text-green-500 font-semibold text-center">See Other People Messages</h1>
        </div>
        <main
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-2 place-items-center"
        >
            <div
                v-for="data in datas"
                :key="data.id"
                class="w-full md:w-56 h-56 rounded-md overflow-auto border border-green-400 bg-gray-100 my-2"
            >
                <h1
                    class="text-center bg-green-300 font-semibold text-green-700 py-2"
                >{{ data.name }}</h1>
                <p class="text-justify p-1 break-words">{{ data.msg }}</p>
            </div>
        </main>
    </section>
</template>

<script>



import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
export default {
    name: "Form",
    data() {
        return {
            name: "",
            email: "",
            message: "",
            Submit: 'Submit',
            datas: [],
            // data2: this.data.reverse(),
            isDisabled: false,
            notSubmit: false,
            isShow: false
        };
    },
    methods: {
        async handleSubmit() {
            this.notSubmit = true
        

            const Data = collection(db, "userMessages")
            try {
                await addDoc((Data), {
                    name: this.name,
                    email: this.email,
                    message: this.message
                });

                const querySnapshot = await getDocs((Data));

                querySnapshot.forEach((doc) => {
                    let obj = {};
                    obj["name"] = doc.data().name;
                    obj["msg"] = doc.data().message;
                    this.datas.push(obj);
                });
                this.isShow = true

                this.notSubmit = false


                setTimeout(() => {
                    this.Submit = 'Submitted'
                    this.isDisabled = true
                    btn.classList.remove("bg-green-500", "hover:bg-green-700", "text-gray-50")
                    btn.classList.add("bg-gray-300", "text-gray-400", "cursor-not-allowed")

                }, 500);
                setTimeout(() => {
                    document.getElementById('public').scrollIntoView();
                }, 500);
            }
            catch (e) {
                setTimeout(() => {
                    this.Submit = 'Error'
                    this.$router.push('/')
                }, 500);
            }
        }
    },
}
</script>
