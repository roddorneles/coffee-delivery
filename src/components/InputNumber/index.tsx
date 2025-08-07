import { Minus, Plus } from "phosphor-react";
import { InputNumberContainer } from "./style";

export function InputNumber() {

    return (
        <InputNumberContainer>

            <button>
                <Minus size={16} />
            </button>

            <span>1</span>

            <button>
                <Plus size={16} />
            </button>

        </InputNumberContainer>
    )

}