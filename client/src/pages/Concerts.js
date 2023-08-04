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
    <div className="overflow-x-auto mb-20">
      <table className="table">
        <thead>
          <tr>
            <th>Concert Name</th>
            <th>Artist</th>
            <th>Date</th>
            <th>Venue</th>
            <th>City</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {concertsData.map((concert, index) => (
            <tr key={index}>
              <td>{concert.name}</td>
              <td>
                <a href={`https://open.spotify.com/artist/${concert._embedded?.attractions?.length > 0 ? concert._embedded.attractions[0]?.externalLinks?.spotify?.[0]?.url : ""}`} target="_blank" rel="noopener noreferrer">
                  {concert?._embedded?.attractions[0]?.name}
                </a>
              </td>
              <td>{formatDate(concert.dates?.start?.localDate)}</td>
              <td>{concert?._embedded?.venues[0]?.name}</td>
              <td>{concert?._embedded?.venues[0]?.city?.name}</td>
              <td>
                <a href={concert.url} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-outline btn-secondary">Get Tickets</button>
                </a>
              </td>
              <td>
                <button className="btn btn-outline btn-primary" onClick={() => handleImGoingClick(concert)}>I'm going!</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
      <div className="container mx-auto">
        <section>
          <h2 className="mb-20 mt-20 text-2xl font-bold text-center">Search Concerts:</h2>
          <form onSubmit={handleSearch}>
            <input className="input input-bordered w-24 md:w-auto"
              type="text"
              name="keyword"
              placeholder="Enter artist name"
            />
            <button className="btn btn-outline" type="submit" >Search</button>
          </form>
          <ConcertList concertsData={concertsData} />
        </section>
      </div>
    </div>
  );
}

export default Concerts;