import { ErrorMessage, Field, useField } from 'formik'

interface Props {
    label: string;
    name: string;
    options: { value: string, name: string }[];
}

export const MySelect = ({ label, ...props }: Props) => {

    const [field] = useField(props);

    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            {/* Se puede utilizar el field o input ya que es lo mismo  */}
            <Field
                as='select'
                {...field}
                {...props}
            >
                {props.options.map((option) => (
                    <option key={option.name} value={option.value}>{option.name}</option>
                ))}
            </Field>
            <ErrorMessage name={props.name} component={'span'} />
        </>
    )
}
