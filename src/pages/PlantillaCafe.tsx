import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import './plantillaCafe.css'

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

const PlantillaCafe = () => {
    const { cafeId } = useParams()

    const [cafe, setCafe] = useState<Cafe>()

    const API_CAFES = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'

    const traerCafes = async () => {
        const response = await fetch(API_CAFES)
        const data = await response.json()

        setCafe(data[cafeId - 1])
    }

    useEffect(() => {
        traerCafes()
    }, [])

    return (
        <>
            <div id='cardCafe'>
                {
                    cafe &&
                    <>
                        <img src={cafe.image} alt={cafe.name} />
                        <h1>{cafe.name}</h1>
                        <h3>{cafe.price}</h3>
                        <button>Comprar</button>
                    </>
                }
            </div>

            <Link to='/useffect'>Volver a la lista de cafes</Link>
        </>
    )
}

export default PlantillaCafe