import React from 'react'
import a1 from "../assets/images/Desktop-Animal-1_200x200.webp"
import a2 from "../assets/images/Desktop-Animal-2_200x200.webp"
// import right from "../assets/images/icons8-circled-right-50.png"

export default function Newsletter() {
  return (
    <>
    <div className="container">
<h2 className='head'>Images Side by Side</h2>
<p >How to create side-by-side images with the CSS float property:</p>
</div>
          <div style={{width:"100vw"}} className="row">
        <div className="column">
          <img src={a1} alt="Snow"  />
        </div>
        <div className="column">
        <div style={{border:"2px solid #ff5421"}} className="input-group">
        <div className="form-outline">
          <input placeholder='Email Address' id="search-input" type="email" className="form-control"   required/>
          
        </div>
        <button id="search-button" type="submit" >
        <i class="fa fa-arrow-circle-right" style={{fontSize:"45px", color:"red"}}></i>
        </button>
      </div>
        </div>
        <div className="column">
          <img className='img2' src={a2} alt="Mountains" />
        </div>
      </div>
    
    </>
  )
}
