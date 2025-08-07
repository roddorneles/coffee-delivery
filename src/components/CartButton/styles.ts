import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

export type CartButtonVariants = "purple" | "yellow"

interface CartButtonContainerProps {
    $variant: CartButtonVariants
}

const buttonVariants = {
    background: {
        "yellow": `${defaultTheme["yellow-light"]}`,
        "purple": `${defaultTheme["purple-dark"]}`
    },
    color: {
        "yellow": `${defaultTheme["yellow-dark"]}`,
        "purple": `${defaultTheme["base-card"]}`
    }
}

export const CartButtonContainer = styled.button<CartButtonContainerProps>`

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    padding: 0.5rem;
    border-radius: 6px;

    background-color: ${props => buttonVariants.background[props.$variant]};
    color: ${props => buttonVariants.color[props.$variant]};

`