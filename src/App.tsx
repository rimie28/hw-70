import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactList from "./components/ContactList.tsx";
import ContactForm from "./components/ContactForm.tsx";

function App() {
  return (
    <Router>
      <header className="bg-secondary text-white p-3 d-flex justify-content-between">
        <h1>Contacts</h1>
        <Link to="/add" className="btn btn-primary mb-3">
          Add New Contact
        </Link>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/add" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
