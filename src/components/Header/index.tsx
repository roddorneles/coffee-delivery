import { AmountInCartContainer, HeaderContainer, HeaderContent, LocationContainer } from "./styles";
import logo from "../../assets/logo.svg"
import { MapPin, MapPinLine } from "phosphor-react";
import { CartButton } from "../CartButton";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { NavLink } from "react-router-dom";
import { Checkout } from "../../pages/Checkout";

export function Header() {

    const { coffeesInCart } = useContext(CartContext);

    return (
        <HeaderContainer>
            <HeaderContent>

                <NavLink to="/">
                    <img src={logo} alt="" />
                </NavLink>

                <div>
                    {/* <LocationContainer>
                        <MapPin size={24} weight="fill" />
                        <span>Porto Alegre, RS</span>
                    </LocationContainer> */}

                    <NavLink to="/checkout" title="Checkout">
                        <CartButton $variant="yellow">
                            {coffeesInCart.length !== 0 && <AmountInCartContainer>
                                {coffeesInCart.reduce((acc, item) => {
                                    return (item.amount + acc);
                                }, 0)}
                            </AmountInCartContainer>
                            }
                        </CartButton>
                    </NavLink>

                </div>
            </HeaderContent>
        </HeaderContainer>
    )
}