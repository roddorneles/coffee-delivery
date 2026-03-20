import { FormProvider, useForm } from "react-hook-form";
import { FinishOrderSection } from "./components/FinishOrderSection";
import { SelectedCoffeesMenu } from "./components/SelectedCoffeesMenu";
import { CheckoutContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const cepRegex = /^\d{5}-?\d{3}$/;

const finishOrderFormSchema = zod.object({
    cep: zod.string()
        .min(1, "CEP obrigatório")
        .regex(cepRegex, "CEP inválido"),
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

    const navigate = useNavigate();

    const orderInfoStoredString = localStorage.getItem("order");
    let defaultValuesInForm: FinishOrderFormData = {} as FinishOrderFormData;

    if (orderInfoStoredString) {
        const formsInfoStored = JSON.parse(orderInfoStoredString);

        if (Date.now() - formsInfoStored.createdAt > 1000 * 60 * 60) {
            localStorage.removeItem("order")
        }

        defaultValuesInForm = {
            ...formsInfoStored.data,
        }
    }

    const finishOrderForm = useForm<FinishOrderFormData>({
        resolver: zodResolver(finishOrderFormSchema),
        defaultValues: defaultValuesInForm
    });

    const { coffeesInCart, emptyCart } = useContext(CartContext);
    const { handleSubmit } = finishOrderForm;

    function handleFinishOrder(data: FinishOrderFormData) {

        localStorage.removeItem("order");

        if (coffeesInCart.length === 0) {
            console.log("erro de carrinho")
            return;
        }

        const {
            cep,
            street,
            number,
            complement,
            district,
            city,
            uf,
            paymentMethod
        } = data;

        const address = { cep, street, number, complement, district, city, uf };

        const payload = { address, items: coffeesInCart, paymentMethod };

        emptyCart();
        navigate("/confirmed-order", { state: payload });
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