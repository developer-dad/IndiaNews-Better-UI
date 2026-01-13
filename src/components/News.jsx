import React from 'react'
import NewsItem from './NewsItem'

function News() {
  return (
    <div className='grid grid-cols-1 gap-4 mx-4 mt-4 md:grid-cols-3 md:mx-28 md:mt-7'>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
    </div>
  )
}

export default News