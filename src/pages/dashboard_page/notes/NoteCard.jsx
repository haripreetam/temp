import DownloadIcon from '@mui/icons-material/Download';
import ImageIcon from '@mui/icons-material/Image';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PaletteIcon from '@mui/icons-material/Palette';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import React, { useState } from "react";
import AddNote from './AddNote';
import './NoteCard.css';

const NoteCard = ({ noteDetails, updateList }) => {
    // Access notes and setNotes from the Outlet context
    // const { notes, setNotes } = useOutletContext();
    // const input = useOutletContext();
    // console.log(input)
    // const notes = []
    // const setNotes = ()=>{

    // }

    const [openEditNote, setOpenEditNote] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedNoteId, setSelectedNoteId] = React.useState(null);
    const open = Boolean(anchorEl);
// same methods for all icons
    const handleNoteIconsClick = (action) =>{
        //based on api call
        //and then perform that action
    }

    const handleMenuClick = (event, noteId) => {
        setAnchorEl(event.currentTarget);
        setSelectedNoteId(noteId);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedNoteId(null);
    };

    const handleDeleteClick = () => {
        if (selectedNoteId !== null) {
            moveNoteToTrash(selectedNoteId);
        }
        handleMenuClose();
    };

    const moveNoteToTrash = (noteId) => {
        // Find the note to be moved
        // const noteToMove = notes.find((note) => note.id === noteId);
        // if (!noteToMove) return;

        // Move the note to trash in localStorage
    //     const trashNotes = JSON.parse(localStorage.getItem('trash')) || [];
    //     trashNotes.push(noteToMove);
    //     localStorage.setItem('trash', JSON.stringify(trashNotes));

    //     // Remove the note from the current notes list
    //     const updatedNotes = notes.filter((note) => note.id !== noteId);
    //     setNotes(updatedNotes); // This should now work correctly

    //     // Update notes in localStorage
    //     localStorage.setItem('notes', JSON.stringify(updatedNotes));
    };

    return (
        <div className="note-card-container">
                    <div className="note-card"> {/* Add a key for each note */}
                        <div className="note-content" onClick={()=>setOpenEditNote(true)}>
                            <div className="note-title">{noteDetails.title}</div>
                            <div className="note-description">{noteDetails.description} </div>
                        </div>
                        <div className="note-icons">
                            <NotificationsIcon className="icon" aria-label="Notifications" />
                            <PersonAddIcon className="icon" aria-label="Add Person" />
                            <PaletteIcon className="icon" aria-label="Palette" />
                            <ImageIcon className="icon" aria-label="Image" />
                            <DownloadIcon className="icon" aria-label="Download" />
                            <MoreVertIcon className="icon" aria-label="More Options" onClick={(event) => handleMenuClick(event, noteDetails.id)} />
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleMenuClose}
                                MenuListProps={{ 'aria-labelledby': 'basic-button', }}>
                                <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
                            </Menu>
                        </div>
                    </div>
    <Modal
    open={openEditNote}
    onClose={()=>setOpenEditNote(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
        <AddNote updateList={updateList} openAddNote={true} noteDetails={noteDetails}/>
    </Modal>
        </div>
    );
};

export default NoteCard;
