import { ErrorMessage, Field, useField } from 'formik'

export type MyTextInputType = 'text' | 'email' | 'password' | 'number' | 'checkbox';
interface Props {
    label: string;
    name: string;
    type?: MyTextInputType;
    placeholder?: string;
    // Nos permite poder agregar cualquier propiedad que se le quiera agregar al input
    // como por ejemplo un id, un className, etc.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {

    const [field] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <Field
                {...field}
                {...props}
            />
            <ErrorMessage name={props.name} component={'span'} />
        </>
    )
}
