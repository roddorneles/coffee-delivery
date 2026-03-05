import { FormProvider, useForm } from "react-hook-form";
import { FinishOrderSection } from "./components/FinishOrderSection";
import { SelectedCoffeesMenu } from "./components/SelectedCoffeesMenu";
import { CheckoutContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const finishOrderFormSchema = zod.object({
    cep: zod.string().min(1),
    street: zod.string().min(1),
    number: zod.number().positive(),
    complement: zod.string().optional(),
    district: zod.string().min(1),
    city: zod.string().min(1),
    uf: zod.string().min(1),
    paymentMethod: zod.enum(["credit", "debit", "cash"]),
})

type FinishOrderFormData = zod.infer<typeof finishOrderFormSchema>

export function Checkout() {

    const finishOrderForm = useForm({
        resolver: zodResolver(finishOrderFormSchema)
    });

    const { coffeesInCart } = useContext(CartContext)
    const { handleSubmit } = finishOrderForm;

    function handleFinishOrder(data: FinishOrderFormData) {

        if (coffeesInCart.length === 0) {
            console.log("erro de carrinho")
            return;
        }

        const payload = { ...data, items: coffeesInCart };
        console.log(payload);

    }

    return (

        <CheckoutContainer>
            <form action="" onSubmit={handleSubmit(handleFinishOrder)}>
                <FormProvider {...finishOrderForm}>
                    <FinishOrderSection />
                    <SelectedCoffeesMenu />
                </FormProvider>
            </form>
        </CheckoutContainer >

    )
}