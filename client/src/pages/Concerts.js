import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CONCERT } from '../utils/mutations';
import axios from 'axios';
import SpotifyIcon from '../assets/icons/spotify green.png';
<script src="https://kit.fontawesome.com/435efa4ff0.js" crossorigin="anonymous"></script>

function ConcertList({ concertsData }) {
    const [addConcert, { data }] = useMutation(ADD_CONCERT);

    const handleGoing = async (concert) => {
        const concertData = {
            artistName: concert._embedded?.attractions?.[0]?.name || '',
            concertName: concert.name,
            date: concert.dates.start.localDate,
            venueName: concert._embedded?.venues?.[0]?.name || '',
            city: concert._embedded?.venues?.[0]?.city?.name || '',
            genre: concert.classifications[0]?.genre?.name || ''
        };

        try {
            await addConcert({
                variables: concertData,
            });
            alert('Concert added to your profile!');
        } catch (err) {
            console.error('Error adding concert:', err);
        }
    };    return (
        <div className="overflow-x-auto mb-20">
            <table className="min-w-full mt-4 border-collapse">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider break-words">
                            Concert Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider break-words">
                            Artist
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider break-words">
                            Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider break-words">
                            Venue
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider break-words">
                            City
                        </th>
                        <th className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                {concertsData.map((concert) => {
                    const artistName = concert._embedded?.attractions?.[0]?.name;
                    const spotifyUrl = concert._embedded?.attractions?.[0]?.externalLinks?.spotify?.[0]?.url;
                    return (
                        <tr key={concert.id}>
                            <td className="px-6 py-4 break-words">{concert.name}</td>
                            <td className="px-6 py-4 break-words">
                                {spotifyUrl ? (
                                    <a href={spotifyUrl} target="_blank" rel="noopener noreferrer">
                                        {artistName}
                                        <img src={SpotifyIcon} alt="Spotify" className="inline ml-2 h-4 w-4"/>
                                    </a>
                                ) : (
                                    artistName
                                )}
                            </td>
                            <td className="px-6 py-4 break-words">{concert.dates.start.localDate}</td>
                            <td className="px-6 py-4 break-words">{concert._embedded?.venues?.[0]?.name}</td>
                            <td className="px-6 py-4 break-words">{concert._embedded?.venues?.[0]?.city?.name}</td>
                            <td className="px-6 py-4">
                                <a href={concert.url} target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-outline btn-secondary md:mt-0">
                                        Get Tickets
                                    </button>
                                </a>
                            </td>
                            <td className="px-6 py-4">
                                <button className="btn btn-outline btn-primary md:mt-0"
                                onClick={() => handleGoing(concert)}>
                                    I'm Going!
                                </button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

function Concerts() {
    const [concertsData, setConcertsData] = useState([]);

    const handleSearch = async (event) => {
        event.preventDefault();
        const searchKeyword = event.target.elements.keyword.value;
        try {
            const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events', {
                params: {
                    apikey: 'KzV8OCOnhvpGtaoVP1AFZP5qCS4jvNgG',
                    keyword: searchKeyword,
                    locale: '*',
                    size: 50,
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
            <div className="container mx-auto p-4">
                <section>
                    <h2 className="mb-10 mt-20 text-2xl font-bold text-center">Search Concerts</h2>
                    <form onSubmit={handleSearch} className="mb-10 flex justify-center items-center gap-4">
                        <input className="input input-bordered w-3/6"
                            type="text"
                            name="keyword"
                            placeholder="Enter artist name"
                        />
                        <button className="btn btn-secondary btn-outline" type="submit">
                            Search
                        </button>
                    </form>
                    <ConcertList concertsData={concertsData} />
                </section>
            </div>
        </div>
    );
}

export default Concerts;
