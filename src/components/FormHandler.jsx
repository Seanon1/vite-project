import React, { useState } from 'react'

function FormHandler() {
    const [formData, setFormData] = useState({name: "", email:""});

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Form Submitted", formData);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Enter Name...'/>
            <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Enter Email...'/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default FormHandler