import React from 'react'

function MovisList({data}) {
  return (
        <div style={{height:"300px",width:"250px" }}>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
            class="card-img-top"
            alt="Hollywood Sign on The Hill" 
            style={{width:"100%",height:"30%"}}/>
          <div class="card-body">
            <h5 class="card-title">Movie Name : {data.name}</h5>
            <h5 class="card-title"> Ratings : {data.rating}*</h5>
            <h5 class="card-title"> Relese Date : {data.releaseDate}</h5>
            
          </div>
        </div>
  )
}

export default MovisList