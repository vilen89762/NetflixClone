import React , {useEffect,useState} from 'react'
import axios from 'axios'
import requests from './Request'
const Main = () => {
    const[movies,setMovies] = useState([])

const truncateString = (str,num) =>{
    if(str?.length > num){
        return str.slice(0,num) + '...'
    }else{
        return str
    }
}
    const movie = movies[Math.floor(Math.random() * movies.length )]

    useEffect(() => {
        axios.get(requests.requestPopular)
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch(error => {
                console.error("There was an error fetching the movies!", error);
            });
    }, []);  return (
    <div className='w-full text-white h-[550px]'>
      <div className='w-full h-full'>
      <div className='absolute bg-gradient-to-r from-black w-full h-[550px]'></div>
      <img  className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
<div className ="absolute p-4 md:p-8 w-full top-[20%]">
<h1 className="text-3xl mb-3 md:text-5xl font-poppins font-bold">{movie?.title}</h1>


<div >
<button className="font-poppins  border bg-gray-300 border-gray-300 text-black py-2 px-5">Play</button>
<button className="font-poppins border text-white ml-4 border-gray-300 py-2 px-5">Watch Later</button>
</div>
<p className="font-poppins mt-2 text-gray-400 text-sm">Released :{movie?.release_date}</p>
<p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 ">{truncateString(movie?.overview,150)}</p>
</div>
      </div>
    </div>
  )
}

export default Main
