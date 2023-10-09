import './Form.css';
import { useState, useRef } from 'react';

const Form = ({onSaveContact}) => {
  const [showForm, setVisibility] = useState(false);
  const nameRef = useRef();
  const usernameRef = useRef();
  const phoneRef = useRef();

  const setFormVisibility = () => {
    return setVisibility(!showForm);
  }

  const saveContact = () => {
    const newContact = {
      name : nameRef.current.value,
      username : usernameRef.current.value,
      phone : phoneRef.current.value,
    };

    onSaveContact(newContact);
    setVisibility(!showForm);
    
  }

  return(
    <div className='form-wrap'>
      {showForm ? (
        <>
          <h2>Add contact</h2>
          <form onSubmit={saveContact}>
            <input ref={nameRef} placeholder='Name' type='text' name='name'/>
            <input ref={usernameRef} placeholder='Username' type='text' name='surname'/>
            <input ref={phoneRef} placeholder='Phone' type='tel' name='phone'/>
            <div class="buttons">
              <button type='submit'>Save</button>
              <button onClick={setFormVisibility}>Cancel</button>
            </div>
          </form>
        </>
        ) : (
        <button onClick={setFormVisibility}>Add form</button>
      )}
    </div>
  )
}

export default Form;