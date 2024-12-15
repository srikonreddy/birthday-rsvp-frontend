import { useState } from 'react';
import './styles.css'; // Import the CSS file

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: 'yes',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://birthday-rsvp-backend.onrender.com/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('RSVP submitted successfully!');
        setFormData({ name: '', email: '', attendance: 'yes' });
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit RSVP. Please try again.');
    }
  };

  return (
    <section>
      <h2>RSVP Below</h2>
      <form id="rsvpForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="attendance">Will you attend?</label>
          <select id="attendance" name="attendance" value={formData.attendance} onChange={handleChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group button-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default RSVPForm;