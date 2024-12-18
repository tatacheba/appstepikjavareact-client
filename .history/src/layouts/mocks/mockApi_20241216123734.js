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
            const newContact = { id: 3, ...contact };
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
