import { useEffect, useState } from 'react';
import './styles.css'; // Import the CSS file

const GuestList = () => {
  const [guests, setGuests] = useState([]);
  const [showGuestList, setShowGuestList] = useState(false);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await fetch('https://birthday-rsvp-backend.onrender.com/api/rsvps');
        if (response.ok) {
          const data = await response.json();
          setGuests(data);
        } else {
          console.error('Failed to fetch guests');
        }
      } catch (error) {
        console.error('Error fetching guests:', error);
      }
    };

    fetchGuests();
  }, []);

  const attendingGuests = guests.filter(guest => guest.attendance === 'yes');
  const notAttendingGuests = guests.filter(guest => guest.attendance === 'no');

  return (
    <section>
      <h2>Guest List</h2>
      <button onClick={() => setShowGuestList(!showGuestList)}>
        {showGuestList ? 'Hide Guest List' : 'Show Guest List'}
      </button>
      {showGuestList && (
        <div className="guest-lists-container">
          <div className="guest-list">
            <h3>Attending</h3>
            <ol id="attendingGuestList">
              {attendingGuests.map((guest, index) => (
                <li key={index}>{guest.name}</li>
              ))}
            </ol>
          </div>
          <div className="guest-list">
            <h3>Not Attending</h3>
            <ol id="notAttendingGuestList">
              {notAttendingGuests.map((guest, index) => (
                <li key={index}>{guest.name}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </section>
  );
};

export default GuestList;