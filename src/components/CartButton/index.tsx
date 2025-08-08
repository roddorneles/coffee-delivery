import { ShoppingCart } from "phosphor-react";
import { CartButtonContainer, type CartButtonVariants } from "./styles";
import type { ButtonHTMLAttributes } from "react";

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    $variant: CartButtonVariants
}

export function CartButton({ $variant, ...rest }: CartButtonProps) {

    return (
        <CartButtonContainer $variant={$variant} {...rest}>
            <ShoppingCart size={24} weight="fill" />
        </CartButtonContainer>
    )

}