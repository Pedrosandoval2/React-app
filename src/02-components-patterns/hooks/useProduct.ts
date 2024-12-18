import { useState } from "react"

export const useProduct = () => {
    const [quantity, setQuantity] = useState(0)

    const increaseBy = (value: number) => {
        // Este math.max hace que el valor mayor de esos 2 en prev + value, sean myores, pero sino cumple
        // El 0 siempre responderá. Entonces si el prev es -1 y value es -1, pero a parte hay un 0, el cero es mayor
        //  y por ende, el mayor es 0
        setQuantity(prev => Math.max(prev + value, 0))
    }

    return {
        quantity,
        increaseBy
    }
}