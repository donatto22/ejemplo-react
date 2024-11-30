import { useEffect, useState } from 'react'
import Cafe from './shared/components/Cafe'

type Cafe = {
    available: boolean
    id: number
    image: string
    name: string
    popular: boolean
    price: string
    rating: number
    votes: number
}

const EjemploEffect = () => {

    const API_CAFES = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'

    const [cafes, setCafes] = useState<Array<Cafe>>([])

    const traerCafes = async () => {
        const response = await fetch(API_CAFES)
        const data = await response.json()
        console.log(data)
        setCafes(data)
    }

    useEffect(() => {
        traerCafes()
    }, [])

    return (
        <>
            <div>EjemploEffect</div>
            {
                // Prop-drilling - contexto - hooks personalizados
                cafes.map((cafe) => (
                    <Cafe key={cafe.id} cafeName={cafe.name} imageSrc={cafe.image} />
                ))
            }
            <div> Comprar </div>
        </>
    )
}

export default EjemploEffect