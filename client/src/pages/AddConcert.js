import React, { useState } from 'react';

function AddConcert() {
  const [band, setBand] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [city, setCity] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to submit the concert data to the server/database here
    // You can use the state variables (band, date, venue, city) to get the user input
    // and make API calls to TicketMaster API for autofilling band, venue, and city fields if needed
  };

  return (
    <div>
      <section>
        <h2>The best way to remember incredible concert experiences</h2>
      </section>

      <section>
        <h2>What was the last concert you went to?</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="band">Band:</label>
          <input
            type="text"
            id="band"
            value={band}
            onChange={(e) => setBand(e.target.value)}
            // You can implement autofill logic here using data from TicketMaster API
          />

          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label htmlFor="venue">Venue:</label>
          <input
            type="text"
            id="venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            // You can implement autofill logic here using data from TicketMaster API
          />

          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            // You can implement autofill logic here using data from TicketMaster API
          />

          <button type="submit">Add Concert</button>
        </form>
      </section>
    </div>
  );
}

export default AddConcert;
