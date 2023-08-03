import React, { useState } from 'react';
import axios from 'axios';

function ConcertList({ concertsData }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleImGoingClick = (concert) => {
    console.log(`I'm going to: ${concert.name}`);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Concert Name</th>
          <th>Artist</th>
          <th>Date</th>
          <th>Venue</th>
          <th>City</th>
          <th></th>
          <th></th> {/* New Column */}
        </tr>
      </thead>
      <tbody>
        {concertsData.map((concert, index) => (
          <tr key={index}>
            <td>{concert.name}</td>
            <td>
              <a href={`https://open.spotify.com/artist/${concert?._embedded?.attractions[0]?.externalLinks?.spotify[0]?.url}`} target="_blank" rel="noopener noreferrer">
                {concert?._embedded?.attractions[0]?.name}
              </a>
            </td>
            <td>{formatDate(concert.dates?.start?.localDate)}</td>
            <td>{concert?._embedded?.venues[0]?.name}</td>
            <td>{concert?._embedded?.venues[0]?.city?.name}</td>
            <td>
              <a href={concert.url} target="_blank" rel="noopener noreferrer">
                <button>Get Tickets</button>
              </a>
            </td>
            <td>
              {/* New Column Data */}
              <button onClick={() => handleImGoingClick(concert)}>I'm going!</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Concerts() {
  const [keyword, setKeyword] = useState('');
  const [concertsData, setConcertsData] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const searchKeyword = event.target.elements.keyword.value;
    try {
      const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events', {
        params: {
          apikey: '6sOPwHnIo993SJGpEOZxgkbNvGgHhQ9n',
          keyword: searchKeyword,
          locale: '*',
          size: 200,
        },
      });

      const data = response.data?._embedded?.events || [];
      setConcertsData(data);
    } catch (error) {
      console.error('Error fetching concert names:', error.message);
      setConcertsData([]);
    }
  };

  return (
    <div>
      <section>
        <h2>Browse Band Concert Histories</h2>
      </section>

      <section>
        <h2>Search Concerts:</h2>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="keyword"
            placeholder="Enter artist name"
          />
          <button type="submit">Search</button>
        </form>

        <ConcertList concertsData={concertsData} />
      </section>
    </div>
  );
}

export default Concerts;
