import axios from 'axios';
import { Contact } from './types';


const axiosAPI = axios.create({
  baseURL: 'https://server-2-80a59-default-rtdb.europe-west1.firebasedatabase.app/contacts',
});


export const getContacts = async () => {
  const response = await axiosAPI.get('.json');
  const data = response.data;

  if (data) {
    return Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
  }

  return [];
};

export const addContact = async (contact: Contact ) => {
  const newContact = {
    id: '',
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
    photo: contact.photo,
  }
  await axiosAPI.post('.json', newContact);
}

export const editContact = async (id: string, contact: Contact) => {
  const updatedContact = {
    id,
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
    photo: contact.photo,
  };
  await axiosAPI.put(`/${id}.json`, updatedContact);
};

export const deleteContact = async (id: string) => {
  await axiosAPI.delete(`/${id}.json`);
};
