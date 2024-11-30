import { useEffect, useState } from 'react'
import Cafe from '../shared/components/Cafe'
import { Link } from 'react-router-dom'
import BaseLayout from '../layout/BaseLayout'
import { toast } from 'sonner'

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
        try {
            const response = await fetch(API_CAFES)
            const data = await response.json()
            setCafes(data)

            toast.success('Cafes Cargados')
        } catch (error) {
            toast.error('No se logró obtener los cafes')
        }
    }

    useEffect(() => {
        traerCafes()
    }, [])

    return (
        <BaseLayout>
            <div>EjemploEffect</div>
            <Link to='/'>Home</Link>
            {
                // Prop-drilling - contexto - hooks personalizados
                cafes.map((cafe) => (
                    <Cafe key={cafe.id} cafeId={cafe.id} cafeName={cafe.name} imageSrc={cafe.image} />
                ))
            }
        </BaseLayout>
    )
}

export default EjemploEffect