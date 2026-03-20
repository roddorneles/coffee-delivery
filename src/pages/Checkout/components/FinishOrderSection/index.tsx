import { Bank, CreditCard, Money } from "phosphor-react";
import { FinishOrderSectionBoxContainer, BaseInput, FinishOrderSectionContainer, PinIcon, CoinIcon, PaymentMethod, PaymentMethodButton, CepMaskedInput } from "./style";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { viaCepApi } from "../../../../lib/viaCep";
import { useEffect, useState } from "react";
import { SelectInputForm } from "../SelectInputForm";
import { ibgeApi } from "../../../../lib/ibge";

interface StateIbgeType {
    sigla: string
}

interface CityIbgeType {
    nome: string
}

export function FinishOrderSection() {

    const [states, setStates] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);
    const [pendingCity, setPendingCity] = useState<string | null>(null);
    const { register, control, watch, setValue } = useFormContext();
    const cep = useWatch({ name: "cep" });
    const uf = watch("uf");

    useEffect(() => {

        async function searchUf() {
            const { data } = await ibgeApi.get("/estados");

            const ufValues = data.map((state: StateIbgeType) => {
                return state.sigla
            });
            setStates(ufValues);
        }
        searchUf();
    }, []);

    async function searchCities(localUf: string) {

        if (!localUf || localUf === "") {
            return [];
        }

        const { data } = await ibgeApi.get(`estados/${localUf}/municipios`);
        const citiesValues = data.map((city: CityIbgeType) => {
            return city.nome
        });
        setCities(citiesValues);

        return citiesValues;
    }

    useEffect(() => {
        searchCities(uf);
    }, [uf]);

    useEffect(() => {
        if (pendingCity && cities.includes(pendingCity)) {
            setValue("city", pendingCity);
            setPendingCity(null);
        }
    }, [cities, pendingCity, setValue]);

    async function findAddress() {
        if (!cep || cep && cep.replace(/\D/g, '').length !== 8) {
            return;
        }

        const { data } = await viaCepApi.get(`${cep}/json`);

        const { bairro: district, uf: newUf, localidade: city, logradouro: street } = data;

        setValue("street", street);
        setValue("district", district);
        setValue("uf", newUf);
        setPendingCity(city);
    }

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

                    <Controller
                        name="cep"
                        control={control}
                        render={(props) => {
                            return (
                                <CepMaskedInput
                                    {...props.field}
                                    placeholder="CEP"
                                    mask="00000-000"
                                    onAccept={props.field.onChange}
                                    onBlur={findAddress}
                                />
                            );
                        }}
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

                    <Controller
                        name="uf"
                        control={control}
                        render={(props) => {
                            return <SelectInputForm
                                value={props.field.value}
                                onChange={props.field.onChange}
                                placeholder="UF"
                                items={states}
                            />
                        }}
                    />

                    <Controller
                        name="city"
                        control={control}
                        render={(props) => {
                            return <SelectInputForm
                                value={props.field.value}
                                onChange={props.field.onChange}
                                placeholder="Cidade"
                                items={cities}
                                disabled={!uf || uf === ""}
                            />
                        }}
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
                                    <CreditCard size={20} />
                                    Cartão de Crédito
                                </PaymentMethodButton>

                                <PaymentMethodButton type="button" value="debit" >
                                    <Bank size={20} />
                                    Cartão de Débito
                                </PaymentMethodButton>

                                <PaymentMethodButton type="button" value="cash" >
                                    <Money size={20} />
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