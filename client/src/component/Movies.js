import React, { useEffect, useState } from "react";
import MovisList from "./MovisList";
import axios from 'axios'

const Movies = () => {
  useEffect(() => {
    getMovieData()
  },[])

  const [movieData, setMovieData] = useState([])

  const getMovieData = async () => {
    try{
      const getData = await axios.get("http://localhost:4001/movies")
      console.log(getData)
      setMovieData(getData.data.data)
    }catch(err){
      console.log(err)
    }
  } 

   


  return (
    <div class="" style={{minHeight:"100vh",display:"flex",flexWrap:"wrap",gap:"50px",padding:"5%"}}>
   {movieData.map((el,l) => (
    <MovisList key={l} data={el}/>
   ))}
      
    </div>
  );
};

export default Movies;
