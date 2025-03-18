import { FormEvent } from 'react'
import '../styles/styles.css'
import { useForm } from '../hooks/useForm'

export const RegisterPage = () => {

    const { formData, onChange, reset } = useForm({
        name: '',
        email: '',
        password: '',
        passwordRepeat: ''
    });

    const { email, name, password, passwordRepeat } = formData

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={(e) => onSubmit(e)}>
                <input
                    type="text"
                    placeholder="Name"
                    name='name'
                    value={name}
                    onChange={onChange}
                    className='hass-error'
                />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}
                <input
                    type="email"
                    placeholder="email"
                    name='email'
                    value={email}
                    onChange={onChange}
                />
                <input
                    type="password"
                    name='password'
                    placeholder="password"
                    value={password}
                    onChange={onChange}
                />
                <input
                    type="password"
                    name='passwordRepeat'
                    placeholder="repeat password"
                    value={passwordRepeat}
                    onChange={onChange}
                />

                <button
                    type='submit'
                >
                    Create
                </button>

                <button onClick={reset}>
                    reset
                </button>

            </form>
        </div>
    )
}
