import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useMutation } from '@apollo/client';
import { ADD_CONCERT } from '../utils/mutations';
import addConHero from '../assets/logo/Concert-H.jpeg'

function ConcertList({ onSelectConcert, onConcertDataChange }) {
  const [concertsData, setConcertsData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const selectRef = useRef(null);

  const handleSearchConcerts = async () => {
    try {
      const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events', {
        params: {
          apikey: 'KzV8OCOnhvpGtaoVP1AFZP5qCS4jvNgG',
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
        placeholder='Search for an Artist'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onBlur={() => {
            setTimeout(() => {
                if (document.activeElement !== selectRef.current) {
                    setShowDropdown(false);
                }
            }, 200);  // Delay for 200 milliseconds
        }}
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSearchConcerts();
            }
        }}
      />
      <button type="button" className="btn btn-outline mt-4 w-full md:w-auto" onClick={handleSearchConcerts}>Submit</button>

      {showDropdown && (
        <select 
          ref={selectRef}
          className="select select-bordered mt-4 w-full" 
          onChange={(e) => onSelectConcert(e.target.value)}
        >
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
  const [concert, setConcert] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [city, setCity] = useState('');
  const [genre, setGenre] = useState('');
  const [concertsData, setConcertsData] = useState([]);

  const [addConcert, { data }] = useMutation(ADD_CONCERT);

  const handleConcertSelection = (concertIndex) => {
    const selectedConcertData = concertsData[concertIndex];
    setSelectedConcert(selectedConcertData);

    const concertName = selectedConcertData.name || '';
    setConcert(concertName);

    const attractionsData = selectedConcertData?._embedded?.attractions || [];
    const artistName = attractionsData[0]?.name || '';
    setArtist(artistName);

    const concertDate = selectedConcertData?.dates?.start?.localDate || '';
    setDate(concertDate);

    const venueName = selectedConcertData?._embedded?.venues[0]?.name || '';
    setVenue(venueName);

    const cityName = selectedConcertData?._embedded?.venues[0]?.city?.name || '';
    setCity(cityName);

    const genre = selectedConcertData.classifications[0].genre.name || '';
    setGenre(genre);
  };

  const handleConcertDataChange = (data) => {
    setConcertsData(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let selectedConcert = { 
      artistName: artist, 
      concertName: concert, 
      date, 
      venueName: venue,
      city,
      genre
    };
    console.log('Submitting concert data:', selectedConcert);

    addConcert({
      variables: { ...selectedConcert },
    });

    setArtist('');
    setConcert('');
    setDate('');
    setVenue('');
    setCity('');
    setGenre('');
    setSelectedConcert(null);
  };

  return (
    <>
    <div className="hero min-h-[50vh]" style={{backgroundImage: `url(${addConHero})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Let The Show Begin!</h1>
      <p className="mb-5">A Nighttime Full of Lifelong Memories Awaits!<br></br> Search for an Artist and start planning today! </p>
    </div>
  </div>
</div>
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <section>

        <form onSubmit={handleSubmit} className="mb-0 rounded-lg shadow-lg sm:p-6 lg:p-8 text-center">
          <ConcertList onSelectConcert={handleConcertSelection} onConcertDataChange={handleConcertDataChange} />

          <div className="mt-6 shadow-lg grid grid-cols-2 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="artist" className="label">Artist:</label>
              <input type="text" className="input input-bordered input-primary w-full" name="artist" value={artist} onChange={(e) => setArtist(e.target.value)} />
            </div>

            <div>
              <label htmlFor="city" className="label">City:</label>
              <input type="text" className="input input-bordered input-primary w-full" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
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
              <label htmlFor="concert" className="label">Concert:</label>
              <input type="text" className="input input-bordered input-primary w-full" name="concert" value={concert} onChange={(e) => setConcert(e.target.value)} />
            </div>

            <div>
              <label htmlFor="genre" className="label">Genre:</label>
              <input type="text" className="input input-bordered input-primary w-full" name="genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
            </div>
          </div>

          <button className="btn btn-outline btn-secondary mt-6 w-full md:w-auto" type="submit">Add Concert</button>
        </form>
      </section>
    </div>
    </>
  );
}

export default AddConcert;


