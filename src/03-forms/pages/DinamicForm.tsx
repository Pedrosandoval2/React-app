/* eslint-disable @typescript-eslint/no-explicit-any */
import { MySelect, MyTextInput } from '../components';
import { MyTextInputType } from '../components/MyTextInput';
import formJson from '../data/custom-form.json';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

interface FormJson {
    type: string;
    name: string;
    label: string;
    placeholder?: string;
    options?: { value: string, name: string }[];
    value: string;
}

// Esto es para que sea dinamico y se genere dependiendo de la cantidad de inputs que tenga el json en el initialValues
const initialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {
    initialValues[input.name] = input.value

    if (!input.validation) continue;

    let schema = Yup.string()

    for (const rule of input.validation) {
        if (rule.type === 'required') {
            schema = schema.required('Este campo es requerido')
        }
        if (rule.type === 'minLength') {
            schema = schema.min(rule.value!, `El valor minimo es ${rule.value}`)
        }
        if (rule.type === 'maxLength') {
            schema = schema.max(rule.value!, `El valor máximo es ${rule.value}`)
        }
        if (rule.type === 'format') {
            schema = schema.email('El email no es válido')
        }
    }

    requiredFields[input.name] = schema

}

const validationShema = Yup.object({ ...requiredFields })

export const DinamicForm = () => {
    return (
        <div>
            <h1>Dinamic Form</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationShema}
            >
                {() => (
                    <Form noValidate>
                        {formJson.map(({ name, label, placeholder, type, options }: FormJson) => {

                            if (type === 'input' || type === 'password' || type === 'email') {
                                return (
                                    <MyTextInput
                                        key={name}
                                        type={type as MyTextInputType}
                                        name={name}
                                        label={label}
                                        placeholder={placeholder}
                                    />
                                )

                            } else if (type === 'select') {
                                return (
                                    <MySelect key={name} name={name} label={label} options={options!} />
                                )
                            }

                            return <h1>Type: {type} no es aceptado</h1>
                        })}
                        <button type="submit">Submit</button>;
                    </Form>
                )}
            </Formik>

        </div>
    )
}
