import Header from "../components/header";
import SideBar from "../components/sidebar";

const AboutPage = {
    render() {
        return /* html */ `
        <div class="app-wrapper">
            <!-- App sidebar -->
            ${SideBar.render()}
            <div class="app-content">
                <!-- Header -->
                ${Header.render()}
                <!-- Banner -->
                <h3 class="text-4xl">About</h3>

            </div>
        </div>
        `;
    },
};
export default AboutPage;