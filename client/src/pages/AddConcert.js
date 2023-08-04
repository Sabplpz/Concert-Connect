import React, { useState } from 'react';
import axios from 'axios';

function ConcertList({ onSelectConcert, onConcertDataChange }) {
  const [concertsData, setConcertsData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchConcerts = async () => {
    try {
      const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events', {
        params: {
          apikey: '6sOPwHnIo993SJGpEOZxgkbNvGgHhQ9n',
          keyword,
          locale: '*',
          size: 100,
        },
      });

      const data = response.data?._embedded?.events || [];
      setConcertsData(data);
      onConcertDataChange(data);
      setShowDropdown(true);
    } catch (error) {
      console.error('Error fetching concert names:', error.message);
    }
  };

  return (
    <div className="mb-10">
      <input
        className="input input-bordered w-full md:w-1/2"
        type="text"
        name="keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onBlur={() => setShowDropdown(false)}
      />

      <button className="btn btn-outline mt-4 w-full md:w-auto" onClick={handleSearchConcerts}>Submit</button>

      {showDropdown && (
        <select className="select select-bordered mt-4 w-full" onChange={(e) => onSelectConcert(e.target.value)}>
          <option value="">Select Concert</option>
          {concertsData.map((concert, index) => (
            <option key={index} value={index}>
              {concert.name} - {concert.dates?.start?.localDate} - {concert?._embedded?.venues[0]?.city?.name}
            </option>
          ))}
        </select>
      )}
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
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <section>
        <h2 className="mb-5 mt-20 text-2xl font-bold text-center">What concert are you going to next?</h2>
        <p className="text-center">Search for an artist first</p>
        <form onSubmit={handleSubmit} className="mb-0 rounded-lg shadow-lg sm:p-6 lg:p-8 text-center">
          <ConcertList onSelectConcert={handleConcertSelection} onConcertDataChange={handleConcertDataChange} />

          <div className="mt-6 grid grid-cols-1 md:grid-cols-1 gap-4">
            <div>
              <label htmlFor="artist" className="label">Artist:</label>
              <input type="text" className="input input-bordered input-primary w-full" name="artist" value={artist} onChange={(e) => setArtist(e.target.value)} />
            </div>

            <div>
              <label htmlFor="date" className="label">Date:</label>
              <input type="date" className="input input-bordered input-primary w-full" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>

            <div>
              <label htmlFor="venue" className="label">Venue:</label>
              <input type="text" className="input input-bordered input-primary w-full" name="venue" value={venue} onChange={(e) => setVenue(e.target.value)} />
            </div>

            <div>
              <label htmlFor="city" className="label">City:</label>
              <input type="text" className="input input-bordered input-primary w-full" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
          </div>

          <button className="btn btn-outline btn-secondary mt-6 w-full md:w-auto" type="submit">Add Concert</button>
        </form>
      </section>
    </div>
    
  );
}

export default AddConcert;


