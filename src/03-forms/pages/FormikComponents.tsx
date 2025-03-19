import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'


const schema = Yup.object({
    firstName: Yup
        .string()
        .max(15, 'Debe tener 15 caracteres o menos')
        .required('Requerido'),
    lastName: Yup
        .string()
        .max(15, 'Debe tener 15 caracteres o menos')
        .required('Requerido'),
    email: Yup
        .string()
        .email('El correo no tiene un formato valido')
        .required('Requerido'),
    terms: Yup
        .boolean()
        .oneOf([true], 'Debe aceptar los términos y condiciones'),
    jobType: Yup
        .string()
        .oneOf(['developer'], 'Invalid Job Type')
        .required('Required')
})

export const FormikComponents = () => {

    return (
        <div>
            <h1>FormikComponents</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={schema}
            >
                {(formik) => (
                    <Form>
                        <label htmlFor='firstName'>First Name</label>
                        <Field
                            name='firstName'
                            type="text"
                        />
                        <ErrorMessage name='firstName' component={'span'} />

                        <label htmlFor='lastName'>Last Name</label>
                        <Field
                            name='lastName'
                            type="text"
                        />
                        <ErrorMessage name='lastName' component={'span'} />


                        <label htmlFor='email'>Email</label>
                        <Field
                            name='email'
                            type="text"
                        />
                        <ErrorMessage name='email' component={'span'} />

                        <label>
                            Terms
                            <Field
                                name='terms'
                                type="checkbox"
                            />
                        </label>
                        <ErrorMessage name='terms' component={'span'} />

                        <label htmlFor='jobType'>Job Type</label>
                        <Field
                            name='jobType'
                            as='select'
                        >
                            <option value=''>Pick Something</option>
                            <option value='developer'>developer</option>
                            <option value='developer-junior'>Junior</option>
                        </Field>
                        <ErrorMessage name='jobType' component={'span'}/>

                        <button type='submit'>enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
