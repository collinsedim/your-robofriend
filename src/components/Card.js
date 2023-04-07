import React from "react";

const Card = ({ id, name, username, email }) => {
    return (
        <div className='bg-light-blue dib br3 pa4 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id + 'dLaGunRy'}?size=200x200`} alt='' />
            <div className='w30'>
                <h3>{name}</h3>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;