import React from 'react';

import { ImageGroup, Image } from 'react-fullscreen-image'
import P1 from '../../images/Portrait/P1.jpg';
import P3 from '../../images/Portrait/P3.jpg';
import P4 from '../../images/Portrait/P4.jpg';
import P5 from '../../images/Portrait/P5.jpg';
import P6 from '../../images/Portrait/P6.jpg';
import P7 from '../../images/Portrait/P7.jpg';
import P9 from '../../images/Portrait/P9.jpg';
import P10 from '../../images/Portrait/P10.jpg';
 

 
export default function PortraitImages() {
  return (
    <div className="Images">
      <img src={P1} alt="P1" height='500px'/>,
      <img src={P3} alt="P3" height='500px'/>
      <img src={P4} alt="P4" height='500px'/>
      <img src={P5} alt="P5" height='500px'/>
      <img src={P6} alt="P6" height='500px'/>
      <img src={P7} alt="P7" height='500px'/>
      <img src={P9} alt="P9" height='500px'/>
      <img src={P10} alt="P10" height='500px'/>
    </div>
  )
}