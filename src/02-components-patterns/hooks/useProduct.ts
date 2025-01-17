import { useRef, useState } from "react"
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange: (args: onChangeArgs) => void;
}

export const useProduct = ({ onChange, product }: useProductArgs) => {
    const [quantity, setQuantity] = useState(0)

    const isControlled = useRef(!!onChange)

    const increaseBy = (value: number) => {

        if (isControlled.current) {
            return onChange({quantity: value, product})
        }

        console.log("🚀 ~ useProduct ~ isControlled:", isControlled.current)

        const newValue = Math.max(quantity + value, 0);

        // Este math.max hace que el valor mayor de esos 2 en prev + value, sean myores, pero sino cumple
        // El 0 siempre responderá. Entonces si el prev es -1 y value es -1, pero a parte hay un 0, el cero es mayor
        //  y por ende, el mayor es 0
        setQuantity(newValue);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onChange && onChange({ quantity: newValue, product })
    }

    return {
        quantity,
        increaseBy,
        setQuantity
    }
}