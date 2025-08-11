import { ShoppingCart } from "phosphor-react";
import { CartButtonContainer, type CartButtonVariants } from "./styles";
import type { ButtonHTMLAttributes } from "react";

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    $variant: CartButtonVariants,
    children: React.ReactNode
}

export function CartButton({ $variant, children, ...rest }: CartButtonProps) {

    return (
        <CartButtonContainer $variant={$variant} {...rest}>
            <ShoppingCart size={24} weight="fill" />
            {children}
        </CartButtonContainer>
    )

}