import { Bank, CreditCard, Money } from "phosphor-react";
import { FinishOrderSectionBoxContainer, BaseInput, FinishOrderSectionContainer, PinIcon, CoinIcon, PaymentMethod, PaymentMethodButton } from "./style";
import { Controller, useFormContext } from "react-hook-form";

export function FinishOrderSection() {

    const { register, control } = useFormContext();

    return (
        <FinishOrderSectionContainer>
            <h2>Complete seu endereço</h2>

            <FinishOrderSectionBoxContainer>

                <div className="section-header">
                    <PinIcon size={24} />
                    <div>
                        <h3>Endereço de entrega</h3>
                        <span>Informe o endereço onde deseja receber seu pedido</span>
                    </div>
                </div>

                <div className="inputs-section">
                    <BaseInput
                        type="text"
                        placeholder="CEP"
                        id="cep"
                        {...register('cep')}
                    />

                    <BaseInput
                        type="text"
                        placeholder="Rua"
                        id="street"
                        {...register("street")}
                    />

                    <BaseInput
                        type="number"
                        placeholder="Número"
                        id="number"
                        {...register("number", { valueAsNumber: true })}
                    />

                    <BaseInput
                        type="text"
                        placeholder="Complemento"
                        id="complement"
                        {...register("complement")}
                    />

                    <BaseInput
                        type="text"
                        placeholder="Bairro"
                        id="district"
                        {...register("district")}
                    />

                    <BaseInput
                        type="text"
                        placeholder="Cidade"
                        id="city"
                        {...register("city")}
                    />

                    <BaseInput
                        type="text"
                        placeholder="UF"
                        id="uf"
                        {...register("uf")}
                    />
                </div>

            </FinishOrderSectionBoxContainer>

            <FinishOrderSectionBoxContainer>

                <div className="section-header">
                    <CoinIcon size={24} weight="regular" />
                    <div>
                        <h3>Pagamento</h3>
                        <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                    </div>
                </div>

                <Controller
                    control={control}
                    name="paymentMethod"
                    render={(props) => {

                        return (
                            <PaymentMethod onValueChange={props.field.onChange} value={props.field.value} >
                                <PaymentMethodButton type="button" value="credit" >
                                    <CreditCard size={24} />
                                    Cartão de Crédito
                                </PaymentMethodButton>

                                <PaymentMethodButton type="button" value="debit" >
                                    <Bank size={24} />
                                    Cartão de Débito
                                </PaymentMethodButton>

                                <PaymentMethodButton type="button" value="cash" >
                                    <Money size={24} />
                                    Dinheiro
                                </PaymentMethodButton>

                            </PaymentMethod>
                        );
                    }}
                />

            </FinishOrderSectionBoxContainer>

        </FinishOrderSectionContainer >

    );

}