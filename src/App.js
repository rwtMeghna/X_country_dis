import { useEffect, useState } from "react";
// import "./styles.css";

const cardStyle = {
  width: "200px",
  border: "1px solid #ccc",
  borderRaidus: "20px",
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

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={containerStyle}>
      {countries.map((country) => (
        <div style={cardStyle}>
          <img
            src={country.flags.png}
            alt={country.name.common}
            style={imageStyle}
          />
          <h1>{country.name.common}</h1>
        </div>
      ))}
    </div>
  );
}
