
import { useState } from 'react';
import './assets/App.css'
import CardList from './components/CardList';
import SearchForm from './components/SearchForm';
function App() {
  const [cards, setCards] = useState([])
  return (
    <div className="flex flex-col">
      <div className="flex j-center bg-red-700">
        <h1 className="text-3xl color-white py-2 text-center">
          Pokemon TCG Search
        </h1>
      </div>
      <div className="flex flex-col">
        <SearchForm setCards={setCards}/>
        <CardList cards={cards}/>
      </div>
    </div>
  );
}

export default App;
