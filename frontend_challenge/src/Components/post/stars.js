
const Stars = ({rating}) => {
  return (
    <div>
    {[...Array(rating)].map((star) => {
        return (
          <span className="star">&#9733;</span>
        );
      })}
    </div>
  )
}

export default Stars
