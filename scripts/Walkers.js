import { getWalkers } from "./database.js";

const walkers = getWalkers();

document.addEventListener(
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target;
        
        if (whatWasClickedOn.dataset.type === "walker") {
        window.alert(`This walker works in ${whatWasClickedOn.dataset.city}`)
        }
    })

export const Walkers = () => {
  let walkerHTML = "<ul>";

  for (const walker of walkers) {
    walkerHTML += `<li data-id="${walker.id}"
                      data-type="walker"
                      data-email="${walker.email}"
                      data-city="${walker.city}"
                        >${walker.name}
                    </li>`;
  }

  walkerHTML += "</ul>";

  return walkerHTML;
};

/*import { getWalkers } from "./database.js";

const walkers = getWalkers();

document.addEventListener("click", (theClickEvent) => {
  const whatWasClickedOn = theClickEvent.target;

  if (whatWasClickedOn.dataset.type === "Walker") {
    window.alert(`This walker works in ${whatWasClickedOn.dataset.city}`);
  }
});

export const Walkers = () => {
  let walkerHTML = "<ul>";

  for (const walker of walkers) {
    walkerHTML += `<li data-id="${walker.id}"
        data-type="Walker"
        data-city="${walker.city}"
    >${walker.name}
    </li>`;
  }

  walkerHTML += "</ul>";

  return walkerHTML;
};*/
