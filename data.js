import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
  console.log(uuidv4()); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

export let menuItems = [
    {
        name: "Burger",
        image: "null",
        ingredients: ["beef", "cheese", "letuce"],
        price: 12,
        quantityOrdered: 1,
        isDisplayed: false,
        uuid: uuidv4()
    },
    {
        name: "Pizza",
        image: "null",
        ingredients: ["pepporni", "mushroom", "mozzerela"],
        price: 14,
        quantityOrdered: 1,
        isDisplayed: false,
        uuid: uuidv4()
    },
    {
        name: "Beer",
        image: "null",
        ingredients: ["grain", "hops", "yeast", "water"],
        price: 12,
        quantityOrdered: 1,
        isDisplayed: false,
        uuid: uuidv4()
    },
]