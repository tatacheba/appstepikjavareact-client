import "./App.css";
import TablewView from "./layouts/components/tableView/TablewView";
import { useEffect, useState } from "react";
import FormNewItem from "./layouts/components/FormNewItem";
import ModalDeleteContact from "./layouts/components/ModalDeleteContact";
import axios from "axios";

function App() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentContactId, setCurrentContactId] = useState(null);
    const HOST = process.env.REACT_APP_HOST;
    useEffect(() => {
        console.log("Fetching contacts...", HOST);
        axios
            .get(`${HOST}/api/contacts`)
            .then((res) => {
                const data = res.data._embedded.contacts.map((item) => ({
                    id: item.id,
                    fullName: item.fullName,
                    phone: item.phone,
                    notes: item.notes,
                }));
                setItems(data);
                console.log("Contacts loaded:", data);
            })
            .catch((error) => console.error("Error fetching contacts:", error));
    }, [HOST]);

    const appendContact = (fullName, phone, notes) => {
        const contact = {
            fullName,
            phone,
            notes,
        };

        const url = `${HOST}/api/contacts`;
        setLoading(true); // Включить индикатор загрузки
        axios
            .post(url, contact)
            .then((res) => {
                contact.id = res.data.id;
                setItems([...items, contact]);
            })
            .catch((error) => console.error("Error adding contact:", error))
            .finally(() => {
                setLoading(false); // Выключить индикатор загрузки
            });
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
        const url = `${HOST}/api/contacts/${currentContactId}`;
        axios
            .delete(url)
            .then(() => {
                setItems(items.filter((item) => item.id !== currentContactId));
                console.log("Contact deleted with ID:", currentContactId);
            })
            .catch((error) => console.error("Error deleting contact:", error))
            .finally(() => {
                onToggleModal(); // Закрыть модальное окно
            });
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h1>Contact App</h1>
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

export default App;
