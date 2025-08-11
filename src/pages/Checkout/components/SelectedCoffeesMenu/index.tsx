import { OrderSummary, PricesInOrderSummary, PricesInOrderSummaryLine, SelectedCoffeesMenuContainer } from "./style";
import { InputNumber } from "../../../../components/InputNumber";
import { DeleteItemButton } from "../DeleteItemButton";
import { OrderSummaryItem } from "../OrderSummaryItem";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";


export function SelectedCoffeesMenu() {

    const { coffeesInCart } = useContext(CartContext);

    return (
        <SelectedCoffeesMenuContainer>
            <h2>Cafés selecionados</h2>

            <OrderSummary>

                {
                    coffeesInCart.map((item) => {
                        return <OrderSummaryItem key={item.coffee.id} coffee={item.coffee} amount={item.amount} />
                    })
                }

                <PricesInOrderSummary>
                    <PricesInOrderSummaryLine>
                        <span>Total de itens</span>
                        <span>R$ 29.70</span>
                    </PricesInOrderSummaryLine>
                    <PricesInOrderSummaryLine>
                        <span>Entrega</span>
                        <span>R$ 3.50</span>
                    </PricesInOrderSummaryLine>
                    <PricesInOrderSummaryLine className="total-price">
                        <span>Total</span>
                        <span>R$ 33.20</span>
                    </PricesInOrderSummaryLine>
                </PricesInOrderSummary>

            </OrderSummary>

        </SelectedCoffeesMenuContainer>
    )

}