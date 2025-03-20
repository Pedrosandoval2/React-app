import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'

import { ROUTES, ROUTES_PUBLICS } from './routers'

import { FormikAbstractation, FormikComponents, FormikPage, FormikYupPage, RegisterPage } from '../03-forms/pages'

import reactLogo from '../assets/react.svg'
import { DinamicForm } from '../03-forms/pages/DinamicForm'

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
                        <li>
                            <NavLink
                                to={ROUTES_PUBLICS.formik_components}
                                className={({ isActive }) => isActive ? 'nav-active' : ''}
                            >
                                Formik Components
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={ROUTES_PUBLICS.formik_abstractation}
                                className={({ isActive }) => isActive ? 'nav-active' : ''}
                            >
                                Formik Abstractation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={ROUTES_PUBLICS.dinamic_form}
                                className={({ isActive }) => isActive ? 'nav-active' : ''}
                            >
                                DynamicForm
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path={ROUTES_PUBLICS.register} element={<RegisterPage />} />
                    <Route path={ROUTES_PUBLICS.formik} element={<FormikPage />} />
                    <Route path={ROUTES_PUBLICS.formik_yup} element={<FormikYupPage />} />
                    <Route path={ROUTES_PUBLICS.formik_components} element={<FormikComponents />} />
                    <Route path={ROUTES_PUBLICS.formik_abstractation} element={<FormikAbstractation />} />
                    <Route path={ROUTES_PUBLICS.dinamic_form} element={<DinamicForm />} />
                    <Route path="/*" element={<Navigate to={ROUTES.home} />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
