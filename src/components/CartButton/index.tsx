import { ShoppingCart } from "phosphor-react";
import { CartButtonContainer, type CartButtonVariants } from "./styles";

interface CartButtonProps {
    $variant: CartButtonVariants
}

export function CartButton(props: CartButtonProps) {

    return (
        <CartButtonContainer {...props}>
            <ShoppingCart size={24} weight="fill" />
        </CartButtonContainer>
    )

}