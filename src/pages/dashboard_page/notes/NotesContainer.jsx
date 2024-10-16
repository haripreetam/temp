import React, { useEffect, useState } from 'react';
import AddNote from './AddNote';
import NoteCard from './NoteCard';

function NotesContainer ()  {
    // Destructure the array received from Outlet context
    const [noteslist, setNoteList] = useState([])

    useEffect(()=>{
        // api call
        // after getting store it
        setNoteList([
            {title:"dsfsdfg",
            description:"dfgadfg"
            }
        ])
    },[])

    const handleUpdateList = (data,action)=>{
        // checking
    };

    // const context = useOutletContext();
    // if (!context) {
    //     return <div>Error: Outlet context is not available.</div>;
    // }

    // const [notes, setNotes] = context;
    // const [notes, setNotes] = useOutletContext();

    const addNote = (note) => {
        // setNotes((prevNotes) => [...prevNotes, note]);
    };


    return (
        <>
            <AddNote updateList={handleUpdateList} />
            {noteslist.map((note)=><NoteCard noteDetails={note} updateList={handleUpdateList} />)}
        </> 
    );
};

export default NotesContainer;
