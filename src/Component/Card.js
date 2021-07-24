import React from 'react';

const Card = ({id, name, email}) => {
    return(
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img style = {{width: 200, height:200}} src={`https://robohash.org/${id}.png?set=set2?size=200x200`} alt="picc" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
            
        </div>
        
    )
}

export default Card