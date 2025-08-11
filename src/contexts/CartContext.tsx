import { Coffee } from "phosphor-react";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { coffees } from "../pages/Home/components/CoffeeMenu";

export interface Coffee {
    id: string
    name: string,
    description: string,
    price: number,
    categories: string[]
    image: string
}

interface ItemInCartData {
    coffee: Coffee,
    amount: number
}

interface CartContextType {
    coffeesInCart: ItemInCartData[]
    addCoffeeToCart: (coffee: Coffee, amount: number) => any
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProps {
    children: ReactNode
}

export function CartContextProvider({ children }: CartContextProps) {

    const [coffeesInCart, setCoffeesInCart] = useState<ItemInCartData[]>([]);

    useEffect(() => {
        console.log(coffeesInCart)
    }, [coffeesInCart]);

    function addCoffeeToCart(newCoffee: Coffee, amount: number) {

        const coffeeAddedId = coffeesInCart.findIndex((item) => item.coffee.id === newCoffee.id);

        if (coffeeAddedId < 0) {
            setCoffeesInCart((items) => {
                return [...items, { coffee: newCoffee, amount }]
            })
        }
        else {
            setCoffeesInCart((items) => {
                return items.map((item) => {

                    if (item.coffee.id === newCoffee.id) {
                        return {
                            coffee: {
                                ...item.coffee
                            },
                            amount: item.amount + amount
                        }
                    }
                    return item;
                })
            });
        }

    }

    return (
        <CartContext.Provider value={{ coffeesInCart, addCoffeeToCart }}>
            {children}
        </CartContext.Provider>
    )
}