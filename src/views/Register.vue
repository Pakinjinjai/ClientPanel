<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="/public/KMITL_PCC.png"
        alt="accpunt"
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        สมัครสมาชิก
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label
            for="username"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Username</label
          >
          <div class="mt-2">
            <input
              id="username"
              name="username"
              type="text"
              autocomplete="username"
			  v-model="formData.username"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
          </div>
          <div class="mt-2">
            <input
              id="password"
			  v-model="formData.password"
              name="password"
              type="password"
              autocomplete="new-password"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="confirmPassword"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Confirm password</label
            >
          </div>
          <div class="mt-2">
            <input
              id="confirmPassword"
			  v-model="formData.confirmPassword"
              name="confirmPassword"
              type="password"
              autocomplete="new-password"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            @click.prevent="signup"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            สมัครสมาชิก
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        มีรหัสผ่านอยู่แล้ว?
        <router-link to="/login">
          <a
            href="/login"
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >เข้าสู่ระบบ</a
          >
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { baseURL, REGISTER_API } from "../APIGate";
export default {
  name: "Register_Page",	
  component: {},
  data() {
    return {
		formData:{
			username: "",
			password: "",
			confirmPassword: "",
			passwordMatchError: false, // เพิ่มตัวแปรสถานะสำหรับแสดงข้อความ error
		}
    };
  },

  methods: {
    signup() {
		this.checkPasswordMatch()
      axios({
        method: "post",
        url: `${baseURL}${REGISTER_API}`,
        data: {
          username: this.formData.username,
          password: this.formData.password,
        },
      })
        .then((res) => {
          this.$router.push("/login");
          console.log("สมัครสมาชิกสำเร็จ",res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    checkPasswordMatch() {
      if (this.formData.password === this.formData.confirmPassword) {
        // Passwords do not match
        // Handle accordingly, e.g., show an error message
        this.formData.passwordMatchError = true; // ตั้งค่าสถานะ error
        this.$router.push("/login");
      } else {
        // Passwords match
        // You can proceed with registration logic here
        this.formData.passwordMatchError = false; // รหัสผ่านตรงกัน, ล้างสถานะ error
        alert("รหัสผ่านไม่ตรงกัน");
        //console.log('Passwords match');
        this.Login(); // You may want to call your existing Login method
      }
    },
    Login() {},
  },
};
</script>

<style></style>
