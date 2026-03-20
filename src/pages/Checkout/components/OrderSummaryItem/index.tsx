import { InputNumber } from "../../../../components/InputNumber";
import { DeleteItemButton } from "../DeleteItemButton";
import { OrderSummaryItemContainer, OrderSummaryItemAmountContainer } from "./style";
import { CartContext, type Coffee } from "../../../../contexts/CartContext";
import { formatPrice } from "../../../../utils/formatPrice";
import { useContext } from "react";

interface OrderSummaryItemProps {
    coffee: Coffee,
    amount: number
}

export function OrderSummaryItem({ coffee, amount }: OrderSummaryItemProps) {

    const { addOneCoffeeToCart, removeOneCoffeeFromCart, removeCoffeeTypeFromCart } = useContext(CartContext);

    const coffeeImage = new URL(`../../../../assets/${coffee.image}`, import.meta.url).href;

    function removeCoffee() {
        removeOneCoffeeFromCart(coffee.id);
    }

    function addCoffee() {
        addOneCoffeeToCart(coffee.id);
    }

    function removeCoffeType() {
        removeCoffeeTypeFromCart(coffee.id);
    }

    return (
        <OrderSummaryItemContainer>
            <img src={coffeeImage} alt="" />
            <OrderSummaryItemAmountContainer>
                <span>{coffee.name}</span>
                <div className="buttons">
                    <InputNumber number={amount} onMinus={removeCoffee} onPlus={addCoffee} />
                    <DeleteItemButton onClick={removeCoffeType} />
                </div>
            </OrderSummaryItemAmountContainer>
            <span className="coffee-price">R$  {formatPrice(coffee.price * amount)} </span>
        </OrderSummaryItemContainer>
    )

}