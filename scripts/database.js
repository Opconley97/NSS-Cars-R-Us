const database = {
    paintColor: [
        { id: 1, color: "Silver", price: 250 },
        { id: 2, color: "Midnight Blue", price: 750 },
        { id: 3, color: "Firebrick Red", price: 2000 },
        { id: 4, color: "Spring Green", price: 5000 }
    ],
    interior: [
        { id: 1, material: "Beige Fabric", price: 495 },
        { id: 2, material: "Charcoal Fabric", price: 550 },
        { id: 3, material: "White Leather", price: 1150 },
        { id: 4, material: "Black Leather", price: 1150 }
    ],
    technology: [
        { id: 1, package: "Basic Package"/*Basic Sound System*/, price: 100 },
        { id: 2, package: "Navigation Package"/*Basic + Navigation*/, price: 350 },
        { id: 3, package: "Visibility Package",/*Basic + Cameras*/ price: 750 },
        { id: 4, package: "Ultra Package",/*Navigation + Visibility*/ price: 1050 }
    ],
    wheels: [
        { id: 1, style: "17-inch Pair Radial", price: 450 },
        { id: 2, style: "17-inch Pair Radial Black", price: 550 },
        { id: 3, style: "18-inch Pair Spoke Silver", price: 650 },
        { id: 4, style: "18-inch Pair Spoke Black", price: 650 }
    ],
    carOrders: [],
    packageChoices: {},
}

export const getPaintColor = () => {
    return database.paintColor.map(color => ({...color}))
}
export const getInterior = () => {
    return database.interior.map(interiors => ({...interiors}))
}
export const getTechnology = () => {
    return database.technology.map(tech => ({...tech}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getOrders = () => {
    return database.carOrders.map(order => ({...order}))
}

export const setPaint = (id) => {
    database.packageChoices.paintId = id
}

export const setInterior = (id) => {
    database.packageChoices.interiorId = id
}

export const setWheels = (id) => {
    database.packageChoices.wheelId = id
}

export const setTech = (id) => {
    database.packageChoices.techId = id
}

export const addCarOrder = () => {
    const newOrder = {...database.packageChoices}
    const lastIndex = database.carOrders.length
    newOrder.id = database.lastIndex + 1
    newOrder.timestamp = Date.now()
    database.carOrders.push(newOrder)
    document.dispatchEvent(new CustomEvent("stateChanged"))
}