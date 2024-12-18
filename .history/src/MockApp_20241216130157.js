import React, { useState, useEffect } from "react";
import "./App.css";
import TablewView from "./layouts/components/tableView/TablewView";
import FormNewItem from "./layouts/components/formNewItem/FormNewItem";

// import axios from "axios";
import ModalDeleteContact from "./layouts/components/ModalDeleteContact";

import {
    getContacts,
    addContact,
    deleteContact,
} from "./layouts/mocks/mockApi";

function MockApp() {
    const [items, setItems] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentContactId, setCurrentContactId] = useState(null);

    useEffect(() => {
        console.log("Fetching contacts...");
        getContacts()
            .then((data) => {
                setItems(data);
                console.log("Contacts loaded:", data);
            })
            .catch((error) => console.error("Error fetching contacts:", error));
    }, []);

    // const appendContact = (fullName, phone, notes) => {
    //     const contact = { fullName, phone, notes };
    //     setLoading(true);
    //     addContact(contact)
    //         .then((newContact) => {
    //             setItems([...items, newContact]);
    //         })
    //         .catch((error) => console.error("Error adding contact:", error))
    //         .finally(() => setLoading(false));
    // };

    // const removeContact = () => {
    //     if (!currentContactId) {
    //         console.error("No contact ID to delete");
    //         return;
    //     }
    //     deleteContact(currentContactId)
    //         .then(() => {
    //             setItems(items.filter((item) => item.id !== currentContactId));
    //             console.log("Contact deleted with ID:", currentContactId);
    //         })
    //         .catch((error) => console.error("Error deleting contact:", error))
    //         .finally(() => onToggleModal());
    // };
    const onToggleModal = (id = null) => {
        setModalOpen((prev) => !prev);
        setCurrentContactId(id);
    };
    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h1>App</h1>
                </div>
                <div className="card-body">
                    <TablewView data={items} removeContact={onToggleModal} />
                    <FormNewItem appContact={addContact} disabled={loading} />
                </div>
            </div>
            <ModalDeleteContact
                isOpen={modalOpen}
                onModal={deleteContact}
                onCancel={() => setModalOpen(false)}
                contact={items.find((item) => item.id === currentContactId)}
            />
        </div>
    );
}

export default MockApp;
