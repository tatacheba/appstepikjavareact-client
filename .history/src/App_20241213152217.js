import "./App.css";
import TablewView from "./layouts/tableView/TablewView";
import { useState } from "react";
import FormNewItem from "./layouts/formNewItem/FormNewItem";

function App() {
    const [items, setItems] = useState([
        { id: 1, fullName: "JrrrKJ", phone: 585434374, notes: "Mark" },
        { id: 2, fullName: "JJrrreKJ", phone: 58434354, notes: "NHf" },
    ]);

    const appendContact = (fullName, phone, notes) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const contact = {
            id: id,
            fullName: fullName,
            phone: phone,
            notes: notes,
        };
        setItems([...items, contact]);
    };
    const removeContact = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };
    return (
        <div className="container mt-5">
            <div className=" card">
                <div className="card-header">
                    <h1>App</h1>
                </div>
                <div className="card-body">
                    <TablewView data={items} removeContact={removeContact} />
                    <FormNewItem appContact={appendContact} />
                </div>
            </div>
        </div>
    );
}

export default App;
