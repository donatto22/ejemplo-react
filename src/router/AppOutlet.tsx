import { Outlet } from 'react-router-dom'

const AppOutlet = () => {
    return (
        <>
            <h1>ESTOY EN TODAS LAS PAGINAS AL MISMO TIEMPO</h1>
            <Outlet />
        </>
    )
}

export default AppOutlet