import { type ComponentPropsWithoutRef, type ReactNode } from "react";

interface SelectProps extends ComponentPropsWithoutRef<'select'>{
    children: ReactNode
}
const CustomeSelect = ({value, onChange, children}: SelectProps) => {
    return (
        <select
            value={value}
            onChange={onChange}
          >
            {
                children
            }
          </select>
    )
}

export default CustomeSelect;