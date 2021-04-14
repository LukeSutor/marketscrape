import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Home from './components/Home';
import SearchResults from './components/SearchResults';


function App() {

  const [search, setSearch] = useState("")

  const [amazonJSON, setAmazonJSON] = useState("")

  const [walmartJSON, setWalmartJSON] = useState("")

  const [ebayJSON, setEbayJSON] = useState("")

  const [loading, setLoading] = useState(false)

  function changeSearch(childSearch) {
    setSearch(childSearch)
  }

  useEffect(() => {
    if (search !== "") {
      scrape()
    }
    // eslint-disable-next-line
  }, [search])
  
    async function fetchEbay() {
      await fetch(`https://marketscrape-api.herokuapp.com/ebayScraper?search=${search}`, Headers, {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
      .then(res => res.json())
      .then(res => setEbayJSON(res))
      .catch(err => err)
    }

  async function fetchAmazon() {
    await fetch(`https://marketscrape-api.herokuapp.com/amazonScraper?search=${search}`, Headers, {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
      .then(res => res.json())
      .then(res => setAmazonJSON(res))
      .catch(err => err)
  }

  async function fetchWalmart() {
    await fetch(`https://marketscrape-api.herokuapp.com/walmartScraper?search=${search}`, Headers, {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
      .then(res => res.json())
      .then(res => setWalmartJSON(res))
      .catch(err => err)
  }

  async function scrape() {
    setLoading(true)
    setEbayJSON("")
    setAmazonJSON("")
    setWalmartJSON("")
    await fetchEbay()
    await fetchAmazon()
    await fetchWalmart()
    setLoading(false)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' render={props => <Home {...props} changeSearch={changeSearch} />} />
        <Route path='/search/:search' render={props => <SearchResults {...props} loading={loading} amazonJSON={amazonJSON} 
        walmartJSON={walmartJSON} ebayJSON={ebayJSON} />} />
        <Route path='*'>
          <Redirect to='/'/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;