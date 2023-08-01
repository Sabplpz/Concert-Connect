import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ConcertList({ onSelectConcert, onConcertDataChange }) {
  const [concertsData, setConcertsData] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const fetchConcertNames = async () => {
      try {
        const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events', {
          params: {
            apikey: 'KzV8OCOnhvpGtaoVP1AFZP5qCS4jvNgG',
            keyword,
            locale: '*',
            size: 200,
          },
        });

        // Extract concert data from the API response
        const data = response.data?._embedded?.events || [];
        setConcertsData(data);
        onConcertDataChange(data); // Pass the concert data to the parent component
      } catch (error) {
        console.error('Error fetching concert names:', error.message);
      }
    };

    fetchConcertNames();
  }, [keyword, onConcertDataChange]);

  return (
    <div>
      <label htmlFor="keyword">Search Concerts:</label>
      <input
        type="text"
        name="keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onBlur={() => onSelectConcert(keyword)}
      />

      <select onChange={(e) => onSelectConcert(e.target.value)}>
        <option value="">Select Concert</option>
        {concertsData.map((concert, index) => (
          <option key={index} value={concert.name}>
            {concert.name}
          </option>
        ))}
      </select>
    </div>
  );
}

function AddConcert() {
  const [selectedConcert, setSelectedConcert] = useState(null);
  const [band, setBand] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [city, setCity] = useState('');
  const [concertsData, setConcertsData] = useState([]);

  const handleConcertSelection = (eventName) => {
    // Find the selected concert data by matching the event name
    const selectedConcertData = concertsData.find((concert) => concert.name === eventName);
    setSelectedConcert(selectedConcertData);

    // Autofill the "Band" field with the attractions data
    const attractionsData = selectedConcertData?._embedded?.attractions || [];
    const bandName = attractionsData[0]?.name || ''; // Assuming the first attraction is the band name
    setBand(bandName);

    // Autofill the "Date" field with the concert date
    const concertDate = selectedConcertData?.dates?.start?.localDate || '';
    setDate(concertDate);

    // Autofill the "Venue" field with the venue name
    const venueName = selectedConcertData?._embedded?.venues[0]?.name || '';
    setVenue(venueName);

    // Autofill the "City" field with the city name
    const cityName = selectedConcertData?._embedded?.venues[0]?.city?.name || '';
    setCity(cityName);
  };

  const handleConcertDataChange = (data) => {
    // Store the concert data in the state
    setConcertsData(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Your form submission logic to add the concert to the database
    console.log('Submitting concert data:', {
      band,
      date,
      venue,
      city,
    });

    // Clear the form fields after successful submission
    setBand('');
    setDate('');
    setVenue('');
    setCity('');
    setSelectedConcert(null);
  };

  return (
    <div>
      <section>
        <h2>The best way to remember incredible concert experiences</h2>
      </section>

      <section>
        <h2>What was the last concert you went to?</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="concert">Select Concert:</label>
          <ConcertList onSelectConcert={handleConcertSelection} onConcertDataChange={handleConcertDataChange} />

          <label htmlFor="band">Band:</label>
          <input type="text" name="band" value={band} onChange={(e) => setBand(e.target.value)} />

          <label htmlFor="date">Date:</label>
          <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />

          <label htmlFor="venue">Venue:</label>
          <input type="text" name="venue" value={venue} onChange={(e) => setVenue(e.target.value)} />

          <label htmlFor="city">City:</label>
          <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} />

          <button type="submit">Add Concert</button>
        </form>
      </section>
    </div>
  );
}

export default AddConcert;
