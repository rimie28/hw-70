import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks.ts";
import {
  getContactsThunk,
  deleteContactThunk,
} from "../containers/contacts/contactsSlice.ts";

const ContactList: React.FC = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector((state) => state.contacts.contacts);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div className="d-flex gap-3 flex-column w-100 p-3">
      {contacts.map((contact) => (
        <div
          className="d-flex gap-3 align-items-center w-100 border border-3 p-2"
          key={contact.id}
        >
          <img
            src={contact.photo}
            alt="contact-photo"
            width={100}
            height={100}
            className="rounded rounded-2"
          />
          <div className="d-flex flex-column ">
            <h4>{contact.name}</h4>
            <span>{contact.phone}</span>
            <span>{contact.email}</span>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(deleteContactThunk(contact.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
