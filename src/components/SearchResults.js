import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './css/searchResults.css'
import { loadingSpinner } from './loadingSpinner'
import amazon_logo from '../images/amazon_logo.png'
import walmart_logo from '../images/walmart_logo.png'
import ebay_logo from '../images/ebay_logo.png'
import down_arrow from '../images/down_arrow.png'
import Circles from './Circles'

export default function SearchResults(props) {

  const { search } = useParams()

  const [divHeight, setDivHeight] = useState(0)

  useEffect(() => {
    document.title = `Marketscrape | ${search}`
    window.scrollTo(0, 0)
    props.changeSearch(search)
    // eslint-disable-next-line
  }, [search])

  useEffect(() => {
    setDivHeight(document.querySelector("#search-results").offsetHeight)
  }, [props.amazonJSON, props.walmartJSON, props.ebayJSON])


  return (
    <div id="search-results" className="px-4 md:px-16 py-16">

      {/* Background circles */}
      <Circles divHeight={divHeight} />

      <h1 className="flex mb-12 text-xl md:text-4xl lg:text-5xl font-light whitespace-nowrap">Search results for {search} {props.loading && loadingSpinner()}</h1>

      {/* Ebay listings */}
      {(!props.loading || props.ebayJSON !== "") &&
        <div className="listings-container">
          <a href={`https://www.ebay.com/sch/i.html?_nkw=${search}`} target="_blank" rel="noreferrer">
            <img src={ebay_logo} alt="Ebay" className="w-32 mb-4 transform hover:scale-105 duration-500" />
          </a>
          {props.ebayJSON === "" ?
            <p className="my-8 text-xl text-center ">Sorry, no listings for <span className="font-bold">{search}</span> found.</p>
            :
            <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-x-4 gap-y-6">
              {Object.values(props.ebayJSON).map(({ name, price, link, image }) => {
                return (
                  <a key={image} href={`${link}`} target="_blank" rel="noreferrer"
                    className="listings relative lg:grid lg:grid-cols-3 md:gap-4 h-min px-4 py-4 transition duration-300 ease-in-out">
                    <img src={image} alt={name} className="max-h-24 max-w-24 mx-auto my-auto mb-4 md:mb-0 px-2 py-2 bg-white rounded-lg transform hover:scale-105 duration-500" />
                    <div className="col-span-2">
                      <p className="text-xs font-semibold">{name}</p>
                      <p className="font-bold">{price || "No price found"}</p>
                    </div>
                  </a>
                )
              })
              }
            </div >
          }
        </div>
      }

      {/* Amazon listings */}
      {(!props.loading || props.amazonJSON !== "") &&
        <div className="listings-container">
          <a href={`https://www.amazon.com/s?k=${search}`} target="_blank" rel="noreferrer">
            <img src={amazon_logo} alt="Amazon" className="w-32 mb-4 transform hover:scale-105 duration-500" />
          </a>
          {props.amazonJSON === "" ?
            <p className="my-8 text-xl text-center ">Sorry, no listings for <span className="font-bold">{search}</span> found.</p>
            :
            <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-x-4 gap-y-6">
              {Object.values(props.amazonJSON).map(({ name, price, link, image }) => {
                return (
                  <a key={image} href={`https://amazon.com${link}`} target="_blank" rel="noreferrer"
                    className="listings relative lg:grid lg:grid-cols-3 md:gap-4 h-min px-4 py-4 transition duration-300 ease-in-out">
                    <img src={image} alt={name} className="max-h-24 max-w-24 mx-auto my-auto mb-4 md:mb-0 px-2 py-2 bg-white rounded-lg transform hover:scale-105 duration-500" />
                    <div className="col-span-2">
                      <p className="text-xs font-semibold">{name}</p>
                      <p className="font-bold">{price || "No price found"}</p>
                    </div>
                  </a>
                )
              })
              }
            </div >
          }
        </div>
      }


      {/* Walmart listings */}
      {(!props.loading || props.walmartJSON !== "") &&
        <div className="listings-container">
          <a href={`https://www.walmart.com/search/?query=${search}`} target="_blank" rel="noreferrer">
            <img src={walmart_logo} alt="Walmart" className="w-40 mb-4 transform hover:scale-105 duration-500" />
          </a>
          {props.walmartJSON === "" ?
            <p className="my-8 text-xl text-center ">Sorry, no listings for <span className="font-bold">{search}</span> found.</p>
            :
            <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-x-4 gap-y-6">
              {Object.values(props.walmartJSON).map(({ name, price, link, image }) => {
                return (
                  <a key={image} href={`https://walmart.com${link}`} target="_blank" rel="noreferrer"
                    className="listings relative lg:grid lg:grid-cols-3 md:gap-4 h-min px-4 py-4 transition duration-300 ease-in-out">
                    <img src={image} alt={name} className="max-h-24 max-w-24 mx-auto my-auto mb-4 md:mb-0 px-2 py-2 bg-white rounded-lg transform hover:scale-105 duration-500" />
                    <div className="col-span-2">
                      <p className="text-xs font-semibold">{name}</p>
                      <p className="font-bold">{price || "No price found"}</p>
                    </div>
                  </a>
                )
              })
              }
            </div >
          }
        </div>
      }

      {/* Back button top left */}
      <button onClick={() => props.history.push('/')} className="absolute top-4 left-4 md:left-16 text-xl text-semibold focus:outline-none">
        <img src={down_arrow} alt="Back" className="w-10 h-10 transform rotate-90" /></button>
    </div>
  )
}
