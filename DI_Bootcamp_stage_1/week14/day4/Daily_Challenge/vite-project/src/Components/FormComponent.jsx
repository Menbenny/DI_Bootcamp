const FormComponent = ({ formData, handleChange, handleSubmit }) => {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
  
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
  
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <br />
  
        <fieldset>
          <legend>Gender:</legend>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
              required
            />
            Male
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
            Female
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={formData.gender === 'other'}
              onChange={handleChange}
            />
            Other
          </label>
        </fieldset>
        <br />
  
        <label>
          Destination:
          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
          >
            <option value="">-- Please Choose a Destination --</option>
            <option value="japan">Japan</option>
            <option value="canada">Canada</option>
            <option value="brazil">Brazil</option>
            <option value="australia">Australia</option>
          </select>
        </label>
        <br />
  
        <label>
          <input
            type="checkbox"
            name="nutfree"
            checked={formData.lactoseFree === 'Yes'}
            onChange={handleChange}
          />
          Nut Free
        </label>
        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            checked={formData.lactoseFree === 'Yes'}
            onChange={handleChange}
          />
          Lactose Free
        </label>
        <label>
          <input
            type="checkbox"
            name="veganmeal"
            checked={formData.lactoseFree === 'Yes'}
            onChange={handleChange}
          />
          Vegan Meal
        </label>
        
        <br />
  
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default FormComponent;
  