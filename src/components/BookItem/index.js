import './index.css'

const BookItem = props => {
  const {bookDetails} = props
  const {name, imageUrl, description} = bookDetails

  return (
    <div className="book-container">
      <div className="title-description-container">
        <h1 className="name">{name}</h1>
        <p className="description">{description}</p>
      </div>
      <div class="imag-container">
        <img className="image" src={imageUrl} alt={`book ${name}`} />
      </div>
    </div>
  )
}

export default BookItem