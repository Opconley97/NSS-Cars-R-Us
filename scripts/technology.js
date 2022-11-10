import { getTechnology , setTech } from "./database.js"

const technology = getTechnology()

document.addEventListener("change",(event) => {
    if (event.target.id === "tech-menu") {
        const chosenOption = event.target.value
        for (const tech of technology) {
            if (parseInt(chosenOption) === tech.id) {
                setTech(parseInt(chosenOption))
            }
        }
    } 
})


export const techSelected = () => {
    let html ="<ul>"
    html += `<select id="tech-menu">`
    html += `<option value="0">Select Technology</option>`
    const listItems = technology.map(tech => {
        return `<li>
            <option value="${tech.id}">${tech.package}</option>
            </li>`
    })
    html += listItems.join("")
    html += "</select>"
    html += "</ul>"
    return html
}