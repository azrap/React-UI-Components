import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';

function HeaderContainer (){
    
    return (
        <div className="header-container">
        
        <ImageThumbnail />
        <HeaderTitle />
        <HeaderContent/>
         </div>
    );
}

export default HeaderContainer


{/* <CardContainer />
        <CardBanner />
        <CardContent />
        */}