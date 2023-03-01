import {menuItems} from "./data.js"
const menuItemsSection = document.getElementById("menu-items-section")
const orderSelection = document.getElementById("order-selection")
const total = document.getElementById("total")

function makeMenu() {
    menuItems.forEach(function(item){
        menuItemsSection.innerHTML += `
           <div class="align">
                <img scr="${item.image}">
                    <div class="menu-div">
                        <p>${item.name}</p>
                        <p>${item.ingredients}</p>
                        <p data-price="${item.price}">$${item.price}</p>
                    </div>
                <button id="add-btn" data-name="${item.uuid}">+</button>
            </div>        
        `
    }
)}

makeMenu()

// This event listener now filters out the selected menu item and sends it
//     to be rendered to the order confermantion section

document.addEventListener("click", function(e){
   if(e.target.id === "add-btn"){
            let targetMenuItem = menuItems.filter(function(item){
                return item.uuid === e.target.dataset.name
            })[0]
        makeOrderDisplay(targetMenuItem)
    }
})

// Getting there

function makeOrderDisplay(x){
    orderSelection.innerHTML += 
    `
        <div class="${x.uuid}">
            <p>${x.name}</p>
            <p>${x.price}</p>
        </div>
    `
    
}