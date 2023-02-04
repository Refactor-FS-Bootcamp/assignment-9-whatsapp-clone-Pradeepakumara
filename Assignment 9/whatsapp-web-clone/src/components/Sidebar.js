import { Avatar, IconButton } from '@material-ui/core'
import { Chat, DonutLarge, GroupAdd, MoreVert, SearchOutlined, Sort } from '@material-ui/icons';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import db from '../firebase';
import SidebarChat from './SidebarChat';

const Sidebar = () => {

    const [rooms, setRooms] = useState([])
    const user = useSelector(state => state.user);
    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, [])

    console.log(user);

  return (
    <div className='sidebar'>
        <div className="sidebar-header">
            <Avatar src={user?.photoURL} />
            <div className="sidebar-header-right">
                <IconButton>
                    <GroupAdd />
                </IconButton>
                <IconButton>
                    <DonutLarge />
                </IconButton>
                <IconButton>
                    <Chat />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>
        <div className="sidebar-search">
            <div className="sidebar-search-container">
                <SearchOutlined />
                <input type="text" placeholder='Search or start new chat' />
                
            </div>
            <IconButton>
            <Sort />
            </IconButton>
        </div>
        <div className="sidebar-chats">
            <SidebarChat  addNewChat />
            {rooms.map(room => <SidebarChat key={room.id} id={room.id} name={room.data.name} />)}
            
        </div>
    </div>
  )
}

export default Sidebar