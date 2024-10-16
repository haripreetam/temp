import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";

function Dashboard () {
    const [notes, setNotes] = useState([]);

    return (
        <>
            <Header />
            <Sidebar />
            <div style={styles.content}>
                {/* Pass the notes and setNotes as context to the Outlet */}
                <Outlet context={[ notes, setNotes]} />
            </div>
        </>
    );
};

const styles = {
    content: {
        padding: '20px',
        marginLeft: '200px', // Adjust based on your sidebar width
    },
};

export default Dashboard;
