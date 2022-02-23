import { signup } from "../api/user";
import Header from "../components/header";
import SideBar from "../components/sidebar";
import { $ } from "../utils";

const SignUpPage = {
    render() {
        return /* html */`
        <div class="app-wrapper">
            <!-- App sidebar -->
            ${SideBar.render()}
            <div class="app-content">
                <!-- Header -->
                ${Header.render()}
                
                <form id="formSignup">
                    <div class="mx-auto max-w-xs">
                        <input class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="text" placeholder="Username" id="username">
                        <input class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="email" placeholder="Email" id="email">
                        <input class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="password" placeholder="Password" id="password">
                        <button class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                        <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <path d="M20 8v6M23 11h-6"></path>
                        </svg>
                        <span class="ml-3">
                            Đăng ký
                        </span>
                        </button>
                        </p>
                    </div>
                </form>

            </div>
        </div>
        
        `;
    },
    afterRender() {
        $("#formSignup").addEventListener("submit", async (e) => {
            e.preventDefault();
            const { data } = await signup({
                username: document.querySelector("#username").value,
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            });
            if (data) {
                document.location.href = "/signin";
            }
        });
    },
};
export default SignUpPage;