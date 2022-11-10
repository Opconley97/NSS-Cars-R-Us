import { getPaintColor , getInterior , getWheels , getTechnology , getOrders } from "./database.js"

const paints = getPaintColor();
const interiors = getInterior();
const wheels = getWheels();
const technologies = getTechnology();

const buildOrderListItem = (order) => {
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

    const foundTech = technologies.find(
        (tech) => {
            return tech.id === order.techId
        }
    )

    const totalCost = foundPaint.price + foundInterior.price + 
                      foundWheels.price + foundTech.price;

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
        ${foundPaint.color} car with ${foundWheels.style} wheels,
        ${foundInterior.material} interior, and the ${foundTech.package} 
        for a total cost of ${costString}.
        </li>`
}

export const Orders = () => {
    const orders = getOrders();
    let html = "<ul>"
    const listItems = orders.map(buildOrderListItem)
    html += listItems.join("")
    html += "<ul>"
    return html
}