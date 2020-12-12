import React from 'react';
import './AddForm.css';

const AddForm = () => {
  return (
    <div id="add-form">
      <form>
        <span>
          <label for="makanan">Nama Makanan</label>
          <input type="text" id="makanan" className="input-line" placeholder="Nama Makanan" />
          <label for="harga">Harga</label>
          <input type="number" id="harga" className="input-line" placeholder="Harga" />
        </span>
        <span>
          <label for="deskripsi">Deskripsi</label>
          <textarea id="deskripsi" className="input-line" placeholder="Deskripsi"></textarea>
        </span>
      </form>
    </div>
  )
}

export default AddForm;