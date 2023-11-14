import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [emails, setEmails] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const handleSendEmails = async (e) => {
   e.preventDefault()
   console.log(e)
    try {
      const emailArray = emails.split('\n').map((email) => email.trim());
      console.log(emailArray)
      await axios.post('https://backend-a6u7.onrender.com/sendEmail', {
       recipients: emailArray,
        subject,
        text,
      });
      alert('Emails sent successfully.');
    } catch (error) {
      console.error(error);
      alert('Error sending emails.');
    }
  };

  return (
    <div className="App">
      
      <form className='mail' onSubmit={(e)=>{handleSendEmails(e)}

      }>
       
      <h1 className='bulk'>Bulk Mail Sender</h1>

        <div className='to'>
          <label>To:</label>
      <textarea className='en'
        placeholder="Enter email addresses "
        value={emails}
        onChange={(e) => setEmails(e.target.value)}
      />
      </div>
      <div className='Subject'>
      <label>Subject:</label>
      <input className='sub'
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      </div>
     
      <textarea className='text'
        placeholder=" text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
            <input type='submit' class="custom-button"/>

      </form>

    </div>
  );
}

export default App;
