import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import db from '../firebase';
// import firebase from 'firebase/compat';
import firebase from "firebase/compat/app";

const Chat = () => {

    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState('');
    const [messages, setMessages] = useState([]);
    const user = useSelector(state => state.user);



    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))

            db.collection('rooms').doc(roomId).collection("messages").orderBy("timestamp", 'asc').onSnapshot(snapshot => setMessages(snapshot.docs.map(doc => doc.data())))
        }
    }, [roomId])


    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, [])

    const sendMessage = e =>{
        e.preventDefault()
        db.collection('rooms').doc(roomId).collection('messages').add({message: input, name: user.displayName, timestamp: firebase.firestore.FieldValue.serverTimestamp()})
        setInput('')
    }

 
  return (
    <div className='chat'>
        <div className="chat-header">
            <Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} />
            <div className="chat-header-info">
                <h3>{roomName}</h3>
                <p>Last seen {' '} {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}</p>
            </div>
            <div className="chat-header-right">
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>
        <div className="chat-body">
            {messages.map(message => (
                <p className={`chat-message ${message.name === user.displayName && 'chat-receiver'}`}>
                <span className='chat-name'>{message.name}</span>
                {message.message}
                <span className='chat-timestamp'>
                    {new Date(message.timestamp?.toDate()).toUTCString()}
                </span>
            </p>
            ))}
            

        </div>
        <div className="chat-footer">
            <InsertEmoticon style={{cursor: 'pointer'}} />
            <AttachFile className='attach-file-rotate' />
            <form>
                <input type="text" placeholder='Type a message' value={input} onChange={e => setInput(e.target.value)} />
                <button onClick={sendMessage} type='submit'>Send</button>
            </form>
            <Mic style={{cursor: 'pointer'}}/>
        </div>
    </div>
  )
}

export default Chat