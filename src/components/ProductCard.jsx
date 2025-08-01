import React, { useState } from 'react';

export default function ProductCard({ product, onDelete, onEdit }) {
  const [editable, setEditable] = useState(false);
  const [form, setForm] = useState(product);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      {editable ? (
        <>
          <input name="name" value={form.name} onChange={handleChange} />
          <input name="description" value={form.description} onChange={handleChange} />
          <input name="price" value={form.price} type="number" onChange={handleChange} />
          <button onClick={() => onEdit(form)}>Save</button>
        </>
      ) : (
        <>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>₹{product.price}</p>
        </>
      )}
      <button onClick={() => setEditable(!editable)}>{editable ? 'Cancel' : 'Edit'}</button>
      <button onClick={() => onDelete(product.id)}>Delete</button>
    </div>
  );
}
