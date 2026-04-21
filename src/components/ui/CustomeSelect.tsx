import { type ComponentPropsWithoutRef, type Dispatch, type ReactNode } from "react";

interface SelectProps extends ComponentPropsWithoutRef<'select'>{
    changeHandler:  Dispatch<React.SetStateAction<string>>;
    children: ReactNode
}
const CustomeSelect = ({value, changeHandler, children}: SelectProps) => {
    return (
        <select
            value={value}
            onChange={(e) => { changeHandler(e.target.value);}}
          >
            {
                children
            }
          </select>
    )
}

export default CustomeSelect;