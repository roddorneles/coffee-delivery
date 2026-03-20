import * as Select from "@radix-ui/react-select";
import { SelectTrigger, SelectContent, SelectItem, SelectViewport } from "./style";

interface SelectInputFormProps {
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    items?: string[];
    disabled?: boolean
}

export function SelectInputForm({ value, onChange, placeholder, items, disabled }: SelectInputFormProps) {
    return (
        <Select.Root value={value} onValueChange={onChange} disabled={disabled}>

            <SelectTrigger>
                <Select.Value placeholder={placeholder} />
            </SelectTrigger>

            <Select.Portal>
                <SelectContent position="popper">
                    <SelectViewport>
                        {
                            items?.map(item => {
                                return (
                                    <SelectItem key={item} value={item}>
                                        <Select.ItemText>{item}</Select.ItemText>
                                    </SelectItem>
                                )
                            })
                        }
                    </SelectViewport>
                </SelectContent>
            </Select.Portal>

        </Select.Root>
    );
}