import { ChangeEvent, useState } from "react"

export const useForm = <T>(initialState: T) => {

    const [formData, setFormData] = useState(initialState)

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData((val) => ({
            ...val,
            [event.target.name]: event.target.value
        }))
    }

    const reset = () => {
        setFormData(initialState)
    }

    return {
        formData,
        reset,
        onChange
    }
}
