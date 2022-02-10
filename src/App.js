import './App.css';
import Landing from './components/landing/landing';
import InvoiceForm from './components/invoiceForm/invoiceForm';
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/invoice' element={<InvoiceForm />} />
    </Routes>
  );
}

export default App;
