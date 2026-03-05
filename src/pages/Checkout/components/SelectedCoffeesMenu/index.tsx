import { FinishOrderButton, OrderSummary, PricesInOrderSummary, PricesInOrderSummaryLine, SelectedCoffeesMenuContainer } from "./style";
import { InputNumber } from "../../../../components/InputNumber";
import { DeleteItemButton } from "../DeleteItemButton";
import { OrderSummaryItem } from "../OrderSummaryItem";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { coffees } from "../../../Home/components/CoffeeMenu";
import { formatPrice } from "../../../../utils/formatPrice";
import { useFormContext } from "react-hook-form";


export function SelectedCoffeesMenu() {

    const { coffeesInCart } = useContext(CartContext);

    const totalCoffeesPrice = coffeesInCart.reduce((acc, curr) => {
        const coffee = coffees.find((c) => c.id === curr.coffeeId);
        if (!coffee) return acc;
        return acc + (coffee.price * curr.amount);
    }, 0)

    const deliveryPrice: number = 3.50;

    return (
        <SelectedCoffeesMenuContainer>
            <h2>Cafés selecionados</h2>

            <OrderSummary>

                {
                    coffeesInCart.map((item) => {
                        const coffee = coffees.find((c) => c.id === item.coffeeId);
                        if (!coffee) return null;
                        return <OrderSummaryItem
                            key={coffee.id}
                            coffee={coffee}
                            amount={item.amount}
                        />
                    })
                }

                <PricesInOrderSummary>
                    <PricesInOrderSummaryLine>
                        <span>Total de itens</span>
                        <span>{`R$ ${formatPrice(totalCoffeesPrice)}`}</span>
                    </PricesInOrderSummaryLine>
                    <PricesInOrderSummaryLine>
                        <span>Entrega</span>
                        <span>{`R$ ${formatPrice(deliveryPrice)}`}</span>
                    </PricesInOrderSummaryLine>
                    <PricesInOrderSummaryLine className="total-price">
                        <span>Total</span>
                        <span>{`R$ ${formatPrice(totalCoffeesPrice + deliveryPrice)}`}</span>
                    </PricesInOrderSummaryLine>
                </PricesInOrderSummary>

                <FinishOrderButton type="submit">
                    Confirmar pedido
                </FinishOrderButton>

            </OrderSummary>

        </SelectedCoffeesMenuContainer>
    )

}