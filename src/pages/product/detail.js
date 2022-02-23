import { get } from "../../api/product";
import { $ } from "../../utils";
import { addToCart } from "../../utils/cart";

const DetailProductsPage = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
        <a href="/#/products/${data.id}" class="news-item">
            <img
                src="${data.img}"
                alt=""
            />
            <h3 class="news-title text-xl">${data.name}</h3>
            <span>${data.price}</span>
            <button id="btnAddToCart" data-id="${data.id}" class="bg-red-500">Add To Cart</button>
        </a>
        `;
    },
    afterRender(id) {
        $("#btnAddToCart").addEventListener("click", async () => {
            const { data } = await get(id);

            addToCart({ ...data, quantity: 1 }, () => {

            });
        });
    },
};
export default DetailProductsPage;