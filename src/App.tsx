import Countdown from './components/Countdown';
import RSVPForm from './components/RSVPForm/RSVPForm';
import './App.css';
import GuestList from './components/GuestList/GuestList';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Sri's 25th Birthday</h1>
        <h2>Hey y'all, Welcome to My 25th Birthday Celebration Website</h2>
        <h4>I thought I would put the skills I use at work to play. My birthday is coming up on the 11th of January (you're welcome Isha ;))</h4>
       <h4>I'm planning a weeekend away with my nearest and dearest (location TBC) for the dates of 10th - 12th January</h4>
        <h4>I'm booking an Air B&B, so on the Friday night, I would love to grab some drinks in town and let our hair down, Then, on the Saturday, which is the day of my birthday, I would love to host a birthday dinner which my family will join us for part. What I need from you all is just to be there, besties, so please help me finalise numbers by letting me know if you can make it :)</h4>
      </header>
      <main>
      <Countdown />
        <RSVPForm />
        <GuestList />
      </main>
      <footer>
      </footer>
    </div>
  );
};

export default App;
