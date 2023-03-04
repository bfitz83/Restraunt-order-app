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
//     to be rendered to the order confermantion section


            // might have to remove target menu item stuff to make remove work

function makeTargetMenuItem(e){
    let targetMenuItem = menuItems.filter(function(item){
        return item.uuid === e.target.dataset.name
    })[0]
    makeOrderDisplay(targetMenuItem)
    targetMenuItem.isDisplayed = true
}

    document.addEventListener("click", function(e){
    if(e.target.id === "add-btn"){
            makeTargetMenuItem(e) 
            document.getElementById("order-conformation").style.display = "flex"
        } else if (e.target.id === "confirm-order-btn") {
            ccPopUp.style.display = "flex"
        } else if (e.target.id === "place-order") {
            ccPopUp.innerHTML = 
                `
                    <div id="thank-you-div">
                        <h1>Thank you!</h1>
                        <p>Your order will arive shortly</p>
                    </div>
                `
        } 
    
    })

// Getting there

function makeOrderDisplay(x){
   if(x.isDisplayed === false){
        orderSelection.innerHTML += 
            `
                <div class="ordered-item">
                    <p>${x.name} (<span id="quantityOrdered-${x.uuid}">${x.quantityOrdered}</span>)<span id="remove"> remove<span></p>
                    <p>$<span id="price-${x.uuid}">${x.price}</span></p>
                </div>
            `

        } 
        else {
            document.getElementById(`price-${x.uuid}`).innerText = x.price * x.quantityOrdered
            document.getElementById(`quantityOrdered-${x.uuid}`).innerText = x.quantityOrdered                                                                
        }                                                               
    
    // this raises the number of individual item ordered   
        x.quantityOrdered++    
    
    // this makes the grand total
        itemTotalArray.push(x.price)
        total.innerText = "$" + itemTotalArray.reduce((x, y) => {
            return x + y}, 0)
}

function removeItem(x){
    x.quantityOrdered--
    console.log(x.quantityOrdered)
}

