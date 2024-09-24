import './App.css';
import TravelCard from "./component/TravelCard.js";
import Navbar from './component/Navbar.js';
import './style.css';
import TravelData from './component/TravelData.js';


function App() {

  const elements = TravelData.map(card => {
    return (
          <TravelCard 
          key={card.id}
          image={card.image}
          location={card.location}
          name={card.name}
          date={card.date}
          content={card.content}
            />
        );
    });

  return (
    <div className="App">
      <Navbar />
      <section className="card-list">
        {elements}
      </section>
    </div>
  );
}

export default App;
