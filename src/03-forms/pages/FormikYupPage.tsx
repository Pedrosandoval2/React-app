import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'
import { useContext } from 'react'
import { formikContext } from '../store'


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
        .required('Requerido')
})

export const FormikYupPage = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log("🚀 ~ FormikPage ~ values:", values)
        },
        validationSchema: schema
    })
    return (
        <div>
            <h1>FormikPage Yup</h1>

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name</label>
                <input
                    type="text"
                    {...getFieldProps('firstName')}
                // Para verificar si es que ya no está en el foco el input, seleccionado
                //  y si no ejecuta el submit pero solo para el input y valida si tiene errores o no.
                // No es necesario porque el getFieldProps ya los tiene todo internamente
                // onBlur={handleBlur}
                // name='firstName'
                // onChange={handleChange}
                // value={values.firstName}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor='lastName'>Last Name</label>
                <input type="text" {...getFieldProps('lastName')} />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor='email'>Email</label>
                <input type="email" {...getFieldProps('email')} />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type='submit'>enviar</button>
            </form>

        </div>
    )
}
