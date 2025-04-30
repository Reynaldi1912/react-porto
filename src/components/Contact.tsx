import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [message, setMessage] = useState<string>('');
  const [messageError, setMessageError] = useState<boolean>(false);

  const sendMessage = () => {
    setMessageError(message === '');

    if (message !== '') {
      // WhatsApp link with the message
      const whatsappLink = `https://wa.me/6295745785615?text=${encodeURIComponent(message)}`;

      // LinkedIn message (you can replace "your-linkedin-profile" with your LinkedIn URL)
      const linkedInLink = `https://www.linkedin.com/in/rynld?message=${encodeURIComponent(message)}`;

      // Open WhatsApp or LinkedIn link based on preference
      window.open(whatsappLink, '_blank');
      // Or for LinkedIn:
      // window.open(linkedInLink, '_blank');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendMessage}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
