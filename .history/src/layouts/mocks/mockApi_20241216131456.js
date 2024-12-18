// mockApi.js
import mockContacts from "./mockData";

let contacts = [...mockContacts];

export const getContacts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(contacts), 500); // Имитируем задержку ответа
    });
};

export const addContact = (contact) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const maxId =
                contacts.length > 0
                    ? Math.max(...contacts.map((c) => c.id + 4))
                    : 0;
            const newContact = { id: maxId, ...contact };
            contacts.push(newContact);
            resolve(newContact);
        }, 500);
    });
};

export const deleteContact = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            contacts = contacts.filter((contact) => contact.id !== id);
            resolve();
        }, 500);
    });
};
