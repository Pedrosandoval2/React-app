import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element

interface Route {
    to: string
    path: string
    name: string
    // Se hace esto en caso se quiera hacer importanción directa sin suspence y con suspence
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

export const route = {
    lazy1: 'lazy1',
    lazy2: 'lazy2',
    lazy3: 'lazy3'
}

const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'))
const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'))

export const ROUTES: Route[] = [
    {
        path: `/lazyload/*`,
        to: `/lazyload/`,
        Component: LazyLayout,
        name: 'lazyLayout'
    },
    // {
    //     to: `/${route.lazy1}`,
    //     path: `${route.lazy1}`,
    //     Component: LazyLayout,
    //     name: 'lazy-1'
    // },
    {
        to: `/no-lazy`,
        path: `no-lazy`,
        Component: NoLazy,
        name: 'No Lazy'
    },
    // {
    //     to: `/${route.lazy2}`,
    //     path: `${route.lazy2}`,
    //     Component: Lazy2,
    //     name: 'lazy-2'
    // },
    // {
    //     to: `/${route.lazy3}`,
    //     path: `${route.lazy3}`,
    //     Component: Lazy3,
    //     name: 'lazy-3'
    // }
]