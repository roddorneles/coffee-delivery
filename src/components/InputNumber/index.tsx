import { Minus, Plus } from "phosphor-react";
import { InputNumberContainer } from "./style";

interface InputNumberProps {
    number: number,
    onPlus: () => void,
    onMinus: () => void
}

export function InputNumber({ number, onMinus, onPlus }: InputNumberProps) {

    return (
        <InputNumberContainer>

            <button onClick={onMinus} type="button">
                <Minus size={16} />
            </button>

            <span>{number}</span>

            <button onClick={onPlus} type="button">
                <Plus size={16} />
            </button>

        </InputNumberContainer>
    )

}