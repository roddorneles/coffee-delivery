import { createContext, useContext, useState, type ReactNode } from "react";

interface Coffee {
    id: string
    name: string,
    description: string,
    price: number,
    categories: string[]
    image: string
}

interface ManageCoffeeData {
    coffeeId: string,
    amount: number
}

interface CartContextType {
    coffeesList: Coffee[]
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProps {
    children: ReactNode
}

export function CartContextProvider({ children }: CartContextProps) {

    // const [coffeesInCart, setCoffeesInCart] = useState([]);

    // function addCoffeeToCart(coffee: Coffee, amount: number) {

    // }

    return (
        <h1>oi</h1>
    )
}