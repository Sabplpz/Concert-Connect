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

        const data = response.data?._embedded?.events || [];
        setConcertsData(data);
        onConcertDataChange(data);
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
          <option key={index} value={index}>
            {concert.name} - {concert.dates?.start?.localDate} - {concert?._embedded?.venues[0]?.city?.name}
          </option>
        ))}
      </select>
    </div>
  );
}

function AddConcert() {
  const [selectedConcert, setSelectedConcert] = useState(null);
  const [artist, setArtist] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [city, setCity] = useState('');
  const [concertsData, setConcertsData] = useState([]);

  const handleConcertSelection = (concertIndex) => {
    const selectedConcertData = concertsData[concertIndex];
    setSelectedConcert(selectedConcertData);

    const attractionsData = selectedConcertData?._embedded?.attractions || [];
    const artistName = attractionsData[0]?.name || '';
    setArtist(artistName);

    const concertDate = selectedConcertData?.dates?.start?.localDate || '';
    setDate(concertDate);

    const venueName = selectedConcertData?._embedded?.venues[0]?.name || '';
    setVenue(venueName);

    const cityName = selectedConcertData?._embedded?.venues[0]?.city?.name || '';
    setCity(cityName);
  };

  const handleConcertDataChange = (data) => {
    setConcertsData(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Submitting concert data:', {
      artist,
      date,
      venue,
      city,
    });

    setArtist('');
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

          <label htmlFor="artist">Artist:</label>
          <input type="text" name="artist" value={artist} onChange={(e) => setArtist(e.target.value)} />

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
