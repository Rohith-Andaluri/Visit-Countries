import './index.css'

const CountriesItem = props => {
  const {countryDetails, addCountry} = props
  const {id, name, isVisited} = countryDetails

  const onVisitButtonClicked = () => {
    addCountry(id)
  }

  return (
    <li className="country-container">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button
          className="visit-button"
          type="button"
          onClick={onVisitButtonClicked}
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesItem
