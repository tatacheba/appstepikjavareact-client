import React from "react";
import { useState } from "react";

function FormNewItem(props) {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [notes, setNotes] = useState("");

    const submit = () => {
        if (!fullName || !phone || !notes) {
            return;
        }
        props.appContact(fullName, phone, notes);
        setFullName("");
        setPhone("");
        setNotes("");
    };

    return (
        <div className="mb-3">
            <form>
                <label className="form-label">ФИО</label>
                <div className="mb-3 ">
                    <input
                        type="text"
                        className="form-control"
                        value={fullName}
                        onChange={(e) => {
                            setFullName(e.target.value);
                        }}
                    />
                </div>
                <label className="form-label">Телефон</label>
                <div className="mb-3">
                    <input
                        type="tel"
                        className="form-control"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                    />
                </div>
                <label className="form-label">Заметки</label>
                <div className="mb-3">
                    <textarea
                        type="textarea"
                        className="form-control"
                        value={notes}
                        rows={3}
                        onChange={(e) => {
                            setNotes(e.target.value);
                        }}
                    />
                </div>
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={submit}
                >
                    Добавить
                </button>
            </form>
        </div>
    );
}

export default FormNewItem;
