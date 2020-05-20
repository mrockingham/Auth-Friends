import React from 'react'

const FriendsCard = (props) => {
    return (
        <div>
            {props.friends.map(friend =>{

                return(
                    <div>
                        <h2>{friend.name}</h2>
                        <h3>Age:{friend.age}</h3>
                        <h3>Email: {friend.email}</h3>
                    </div>
                )
            })}


            
        </div>
    )
}

export default FriendsCard