import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from './Quotes.json'
import Button from './components/Button'

function App() {
  const randomQuotes=Math.floor(Math.random() * quotes.length);
  const [quotesRand, setQuotesRand]=useState(randomQuotes);
  const changeQuote=()=>{
    const anotherQuote=Math.floor(Math.random() * quotes.length);
    setQuotesRand(anotherQuote);
  }
  const colors=["#845EC2","#008F7A","#4D8076","#C34A36","#FFC75F","#B0A8B9"]
  const colorsRand=Math.floor(Math.random() * colors.length);

  document.body.style =`background:${colors[colorsRand]}`;
  return (
    <div  style={{color: colors[colorsRand]}} className="App">
      <div className="quotes">
      <h2 className='quoteText'><i class="fa-solid fa-quote-left"></i>{" "} {quotes[quotesRand].quote}</h2>
     <h3 className='author'>{quotes[quotesRand].author}</h3>
     <Button colors={colors} colorsRand={colorsRand} changeQuote={changeQuote}/>
      </div>
    </div>
  )
}

export default App
