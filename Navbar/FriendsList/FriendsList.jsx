import React from 'react'
import classes from './FriendsList.module.css'
import FriendsListItem from '../FriendListItem/FriendsListItem'

const FriendsList = props => {

    let FriendItem = props.state.FriendsList.map(e => (
        <FriendsListItem key={Math.random(100)} name={e.name} imgpath={e.avatarpath}/>
    ))
        
    return (
        <div className={classes.friendslist}>
            <h3>Friends:</h3>
            <div>
                {FriendItem}
            </div>
        </div>
    )
}


export default FriendsList