import { getAll } from "../../api/product";

const ProductsPage = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
        <section class="news">
            <div class="news-list">
            ${data.map((product) => `
            <a href="/#/products/${product.id}" class="news-item">
                <img
                    src="${product.img}"
                    alt=""
                />
                <h3 class="news-title text-xl">${product.name}</h3>
                <span>${product.price}</span>
                <button data-id="${product.id}" class="bg-red-500">Add To Cart</button>
            </a>`).join("")}
                
            </div>
        </section>
        `;
    },
};
export default ProductsPage;