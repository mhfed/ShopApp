// import Navigo from "navigo";
// import AboutPage from "./pages/about";
// // import CartPage from "./pages/cart";
// // import DetailNewsPage from "./pages/detailNews";
// import HomePage from "./pages/home";
// // import ProductsPage from "./pages/product";
// // import DetailProductsPage from "./pages/product/detail";
// import SignInPage from "./pages/signin";
// import SignUpPage from "./pages/signup";

// const router = new Navigo("/", { linksSelector: "a", hash: true });

// const print = async (content, id) => {
//     document.querySelector("#app").innerHTML = await content.render(id);
//     if (content.afterRender) content.afterRender(id);
// };

// router.on({
//     "/": () => print(HomePage),
//     // "/about": () => print(AboutPage),
//     // Products
//     // "/products": () => print(ProductsPage),
//     // "/products/:id": ({ data }) => print(DetailProductsPage, data.id),

//     // "/cart": () => print(CartPage),
//     // Sign in & Signup
//     "/signup": () => print(SignUpPage),
//     "/signin": () => print(SignInPage),

//     // News
//     // "/news/:id": ({ data }) => print(DetailNewsPage, data.id),
// });
// router.resolve();