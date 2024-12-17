import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import { route, ROUTES } from './routers'
import { Suspense } from 'react'

export const Navigations = () => {
    return (
        <Suspense fallback={null}>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={reactLogo} alt='logo' />
                        <ul>
                            {ROUTES.map(({ to, name }) => (
                                <li>
                                    <NavLink
                                        key={to + name}
                                        to={to}
                                        className={({ isActive }) => isActive
                                            ? 'nav-active'
                                            : ''
                                        }
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <Routes>
                        {ROUTES.map(({ path, Component }) => (
                            <Route key={path} path={path} element={<Component />} />
                        ))}
                        <Route path="/*" element={<Navigate to={route.lazy1} />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}

// Para hacer el suspence primero se tiene que importar con el
// const Lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage1'))
// y luego en globar de Suspense en el tiene un fallback que es cuando está cargando.
// Los componentes para poder ser importados en el lazy, tienen que estar en export default.