import { useState } from 'react';
import FormComponent from './components/FormComponent';
import './App.css';

function App() {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    lactoseFree: false,
    nutfree: false,
    veganmeal: false
  });

  
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? (checked ? 'Yes' : '') : value
    }));
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const queryParams = new URLSearchParams(formData).toString();
    const newUrl = `${window.location.origin}/?${queryParams}`;
    window.history.pushState({}, '', newUrl);
    alert(`Form submitted! Check the URL: ${newUrl}`);
  };

  return (
    <div className="App">
      <h1>Travel Form</h1>
      <FormComponent
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div className="form-data-display">
        <h2>Entered Data:</h2>
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Age:</strong> {formData.age}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Destination:</strong> {formData.destination}</p>
        <p><strong>Nuts Free:</strong> {formData.nutfree}</p>
        <p><strong>Lactose Free:</strong> {formData.lactoseFree}</p>
        <p><strong>Vegan Meal:</strong> {formData.veganmeal}</p>
      </div>
    </div>
  );
}

export default App;
