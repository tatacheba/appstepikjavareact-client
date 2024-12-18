// ./layouts/mocks/mockApi.js

const mockContacts = [
    {
        id: 1,
        fullName: "Тестовый Контакт 1",
        phone: "+7 999 111-11-11",
        notes: "Пример 1",
    },
    {
        id: 2,
        fullName: "Тестовый Контакт 2",
        phone: "+7 999 222-22-22",
        notes: "Пример 2",
    },
];

export const getContacts = () => Promise.resolve(mockContacts);

export const addContact = (contact) =>
    Promise.resolve({ ...contact, id: Date.now() });

export const deleteContact = (id) =>
    Promise.resolve(mockContacts.filter((contact) => contact.id !== id));
