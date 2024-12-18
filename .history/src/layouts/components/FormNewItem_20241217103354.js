// src/layouts/components/FormNewItem.js
import React, { useState } from "react";

function FormNewItem({ appContact, disabled }) {
    // Правильная деструктуризация props
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [notes, setNotes] = useState("");

    const submit = () => {
        if (!fullName || !phone || !notes) {
            return;
        }
        appContact(fullName, phone, notes); // Используйте переданный метод
        setFullName("");
        setPhone("");
        setNotes("");
    };

    return (
        <div className="mb-3">
            <form>
                <label className="form-label">ФИО</label>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        disabled={disabled} // Заблокировать поле ввода
                    />
                </div>
                <label className="form-label">Телефон</label>
                <div className="mb-3">
                    <input
                        type="tel"
                        className="form-control"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        disabled={disabled} // Заблокировать поле ввода
                    />
                </div>
                <label className="form-label">Заметки</label>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={notes}
                        rows={3}
                        onChange={(e) => setNotes(e.target.value)}
                        disabled={disabled} // Заблокировать поле ввода
                    />
                </div>
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={submit}
                    disabled={disabled} // Заблокировать кнопку
                >
                    {disabled ? "Добавление..." : "Добавить"}{" "}
                    {/* Изменить текст кнопки */}
                </button>
            </form>
        </div>
    );
}

export default FormNewItem;
