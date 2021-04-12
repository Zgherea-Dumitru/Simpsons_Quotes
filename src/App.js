import axios from 'axios';
import React from 'react';
import QuoteCard from './components/QuoteCard'

function App() {
  const defaultQuote = {
    quote: "Can't we have one meeting that doesn't end with us digging up a corpse?",
    character: "Mayor Quimby",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMayorQuimby.png?1497627527799",
    characterDirection: "Left"
  }

  const [quote, setQuote] = React.useState(defaultQuote);

  const getQoute = () => (
    axios.get("https://simpsons-quotes-api.herokuapp.com/quotes?count=1")
    .then(res => res.data)
    .then(data => setQuote(data[0]))
  );
  return (
    <div className="App">
      <QuoteCard {...quote}/>
      <button type="button" onClick={getQoute}>Get quote</button>
    </div>
  );
}

export default App;
