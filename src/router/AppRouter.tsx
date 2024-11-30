import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import EjemploEffect from '../pages/EjemploEffect'
import PlantillaCafe from '../pages/PlantillaCafe'

const AppRouter = () => {
    return (
        <Routes>

            {/* <Route element={<AppOutlet />}>
                <Route path='/' element={<Home />} />
                <Route path='/useffect' element={<EjemploEffect />} />
            </Route> */}

            <Route path='/' element={<Home />} />
            <Route path='/useffect' element={<EjemploEffect />} />
            <Route path='/useffect/:cafeId' element={<PlantillaCafe />} />

        </Routes>
    )
}

export default AppRouter