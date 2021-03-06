import React, { useState, useEffect } from 'react'
import './css/home.css'

export default function Home(props) {

  const [search, setSearch] = useState("")

  useEffect(() => {
    document.title = "Marketscrape"
  }, [])

  function changeSearch(e) {
    e.preventDefault()
    props.changeSearch(search)
    props.history.push(`/search/${search}`)
  }

  return (
    <div id="home">

      {/* Circles */}
      <div className="circle c-light-blue c-1" />
      <div className="circle c-blue c-2" />
      <div className="circle c-purple c-3" />
      <div className="circle c-green c-4" />
      <div className="circle c-pink c-5" />

      <div className="container absolute left-1/2 top-1/2 flex items-center justify-center w-11/12 md:w-2/3 lg:w-3/5 text-center transform -translate-x-1/2 -translate-y-1/2">
        <div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-light">Marketscrape</h1>
          <p className="pt-4 pb-12 text-xs md:text-lg lg:text-xl text-gray-500 whitespace-nowrap">Easily search the most popular online marketplaces <br /> to ensure you're getting the best deal.</p>
          <form className="flex w-full mx-auto bg-white bg-opacity-20 rounded-full shadow-lg ring-1 ring-black ring-opacity-5">
            <input id="search" type="text" placeholder="Enter Search Term" onChange={e => setSearch(e.target.value)}
              className="w-full mx-1 md:mx-2 my-1 md:my-2 py-2 md:py-3 lg:py-4 pl-4 lg:pl-6 pr-full text-sm md:text-base lg:text-xl bg-gray-300 rounded-full bg-opacity-20 hover:bg-opacity-30 focus:bg-gray-200 focus:outline-none" />
            <button id="search-button" onClick={changeSearch} className="mx-1 md:mx-2 my-1 md:my-2 px-6 lg:px-8 text-white text-sm md:text-base lg:text-xl font-bold rounded-full focus:outline-none">Search</button>
          </form>
        </div>
      </div>
    </div>
  )
}