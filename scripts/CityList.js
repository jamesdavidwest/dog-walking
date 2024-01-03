import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click", 
    (theClickEvent) => {
        const cityTarget = theClickEvent.target;

        if (cityTarget.dataset.type === "city")
        window.alert(`${cityTarget.dataset.walkername} is servicing this city.`)
    }
)

export const CityList = () => {
    let citiesHTML = '<ul>'

    for (const walker of walkers) {
        citiesHTML += `<li data-type="city" data-walkername="${walker.name}">${walker.city}</i>`
    }

    citiesHTML += '</ul>'

    return citiesHTML
}