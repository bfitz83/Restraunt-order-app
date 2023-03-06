import {menuItems} from "./data.js"

const menuItemsSection = document.getElementById("menu-items-section")
const orderSelection = document.getElementById("order-selection")
const total = document.getElementById("total") 
const ccPopUp = document.getElementById("cc-pop-up")
const placeOrder = document.getElementById("place-order")
const orderConformation = document.getElementById("order-conformation")

let itemTotalArray = []


// This makes the menu on open

    function makeMenu() {
        menuItems.forEach(function(item){
            menuItemsSection.innerHTML += `
            <div class="align">
                    <div class="menu-div">
                        <img src="${item.image}">
                        <div>
                            <p><b>${item.name}</b></p>
                            <p class="ingredients">${item.ingredients}</p>
                            <p class="price" data-price="${item.price}"><b>$${item.price}</b></p>
                        </div>    
                    </div>
                    <div>
                        <button id="add-btn" data-name="${item.uuid}">+</button>
                    </div>    
                </div>        
            `
        }
    )}

    makeMenu()

// This event listener now filters out the selected menu item and sends it
//     to be rendered to the order conformantion section

    document.addEventListener("click", function(e){
        if(e.target.id === "add-btn"){
                makeTargetMenuItem(e) 
                document.getElementById("order-conformation").style.display = "flex"
            } else if (e.target.id === "remove") {
                removeTargetMenuItem(e)
            } else if (e.target.id === "confirm-order-btn") {
                ccPopUp.style.display = "flex"
            } else if (e.target.id === "place-order") {
                if (placeOrder == true){
                    ccPopUp.innerHTML = 
                        `
                            <div id="thank-you-div">
                                <h1>Thank you!</h1>
                                <p>Your order will arive shortly</p>
                            </div>
                        `
                }
            } 
        })


// The next two functions take info from above and either add or remove a selected menu item and 
//      change the display accordingly

    function makeTargetMenuItem(e){
        let targetMenuItem = menuItems.filter(function(item){
            return item.uuid === e.target.dataset.name
        })[0]
        targetMenuItem.quantityOrdered++
        itemTotalArray.push(targetMenuItem.price)
        makeOrderDisplay(targetMenuItem)
        targetMenuItem.isDisplayed = true
        makeTotal(e)
    }

    function removeTargetMenuItem(e){
        let targetMenuItem = menuItems.filter(function(item){
            return item.uuid === e.target.dataset.name
        })[0]
        targetMenuItem.quantityOrdered--
        
        if (targetMenuItem.quantityOrdered >= 0){
            makeOrderDisplay(targetMenuItem)
        }
        
        itemTotalArray.pop()
        makeTotal(e)
    }

// This funciton makes the display showing what has been ordered   

    function makeOrderDisplay(x){
    if(x.isDisplayed === false){
            orderSelection.innerHTML += 
                `
                    <div class="ordered-item">
                        <p>${x.name} (<span id="quantityOrdered-${x.uuid}">${x.quantityOrdered}</span>)<span class="remove" id="remove" data-name="${x.uuid}"> remove<span></p>
                        <p>$<span id="price-${x.uuid}">${x.price}</span></p>
                    </div>
                `
            } else {
                document.getElementById(`price-${x.uuid}`).innerText = x.price * x.quantityOrdered
                document.getElementById(`quantityOrdered-${x.uuid}`).innerText = x.quantityOrdered                                                                
            }                                                                    
        }
    
    
// This makes the grand total displayed at the bottom

    function makeTotal(x){
        if (itemTotalArray.length >= 0){
        total.innerText = "$" + itemTotalArray.reduce((x, y) => {
            return x + y}, 0)
        }
    }

