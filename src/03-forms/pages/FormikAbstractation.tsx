import { Form, Formik } from 'formik'

import { MyCheckbox, MySelect, MyTextInput } from '../components'
import { schema } from '../schemas/schema'

import '../styles/styles.css'

const options = [
    { value: 'developer', name: 'Developer' },
    { value: 'junior', name: 'Junior' }
]

export const FormikAbstractation = () => {

    return (
        <div>
            <h1>Formik Abstractation</h1>

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
                {() => (
                    <Form>
                        <MyTextInput name='firstName' label='First Name'/>
                        <MyTextInput name='lastName' label='Last Name'/>
                        <MyTextInput name='email' label='Email'/>
                        <MyCheckbox name='terms' label='Terms'/>
                        <MySelect name='jobType' label='Job Type' options={options} />

                        <button type='submit'>enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
