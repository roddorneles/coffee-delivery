import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { ConfirmedOrderContainer, IconCircle } from "./style";
import deliveryImg from "../../assets/delivery-img.svg"
import { Navigate, useLocation } from "react-router-dom";

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

export function ConfirmedOrder() {

    const location = useLocation();
    const order = location.state as Order | null;

    localStorage.removeItem("order");

    if (!order) {
        return <Navigate to="/" replace />
    }

    return (
        <ConfirmedOrderContainer>
            <h1>Uhu! Pedido confirmado</h1>
            <span className="subtitle">Agora é só aguardar que logo o café chegará até você</span>

            <div className="screen-confirmed-order">

                <div className="checkout-info-section">

                    <div className="confirmed-order-section">
                        <IconCircle $circleColor="purple">
                            <MapPin weight="fill" size={20} />

                        </IconCircle>
                        <div className="column-align">
                            <span>Entrega em <b>{order.address.street}, {order.address.number}</b> </span>
                            <span>{order.address.district} - {order.address.city}, {order.address.uf}</span>
                        </div>
                    </div>

                    <div className="confirmed-order-section">
                        <IconCircle $circleColor="yellow">
                            <Timer weight="fill" size={20} />
                        </IconCircle>
                        <div className="column-align">
                            <span><b>Previsão de entrega</b></span>
                            <span>20 min - 30 min</span>
                        </div>
                    </div>

                    <div className="confirmed-order-section">
                        <IconCircle $circleColor="yellowDark">
                            <CurrencyDollar weight="fill" size={20} />
                        </IconCircle>
                        <div className="column-align">
                            <span>Pagamento na entrega</span>
                            <span>
                                {
                                    order.paymentMethod === "credit" && "Cartão de crédito"
                                }
                                {
                                    order.paymentMethod === "debit" && "Cartão de débito"
                                }
                                {
                                    order.paymentMethod === "cash" && "Dinheiro"
                                }
                            </span>
                        </div>
                    </div>

                </div>

                <img src={deliveryImg} alt="Pessoa dirigindo para entregar" />


            </div>



        </ConfirmedOrderContainer>
    );

}