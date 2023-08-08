import React from 'react';
import '../Css/BookingForm.css';
const BookingForm = ({ movie, closepopup }) => {
const [numTickets, setNumTickets] = React.useState(1);
const [name, setName] = React.useState('');
const [email, setEmail] = React.useState('');
const [mobileNumber, setMobileNumber] = React.useState('');
const handleBookNow = () => {
 
  const formData = {
    movieName: movie.show.name,
    no_tickets:numTickets,
    customer_name:name,
    mail_id:email,
    mobile_no:mobileNumber,
  }; 
  console.log(formData);
  localStorage.setItem('bookingData', JSON.stringify(formData));

  closepopup();
};
return (
  <div className="booking-form-overlay">
    <div className="booking-form-modal">
      <div className="booking-form-header">
        <h3>Book Tickets for {movie.show.name}</h3>
        <button className="close-form-button" onClick={closepopup}>
          &times;
        </button>
      </div>
      

      <div className="booking-form-content">
      <div className="form-image">
            <img src={movie.show.image && movie.show.image.medium} alt={movie.show.name} />
          </div>
        <form className="form-inputs">
          <div className="form-group">
            <label htmlFor="numTickets">Number of Tickets:</label>
            <input
              type="number"
              id="numTickets"
              value={numTickets}
              onChange={(e) => setNumTickets(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="book-now-button"  onClick={handleBookNow}>
            Book Now
          </button>
        </form>
      </div>
    </div>
  </div>
  );
};
export default BookingForm;