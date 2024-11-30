import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import EjemploEffect from '../pages/EjemploEffect'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/useffect' element={<EjemploEffect />} />
        </Routes>
    )
}

export default AppRouter