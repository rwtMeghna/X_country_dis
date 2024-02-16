import React, { useEffect, useState } from "react";
// import "./styles.css";

const cardStyle = {
  width: "200px",
  border: "1px solid #ccc",
  borderRadius: "20px",
  margin: "10px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const imageStyle = {
  width: "100px",
  height: "100px",
};

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

export default function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    try {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => setCountries(data))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>

<div>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleSearch}
      />
</div>
    
    
    <div style={containerStyle}>
     
      {filteredCountries.map((country, index) => (
        <div key={index} style={cardStyle} className="countryCard">
          <img
            src={country.flags.png}
            alt={country.name.common}
            style={imageStyle}
          />
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
    </div>
  );
}
