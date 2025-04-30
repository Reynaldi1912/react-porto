import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [message, setMessage] = useState<string>('');
  const [messageError, setMessageError] = useState<boolean>(false);

  const handleSend = (platform: 'whatsapp' | 'linkedin') => {
    setMessageError(message === '');

    if (message !== '') {
      const encodedMessage = encodeURIComponent(message);
      if (platform === 'whatsapp') {
        const whatsappLink = `https://wa.me/6285745785615?text=${encodedMessage}`;
        window.open(whatsappLink, '_blank');
      } else if (platform === 'linkedin') {
        const linkedInLink = `https://www.linkedin.com/in/rynld?message=${encodedMessage}`;
        window.open(linkedInLink, '_blank');
      }
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
              sx={{
                input: { color: '#fff' }, // warna teks
                textarea: { color: '#fff' }, // warna teks untuk multiline
                label: { color: '#ccc' }, // warna label
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#ccc' },
                  '&:hover fieldset': { borderColor: '#fff' },
                  '&.Mui-focused fieldset': { borderColor: '#fff' },
                },
              }}
            />

            <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={() => handleSend('whatsapp')}
              >
                WhatsApp
              </Button>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={() => handleSend('linkedin')}
              >
                LinkedIn
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
