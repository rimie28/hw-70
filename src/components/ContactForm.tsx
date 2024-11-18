import React, { useState } from 'react';
import { useAppDispatch } from '../app/hooks.ts';
import { useNavigate} from 'react-router-dom';
import { addContactThunk} from '../containers/contacts/contactsSlice.ts';

const ContactForm = () => {
  const [contact, setContact] = useState({
    id: '',
    name: '',
    phone: '',
    email: '',
    photo: '' });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
      await dispatch(addContactThunk(contact));
    navigate('/');
  };

  return (
    <form onSubmit={onSubmit} className="p-4 border rounded shadow-sm">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={contact.name}
          onChange={onChange}
          className="form-control"
          placeholder="Enter name"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={contact.phone}
          onChange={onChange}
          className="form-control"
          placeholder="Enter phone number"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={contact.email}
          onChange={onChange}
          className="form-control"
          placeholder="Enter email address"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="photo" className="form-label">
          Photo URL
        </label>
        <input
          type="text"
          id="photo"
          name="photo"
          value={contact.photo}
          onChange={onChange}
          className="form-control"
          placeholder="Enter photo URL"
        />
        {contact.photo && (
          <img
            src={contact.photo}
            alt="Preview-photo"
            className="mt-3 img-fluid"
            style={{width: '100px', height: '100px', objectFit: 'cover'}}
          />
        )}
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;