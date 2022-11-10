import { getInterior , setInterior } from "./database.js";

const interior = getInterior();

document.addEventListener("change",(event) => {
    if(event.target.id === "interior-menu") {
        const choseOption = event.target.value
        for (const int of interior) {
            if(parseInt(choseOption) === int.id) {
                setInterior(parseInt(choseOption))
            }
        }
    }
})

export const interiorSelected = () => {
    let html = "<ul>"
    html += `<select id="interior-menu">`
    html += `<option value="0">Select Interior</option>`
    const listItems = interior.map(interiorObj => {
        return `<li>
            <option value="${interiorObj.id}">${interiorObj.material}</option>
            </li>`
    })
    html += listItems.join("")
    html += "</select>"
    html += "</ul>"
    return html
}