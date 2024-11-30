import { Toaster } from 'sonner'

const BaseLayout = ({ children }) => {
    return (
        <>
            <Toaster richColors />
            <h1>ESTOY EN TODAS LAS PAGINAS AL MISMO TIEMPO</h1>
            {children}
        </>
    )
}

export default BaseLayout