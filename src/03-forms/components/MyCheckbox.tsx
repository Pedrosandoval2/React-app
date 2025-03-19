import { ErrorMessage, Field, useField } from 'formik'

interface Props {
    label: string;
    name: string;
}

export const MyCheckbox = ({ label, ...props }: Props) => {

    const [field] = useField({...props, type: 'checkbox'});

    return (
        <>
            <label>
                <Field
                    type='checkbox'
                    {...field}
                    {...props}
                />
                {label}
            </label>
            {/* Se puede utilizar el field o input ya que es lo mismo  */}

            {/* Igual que el input, cualquiera de los 2 se podría */}
            <ErrorMessage name={props.name} component={'span'} />
            {/* {meta.touched && meta.error &&  (<span>{meta.error}</span>)} */}
        </>
    )
}
