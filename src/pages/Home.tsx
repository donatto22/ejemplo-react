import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    // toda la logica
    const [contador, setContador] = useState(0)
    const [multiplicador, setMultiplicador] = useState(1)
    const [esPar, setEsPar] = useState<boolean>(false)

    const verificarSiEsPar = () => {
        (contador % 2 == 0) ? setEsPar(true) : setEsPar(false)
    }

    return (
        <>
            <div>Contador: {contador} </div>
            <div>Multiplicador: {multiplicador} </div>
            <div>Es Par?: {esPar ? 'Si' : 'No'} </div>
            <button onClick={() => setContador((previo) => previo += 1)}>Aumentar</button>
            <button onClick={() => setContador((previo) => previo -= 1)}>Disminuir</button>
            <button onClick={() => setContador((previo) => previo ** 2)}>Su cuadrado</button>
            <button onClick={() => setContador((previo) => previo ** 0.5)}>Su raiz</button>
            <button onClick={verificarSiEsPar}>Verificar si es par</button>

            <br />

            <h3>Multiplicador</h3>
            <button onClick={() => setMultiplicador((previo) => previo += 1)}>Aumentar</button>
            <button onClick={() => setMultiplicador((previo) => previo -= 1)}>Disminuir</button>

            <br />
            <hr />

            <Link to='/useffect'>Cafes</Link>
        </>
    )
}

export default Home