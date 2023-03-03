import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

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