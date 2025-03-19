import * as Yup from 'yup';

export const schema = Yup.object({
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