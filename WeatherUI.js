import React, { useState } from "react";

// Fake weekday labels
const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState(
    WEEKDAYS.map(() => ({
      temp: "--",
      humidity: "--",
      wind: "--",
      precipitation: "--",
    }))
  );

  const fetchWeather = async () => {
    try {
      // 🔧 Use your real API key here (OpenWeatherMap example)
      const API_KEY = "YOUR_API_KEY";
      const CITY = "New York";

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("API error");
      }

      const data = await response.json();

      // The API gives forecast every 3 hours → pick one per day
      const updated = WEEKDAYS.map((_, idx) => {
        const entry = data.list[idx * 8] || data.list[0]; // fallback

        return {
          temp: entry.main.temp.toFixed(1),
          humidity: entry.main.humidity,
          wind: entry.wind.speed,
          precipitation: entry.pop * 100, // probability of precipitation
        };
      });

      setWeatherData(updated);
    } catch (err) {
      console.log("API failed → using fallback random data");

      // Fallback: generate random demo data
      const randomData = WEEKDAYS.map(() => ({
        temp: (Math.random() * 20 + 40).toFixed(1),
        humidity: Math.floor(Math.random() * 60 + 20),
        wind: (Math.random() * 10).toFixed(1),
        precipitation: Math.floor(Math.random() * 100),
      }));

      setWeatherData(randomData);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>5-Day Weather Forecast</h1>

      {/* Update Button */}
      <button style={styles.button} onClick={fetchWeather}>
        Update Weather
      </button>

      {/* Weather Grid */}
      <div style={styles.grid}>
        {WEEKDAYS.map((day, i) => (
          <div key={i} style={styles.card}>
            <h2 style={styles.day}>{day}</h2>

            <p><strong>Temp:</strong> {weatherData[i].temp}°C</p>
            <p><strong>Humidity:</strong> {weatherData[i].humidity}%</p>
            <p><strong>Wind:</strong> {weatherData[i].wind} m/s</p>
            <p><strong>Precipitation:</strong> {weatherData[i].precipitation}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Inline styling for clean layout
const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: "1rem",
  },
  button: {
    padding: "10px 18px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "8px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    marginBottom: "2rem",
  },
  grid: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    width: "180px",
    padding: "1rem",
    borderRadius: "10px",
    background: "#f7f7f7",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
  },
  day: {
    marginBottom: "0.5rem",
  },
};
