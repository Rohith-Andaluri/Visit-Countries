import './index.css'

const VisitedItem = props => {
  const {countryDetails, onRemoveVisitedCountry} = props
  const {id, name, imageUrl} = countryDetails

  const onClickRemove = () => {
    onRemoveVisitedCountry(id)
  }
  return (
    <li className="visited-country-list">
      <img src={imageUrl} alt="thumbnail" className="country-image" />
      <div className="country-details-remove-container">
        <p className="visited-country-name">{name}</p>
        <button type="button" className="remove-button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedItem
