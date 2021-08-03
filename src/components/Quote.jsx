import { useEffect, useState } from 'react'
import { FaQuoteLeft, FaTumblr, FaTwitter } from 'react-icons/fa'

export const Quote = (props) => {
  const [quote, setQuote] = useState({})

  console.log(props.color)
  const getQuotes = async() => {
    const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    try {
      const response = await fetch(url)
      const json = await response.json()
      const quotes = json.quotes
      setQuote( quotes[ Math.floor( Math.random()*quotes.length ) ] )
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getQuotes()
  }, [])

  return (
    <div id="quote-box" className="w-2/5 bg-white rounded px-14 py-8 m-auto min-w-96">
      <blockquote id="text" className={`text-3xl text-center text-${props.color}-400`}>
        <FaQuoteLeft className="inline mr-3 mb-2"/>
        <span>{quote.quote}</span>
      </blockquote>
      <div id="author" className={`text-right pt-3 text-${props.color}-400 font-light`}>- {quote.author}</div>
      <div className="flex mt-4">
        <a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank" rel="noreferrer">
          <FaTwitter className={`h-full w-full bg-${props.color}-400 px-3 rounded text-white`}/>
        </a>
        <a href="https://twitter.com/intent/tweet" id="tumblr-quote" target="_blank" rel="noreferrer"
        className="ml-2">
          <FaTumblr className={`h-full w-full bg-${props.color}-400 px-3 rounded text-white text-xs`}/>
        </a>
        <button id="new-quote" className={`bg-${props.color}-400 px-3 py-2 rounded text-white ml-auto`} onClick={() => {
          getQuotes()
          props.changeColor()
        }}>New quote</button>
      </div>
    </div>
  )
}
