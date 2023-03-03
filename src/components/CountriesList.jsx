import { Link } from 'react-router-dom'

function CountriesList(props){
    const countries = props.countries
    return(
        <div className="col5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
                {
                    countries.map(country => {
                        return (
                            <Link key={country.alpha3Code} to={`/${country.alpha3Code}`} className="listItem">
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                                <p>{country.name.official}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CountriesList