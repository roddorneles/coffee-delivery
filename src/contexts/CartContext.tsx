import { Coffee } from "phosphor-react";
import { createContext, useEffect, useState, type ReactNode } from "react";

export interface Coffee {
    id: string,
    name: string,
    description: string,
    price: number,
    categories: string[]
    image: string
}

interface ItemInCartData {
    coffeeId: string,
    amount: number
}

interface CartContextType {
    coffeesInCart: ItemInCartData[],
    addCoffeeToCart: (coffeeId: string, amount: number) => void,
    removeOneCoffeeFromCart: (coffeeId: string) => void,
    addOneCoffeeToCart: (coffeeId: string) => void
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

    function removeOneCoffeeFromCart(coffeeId: string) {
        setCoffeesInCart((items) => {
            return items.map((item) => {

                if (item.coffeeId === coffeeId) {

                    if (item.amount <= 1) {
                        return {
                            coffeeId: item.coffeeId,
                            amount: 1
                        }
                    }
                    else {
                        return {
                            coffeeId: item.coffeeId,
                            amount: item.amount - 1
                        }
                    }

                }
                return item;
            })
        });
    }

    function addOneCoffeeToCart(coffeeId: string) {
        setCoffeesInCart((items) => {
            return items.map((item) => {

                if (item.coffeeId === coffeeId) {
                    return {
                        coffeeId: item.coffeeId,
                        amount: item.amount + 1
                    }
                }
                return item;
            })
        });
    }

    function addCoffeeToCart(coffeeId: string, amount: number) {

        const coffeeAddedId = coffeesInCart.findIndex((item) => item.coffeeId === coffeeId);

        if (coffeeAddedId < 0) {
            setCoffeesInCart((items) => {
                return [...items, { coffeeId, amount }]
            })
        }
        else {
            setCoffeesInCart((items) => {
                return items.map((item) => {

                    if (item.coffeeId === coffeeId) {
                        return {
                            coffeeId: item.coffeeId,
                            amount: item.amount + amount
                        }
                    }
                    return item;
                })
            });
        }

    }

    return (
        <CartContext.Provider value={{ coffeesInCart, addCoffeeToCart, removeOneCoffeeFromCart, addOneCoffeeToCart }}>
            {children}
        </CartContext.Provider>
    )
}