import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import { ROUTES, ROUTES_PUBLICS } from './routers'
// import { RegisterPage } from '../03-forms/pages/RegisterPage'
import { FormikPage } from '../03-forms/pages/FormikPage'
import { RegisterPage } from '../03-forms/pages/RegisterPage'
import { FormikYupPage } from '../03-forms/pages/FormikYupPage'

export const Navigations = () => {
    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={reactLogo} alt='logo' />
                    <ul>
                        <li>
                            <NavLink
                                to={ROUTES_PUBLICS.register}
                                className={({ isActive }) => isActive ? 'nav-active' : ''}
                            >
                                Register Native
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={ROUTES_PUBLICS.formik}
                                className={({ isActive }) => isActive ? 'nav-active' : ''}
                            >
                                Formik
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={ROUTES_PUBLICS.formik_yup}
                                className={({ isActive }) => isActive ? 'nav-active' : ''}
                            >
                                Formik Yup
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path={ROUTES_PUBLICS.register} element={<RegisterPage />} />
                    <Route path={ROUTES_PUBLICS.formik} element={<FormikPage />} />
                    <Route path={ROUTES_PUBLICS.formik_yup} element={<FormikYupPage />} />
                    <Route path="/*" element={<Navigate to={ROUTES.home} />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
