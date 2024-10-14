import React from 'react'
import Main from './Main'
import Row from './Row'
import requests from './Request'
function Home() {
  return (
    <div>
      <Main/>
      <Row  className="bg-black" RowID="1 " fetchUrl={requests.requestUpcoming} title='Up Coming'/>
      <Row  className="bg-black" RowID="2 " fetchUrl={requests.requestPopular} title=' Popular'/>
      <Row  className="bg-black" RowID="3" fetchUrl={requests.requestTrending} title='Trending'/>
      <Row  className="bg-black" RowID="4 " fetchUrl={requests.requestTopRated} title='Top Rated'/>
      <Row className="bg-black" RowID="5"  fetchUrl={requests.requestHorror} title='Horror'/>
    </div>
  )
}

export default Home
