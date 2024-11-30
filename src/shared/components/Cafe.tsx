import { Link } from 'react-router-dom'

const Cafe = ({ cafeId, imageSrc, cafeName }) => {
    return (
        <div className="cafe">
            <img src={imageSrc} alt={cafeName} />
            <h3> <Link to={`/useffect/${cafeId}`}>{cafeName}</Link> </h3>
        </div>
    )
}

export default Cafe