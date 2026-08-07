import React from 'react';
import '../assets/styles/Contact.scss';
import { faDiscord, faRobloxCreatorStudio } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

function Contact() {
  const contactLinks = [
    {
      icon: faDiscord as IconProp,
      label: 'Discord',
      href: 'https://discord.com/users/345164749467811840',
    },
    {
      icon: faRobloxCreatorStudio as IconProp,
      label: 'Roblox Creator Hub',
      href: 'https://devforum.roblox.com/u/EXM_0/summary',
    },
  ];

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <div className="contact-links" aria-label="Contact links">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
                aria-label={link.label}
                title={link.label}
              >
                <FontAwesomeIcon icon={link.icon}/>
              </a>
            ))}
          </div>
          <p><br/>PS: Please get straight to the point with what you want done. Thank you!<br/>Timezone: GMT+8</p>
          


          {/* <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;