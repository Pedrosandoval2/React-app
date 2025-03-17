import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import { ROUTES } from './routers'

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
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={ROUTES.about}
                                className={({ isActive }) => isActive ? 'nav-active' : ''}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={ROUTES.users}
                                className={({ isActive }) => isActive ? 'nav-active' : ''}
                            >
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path={ROUTES.home} element={<h1>Home</h1>} />
                    <Route path={ROUTES.about} element={<h1>About</h1>} />
                    <Route path={ROUTES.users} element={<h1>Users</h1>} />
                    <Route path="/*" element={<Navigate to={ROUTES.home} />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
