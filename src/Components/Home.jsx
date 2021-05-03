import React from 'react'
import {Link} from "react-router-dom"
import home from './home.svg';

function Home() {
    return ( 
      <div className="container mt-5">
      <div className="row ">

        <div className="col-sm d-flex align-items-center">
         <div>
         <div className="title"> Grow your business with</div>
         <div id="subTitle">Finex Tech</div>
         <p>we are the team of talented dveloper making responsive website.</p>
         <button  ><Link to="/Contact" id="start-btn">Get Start</Link></button>
         </div>
        </div>

        <div className="col-sm  d-flex justify-content-end ">
         <img src={home} alt="" width="600px" className="img-fluid" />

        </div>

      </div>
    </div>
    )
}

export default Home
