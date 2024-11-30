const Cafe = ({ imageSrc, cafeName }) => {
    return (
        <div className="cafe">
            <img src={imageSrc} alt={cafeName} />
            <h3> {cafeName} </h3>
        </div>
    )
}

export default Cafe