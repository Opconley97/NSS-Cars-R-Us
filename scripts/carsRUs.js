import { paintSelected } from "./paint.js";
import { interiorSelected } from "./interior.js";
import { wheelsSelected } from "./wheels.js";
import { techSelected } from "./technology.js";
import { Orders } from "./orders.js";
import { addCarOrder } from "./database.js"

document.addEventListener("click",(event) => {
    if (event.target.id === "orderButton") {
        addCarOrder()
    }
})

export const carsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>
        
        <article class="choices">
            <section class="paint-choices">
            <h2>Paints</h2>
            ${paintSelected()}
            </section>
            <section class="interior-choices">
            <h2>Interiors</h2>
            ${interiorSelected()}
            </section>
            <section class="wheel-choices">
            <h2>Wheels</h2>
            ${wheelsSelected()}
            </section>
            <section class="tech-choices">
            <h2>Technologies</h2>
            ${techSelected()}
            </section>
        </article>
        
        <article>
            <button id="orderButton">Place Car Order</button>
        </article>
        
        <article class="carOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
            </article>
    `
}