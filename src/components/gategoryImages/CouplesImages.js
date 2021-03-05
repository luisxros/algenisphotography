import React from 'react';

import C1 from '../../images/Couples/C1.jpg';
import C2 from '../../images/Couples/C2.jpg';
import C3 from '../../images/Couples/C3.jpg';

function CouplesImages() {
    return(
        <div className="CouplesImages">
            <img src={C1} alt="C1" height="500px"/>
            <img src={C2} alt="C2" height="500px"/>
            <img src={C3} alt="C3" height="500px"/>
        </div>
    )
}

export default CouplesImages;