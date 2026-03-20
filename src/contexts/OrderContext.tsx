import { createContext, useState, type ReactNode, } from "react";

interface AddressProps {
    cep: string,
    street: string,
    number: number,
    complement?: string,
    district: string,
    city: string,
    uf: string

}

interface Order {
    paymentMethod: "credit" | "debit" | "cash",
    address: AddressProps
}

interface OrderContextType {
    order: Order,
    setPaymentMethod: (newPaymentMethod: "credit" | "debit" | "cash") => void,
    setAddress: (newAddress: AddressProps) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
    children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {

    const [order, setOrder] = useState<Order>({} as Order);

    function setPaymentMethod(newPaymentMethod: "credit" | "debit" | "cash") {
        setOrder((order) => {
            return ({ ...order, paymentMethod: newPaymentMethod })
        })
    }

    function setAddress(newAddress: AddressProps) {
        setOrder((order) => {
            return ({ ...order, address: newAddress })
        })
    }

    return (
        <OrderContext.Provider value={{ order, setPaymentMethod, setAddress }}>
            {children}
        </OrderContext.Provider>
    );

}

