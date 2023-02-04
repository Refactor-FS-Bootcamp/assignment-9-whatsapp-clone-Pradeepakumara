import { Avatar } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import db from '../firebase'

const SidebarChat = ({id, name, addNewChat}) => {

    const [seed, setSeed] = useState("");
    const [message, setMessage] = useState('');

    useEffect(() => {
      if(id){
        db.collection('rooms')
        .doc(id)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => setMessage(snapshot.docs.map(doc => doc.data())))
      }
    }, [id])

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, [])

    const createChat = () => {
      const roomName = prompt("Please enter name")
      if(roomName){
        db.collection('rooms').add({name: roomName})
      }
    }

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className='sidebar-chat'>
        <Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} />
        <div className="sidebar-chat-info">
            <h2>{name}</h2>
            <p>{message[0]?.message}</p>
        </div>
    </div>
    </Link>
  ) : (
    <div onClick={createChat} className='sidebar-chat'>
        <h2>Add New Chat</h2>
    </div>
  )
}

export default SidebarChat