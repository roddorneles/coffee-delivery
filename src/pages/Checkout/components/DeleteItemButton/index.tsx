import { Trash } from "phosphor-react";
import type { ButtonHTMLAttributes } from "react";
import { DeleteItemButtonContainer } from "./style";

interface DeleteItemButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
}

export function DeleteItemButton({ children, ...rest }: DeleteItemButtonProps) {

    return (
        <DeleteItemButtonContainer {...rest}>
            <Trash size={16} />
            <span>REMOVER</span>
        </DeleteItemButtonContainer>
    )

}