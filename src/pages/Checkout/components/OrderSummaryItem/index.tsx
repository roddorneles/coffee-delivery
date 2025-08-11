import { InputNumber } from "../../../../components/InputNumber";
import { DeleteItemButton } from "../DeleteItemButton";
import { OrderSummaryItemContainer, OrderSummaryItemAmountContainer } from "./style";
import type { Coffee } from "../../../../contexts/CartContext";

interface OrderSummaryItemProps {
    coffee: Coffee,
    amount: number
}

export function OrderSummaryItem({ coffee, amount }: OrderSummaryItemProps) {

    function funcao() {
        console.log("a");
    }

    const coffeeImage = new URL(`../../../../assets/${coffee.image}`, import.meta.url).href;

    return (
        <OrderSummaryItemContainer>
            <img src={coffeeImage} alt="" />
            <OrderSummaryItemAmountContainer>
                <span>{coffee.name}</span>
                <div className="buttons">
                    <InputNumber number={amount} onMinus={funcao} onPlus={funcao} />
                    <DeleteItemButton />
                </div>
            </OrderSummaryItemAmountContainer>
            <span className="coffee-price">R$ {coffee.price}</span>
        </OrderSummaryItemContainer>
    )

}