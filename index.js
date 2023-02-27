import {menuItems} from "./data.js"
const menuItemsSection = document.getElementById("menu-items-section")

function makeMenu() {
    menuItems.forEach(function(item){
        menuItemsSection.innerHTML += `
           <div class="align">
                <img scr="${item.image}">
                    <div class="menu-div">
                        <p>${item.name}</p>
                        <p>${item.ingredients}</p>
                        <p>${item.price}</p>
                    </div>
                <button id="add-btn">+</button>
            </div>        
        `
    }
)}

makeMenu()