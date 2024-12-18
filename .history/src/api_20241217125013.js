import axios from "axios";
import {
    getContacts as getMockContacts,
    addContact as addMockContact,
    deleteContact as deleteMockContact,
} from "./layouts/mocks/mockApi";

const useMock = process.env.REACT_APP_USE_MOCK === "true";
const API_URL = process.env.REACT_APP_API_URL;

export const getContacts = () => {
    if (useMock) {
        return getMockContacts();
    } else {
        return axios.get(`${API_URL}`).then((response) => response.data);
    }
};

export const addContact = (contact) => {
    if (useMock) {
        return addMockContact(contact);
    } else {
        return axios
            .post(`${API_URL}`, contact)
            .then((response) => response.data);
    }
};

export const deleteContact = (id) => {
    if (useMock) {
        return deleteMockContact(id);
    } else {
        return axios.delete(`${API_URL}/${id}`);
    }
};
