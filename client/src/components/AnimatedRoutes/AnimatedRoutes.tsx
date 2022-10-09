import { Routes, Route, useLocation } from 'react-router-dom'
import { ROUTES } from '../../routes/routes'
import Login from '../Home/Login/Login'
import Home from '../Home/MainComponent/Home'
import NotFound from '../NotFound/NotFound'
import Todos from '../Todos/MainComponent/Todos'

import { AnimatePresence } from 'framer-motion'

type Props = {}

export default function AnimatedRoutes({ }: Props) {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path={ROUTES.default} element={<Home />} />
                <Route path={ROUTES.todos} element={<Todos />} />
                <Route path={ROUTES.login} element={<Login />} />
                <Route path={ROUTES.any} element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    )
}