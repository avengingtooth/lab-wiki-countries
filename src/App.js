// src/App.js
import "./App.css";
import countries from "./countries.json";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import {Route, Routes} from 'react-router-dom'
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
          <CountriesList countries={countries}></CountriesList>
          <Routes>
              <Route path=':id' element={<CountryDetails />}/>
              <Route path='/' element={<> </>}/>
          </Routes>
      </div>
    </div>
  )
}
export default App;