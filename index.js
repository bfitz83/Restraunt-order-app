import {menuItems} from "./data.js"
const menuItemsSection = document.getElementById("menu-items-section")
const orderSelection = document.getElementById("order-selection")
const total = document.getElementById("total") // seems like i need, not sure ***************************
const confirmOrderBtn = document.getElementById("confirm-order-btn") // might not need *******************
const ccPopUp = document.getElementById("cc-pop-up")

let itemTotalArray = []

// This makes the menu on open

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
            targetMenuItem.isDisplayed = true
        } else if (e.target.id === "confirm-order-btn") {
            ccPopUp.style.display = "flex"
            console.log("display credit info") // center pop up ****************************************
        } else if (e.target.id === "place-order") {
            console.log("order placed") // add form and whatnot *******************************************
        }
    
    })

// Getting there

function makeOrderDisplay(x){
   if(x.isDisplayed === false){
        orderSelection.innerHTML += 
            `
                <div class="ordered-item">
                    <p>${x.name}</p>
                    <p>$${x.price}</p>
                </div>
            `

        } else {
            // this will just add the prices
            // make the price add up **************************************************
                                                                        // /\
        }                                                               // |
    // this raises the number of individual item ordered. for top price    |
            // just need to multiply that by x.price above **************************************
    x.quantityOrdered++    
    console.log(x.quantityOrdered)
    // this makes the grand total
    itemTotalArray.push(x.price)
    total.innerText = "$" + itemTotalArray.reduce((x, y) => {
        return x + y}, 0)
}

