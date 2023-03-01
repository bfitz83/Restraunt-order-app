import {menuItems} from "./data.js"
const menuItemsSection = document.getElementById("menu-items-section")
const orderConformation = document.getElementById("order-conformation")

function makeMenu() {
    menuItems.forEach(function(item){
        menuItemsSection.innerHTML += `
           <div class="align">
                <img scr="${item.image}">
                    <div class="menu-div">
                        <p>${item.name}</p>
                        <p>${item.ingredients}</p>
                        <p data-price="${item.price}">${item.price}</p>
                    </div>
                <button id="add-btn" data-food="${item.name}">+</button>
            </div>        
        `
    }
)}

makeMenu()

// This is doing kinda the right thing. I think that you need to make it so that it just fills in the HTML
//      with all the options. Maybe use a uuid?


document.addEventListener("click", function(e){
   if(e.target.id === "add-btn"){
        orderConformation.innerHTML += 
        `
            <div>
                <p>${e.target.dataset.food}</p>
                <p>${e.target.dataset.price}</p>
            </div>    
        `
        console.log(e.target.dataset.food)
    }
})