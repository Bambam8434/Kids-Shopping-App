import React from 'react'
import m1 from "../assets/images/m1.jpeg"
import m2 from "../assets/images/m2.jpeg"
import m3 from "../assets/images/m3.jpeg"
import m4 from "../assets/images/m4.jpeg"
import m5 from "../assets/images/m5.jpeg"
import m6 from "../assets/images/m6.jpeg"
import m7 from "../assets/images/m7.jpeg"
export default function Press() {
  return (
   <>
         <div className="marquee">
        <div className="track">
          <div className="content">
<img src={m1}alt="" />
<img src={m2}alt="" />
<img src={m3}alt="" />
<img src={m4}alt="" />
<img src={m5}alt="" />
<img src={m6}alt="" />
<img src={m7}alt="" />
<img src={m1}alt="" />
<img src={m3}alt="" />
<img src={m5}alt="" />
          </div>
        </div>
      </div>
   
   </>
  )
}
