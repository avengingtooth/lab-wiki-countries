import { Link, useParams } from 'react-router-dom'
import allCountries from '../countries.json'

function getCountryData(id){
  console.log(id, 'asdf')
  return allCountries.filter(e => {return(e.alpha3Code === id?e:'')})[0]
}

function CountryDetails(){
    const countryId = useParams().id
    const country = getCountryData(countryId)
    const borderingIds = country.borders
    console.log(borderingIds)
    const neighboringCountries = borderingIds.map(eId => {
      console.log(eId, 'p')
      return getCountryData(eId)
    })
    console.log({neighboringCountries}, 'jk')
    return(
      <div className="col-7">
        <h1>{country.name.official}</h1>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {
                    neighboringCountries.map(
                      neighbor => 
                        <li key={neighbor.alpha3Code}>
                          <Link to={`/${neighbor.alpha3Code}`}>{neighbor.name.common}</Link>
                        </li>
                    )
                  }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default CountryDetails