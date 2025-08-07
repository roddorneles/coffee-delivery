import { HeaderContainer, HeaderContent, LocationContainer } from "./styles";
import logo from "../../assets/logo.svg"
import { MapPin, MapPinLine } from "phosphor-react";
import { CartButton } from "../CartButton";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="" />

                <div>
                    <LocationContainer>
                        <MapPin size={24} weight="fill" />
                        <span>Porto Alegre, RS</span>
                    </LocationContainer>
                    <CartButton $variant="yellow" />
                </div>
            </HeaderContent>
        </HeaderContainer>
    )
}