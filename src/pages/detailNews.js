// import { get } from "../api/post";
// import Header from "../components/header";
// import SideBar from "../components/sidebar";

// const DetailNewsPage = {
//     async render(id) {
//         const { data } = await get(id);

//         return /* html */ `
//         <div class="app-wrapper">
//             <!-- App sidebar -->
//             ${SideBar.render()}
//             <div class="app-content">
//                 <!-- Header -->
//                 ${Header.render()}
//                 <!-- Detail News -->
//                 <h3>${data.title}</h3>
//                 <img src="${data.img}">
//                 <p>${data.desc}</p>

//             </div>
//         </div>
//         `;
//     },
// };
// export default DetailNewsPage;