import "./App.css";
import TablewView from "./layouts/components/tableView/TablewView";
import { useEffect, useState } from "react";
import FormNewItem from "./layouts/formNewItem/FormNewItem";
import ModalDeleteContact from "./layouts/components/ModalDeleteContact";
import { mockApi } from "./layouts/mocks/mockApi";

function MockApp() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentContactId, setCurrentContactId] = useState(null);

    useEffect(() => {
        console.log("Fetching contacts...");
        mockApi
            .getContacts()
            .then((data) => {
                setItems(data);
                console.log("Contacts loaded:", data);
            })
            .catch((error) => console.error("Error fetching contacts:", error));
    }, []);

    const appendContact = (fullName, phone, notes) => {
        const contact = { fullName, phone, notes };
        setLoading(true);
        mockApi
            .addContact(contact)
            .then((newContact) => {
                setItems([...items, newContact]);
            })
            .catch((error) => console.error("Error adding contact:", error))
            .finally(() => setLoading(false));
    };

    const onToggleModal = (id = null) => {
        setIsModalOpen((prev) => !prev);
        setCurrentContactId(id);
    };

    const removeContact = () => {
        if (!currentContactId) {
            console.error("No contact ID to delete");
            return;
        }
        deleteContact(currentContactId)
            .then(() => {
                setItems(items.filter((item) => item.id !== currentContactId));
                console.log("Contact deleted with ID:", currentContactId);
            })
            .catch((error) => console.error("Error deleting contact:", error))
            .finally(() => onToggleModal());
    };
    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h1>App</h1>
                </div>
                <div className="card-body">
                    <TablewView
                        data={items}
                        removeContact={onToggleModal} // Передаём функцию открытия модального окна
                    />
                    <FormNewItem
                        appContact={appendContact}
                        disabled={loading}
                    />
                </div>
            </div>
            <ModalDeleteContact
                isOpen={isModalOpen}
                onModal={removeContact} // Удаляем контакт
                onCancel={() => onToggleModal(false)} // Закрыть модальное окно
            />
        </div>
    );
}

export default MockApp;
