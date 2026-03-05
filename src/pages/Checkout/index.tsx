import { FinishOrderSection } from "./components/FinishOrderSection";
import { SelectedCoffeesMenu } from "./components/SelectedCoffeesMenu";
import { CheckoutContainer } from "./styles";

export function Checkout() {
    return (

        <CheckoutContainer>

            <form action="" >
                <FinishOrderSection />
                <SelectedCoffeesMenu />
            </form>

        </CheckoutContainer >

    )
}