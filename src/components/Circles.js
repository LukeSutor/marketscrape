import React from 'react'
import './css/circles.css'

export default function Circles(props) {

  const { divHeight } = props

  return (
    <>
      {/* Background circles, they will be hidden unless the height of the screen can fit them */}
      <div className={`circle c-green c-7 ${divHeight > 200 ? "" : "hidden"}`} />
      <div className={`circle c-pink c-8 ${divHeight > 100 ? "" : "hidden"}`} />
      <div className={`circle c-light-blue c-9 ${divHeight > 400 ? "" : "hidden"}`} />
      <div className={`circle c-purple c-10 ${divHeight > 750 ? "" : "hidden"}`} />
      <div className={`circle c-green c-11 ${divHeight > 700 ? "" : "hidden"}`} />
      <div className={`circle c-blue c-12 ${divHeight > 900 ? "" : "hidden"}`} />
      <div className={`circle c-pink c-13 ${divHeight > 1200 ? "" : "hidden"}`} />
      <div className={`circle c-purple c-14 ${divHeight > 1500 ? "" : "hidden"}`} />
      <div className={`circle c-light-blue c-15 ${divHeight > 1600 ? "" : "hidden"}`} />
      <div className={`circle c-green c-16 ${divHeight > 1750 ? "" : "hidden"}`} />
      <div className={`circle c-purple c-17 ${divHeight > 1750 ? "" : "hidden"}`} />
      <div className={`circle c-blue c-18 ${divHeight > 2000 ? "" : "hidden"}`} />
      <div className={`circle c-light-blue c-19 ${divHeight > 2000 ? "" : "hidden"}`} />
      <div className={`circle c-purple c-20 ${divHeight > 2250 ? "" : "hidden"}`} />
      <div className={`circle c-pink c-21 ${divHeight > 2350 ? "" : "hidden"}`} />
      <div className={`circle c-blue c-22 ${divHeight > 2600 ? "" : "hidden"}`} />
      <div className={`circle c-light-blue c-23 ${divHeight > 2850 ? "" : "hidden"}`} />
      <div className={`circle c-pink c-24 ${divHeight > 3000 ? "" : "hidden"}`} />
      <div className={`circle c-blue c-25 ${divHeight > 3000 ? "" : "hidden"}`} />
      <div className={`circle c-pink c-26 ${divHeight > 3075 ? "" : "hidden"}`} />
      <div className={`circle c-purple c-27 ${divHeight > 3250 ? "" : "hidden"}`} />
      <div className={`circle c-green c-28 ${divHeight > 3400 ? "" : "hidden"}`} />
      <div className={`circle c-blue c-29 ${divHeight > 3600 ? "" : "hidden"}`} />
      <div className={`circle c-purple c-30 ${divHeight > 3600 ? "" : "hidden"}`} />
      <div className={`circle c-pink c-31 ${divHeight > 3850 ? "" : "hidden"}`} />
      <div className={`circle c-green c-32 ${divHeight > 4050 ? "" : "hidden"}`} />
      <div className={`circle c-light-blue c-33 ${divHeight > 4050 ? "" : "hidden"}`} />
      <div className={`circle c-blue c-34 ${divHeight > 4200 ? "" : "hidden"}`} />
      <div className={`circle c-purple c-35 ${divHeight > 4300 ? "" : "hidden"}`} />
      <div className={`circle c-light-blue c-36 ${divHeight > 4500 ? "" : "hidden"}`} />
      <div className={`circle c-pink c-37 ${divHeight > 4550 ? "" : "hidden"}`} />
      <div className={`circle c-green c-38 ${divHeight > 4650 ? "" : "hidden"}`} />
      <div className={`circle c-purple c-39 ${divHeight > 4750 ? "" : "hidden"}`} />
      <div className={`circle c-blue c-40 ${divHeight > 4800 ? "" : "hidden"}`} />
    </>
  )
}
