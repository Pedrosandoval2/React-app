import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import { ROUTES } from './routers'
import { LazyPage1 } from '../01-lazyload/pages/LazyPage1'
import { LazyPage2 } from '../01-lazyload/pages/LazyPage2'
import { LazyPage3 } from '../01-lazyload/pages/LazyPage3'

export const Navigations = () => {
    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={reactLogo} alt='logo' />
                    <ul>
                        <li>
                            <NavLink
                                to={ROUTES.home}
                                className={({ isActive }) => isActive ? 'nav-active' : ''}
                            >
                                Lazy 1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={ROUTES.about}
                                className={({ isActive }) => isActive ? 'nav-active' : ''}
                            >
                                Lazy 2
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={ROUTES.users}
                                className={({ isActive }) => isActive ? 'nav-active' : ''}
                            >
                                Lazy 3
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path={ROUTES.home} element={<LazyPage1 />} />
                    <Route path={ROUTES.about} element={<LazyPage2 />} />
                    <Route path={ROUTES.users} element={<LazyPage3 />} />
                    <Route path="/*" element={<Navigate to={ROUTES.home} />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
