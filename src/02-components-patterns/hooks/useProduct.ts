import { useEffect, useRef, useState } from "react"
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
    const [quantity, setQuantity] = useState<number>(initialValues?.count || value)
    const isMounted = useRef(false)

    const increaseBy = (value: number) => {

        const newValue = Math.max(quantity + value, 0);

        if(initialValues!.maxCount! < newValue) return

        // Este math.max hace que el valor mayor de esos 2 en prev + value, sean myores, pero sino cumple
        // El 0 siempre responderá. Entonces si el prev es -1 y value es -1, pero a parte hay un 0, el cero es mayor
        //  y por ende, el mayor es 0
        
        setQuantity(newValue);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onChange && onChange({ quantity: newValue, product })
    }

    const isMaxCounteReached =  !!initialValues?.maxCount &&  initialValues.maxCount === quantity

    const reset = () => {
        setQuantity(initialValues?.count || value)
    }

    useEffect(() => {
        if (!isMounted.current) return;
        setQuantity(quantity)
    }, [quantity])

    useEffect(() => {
        isMounted.current = true
    }, [])

    return {
        quantity,
        maxCount: initialValues?.maxCount,
        isMaxCounteReached,
        increaseBy,
        setQuantity,
        reset
    }
}
