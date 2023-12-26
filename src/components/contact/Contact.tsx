import React, { useState, ChangeEvent, FormEvent } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [wordCount, setWordCount] = useState<number>(0);
  const [errors, setErrors] = useState<{name: string, email: string, message: string}>({name: '', email: '', message: ''});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter(event.target.value);
  };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const words: string[] = event.target.value.split(' ').filter((word: string) => word !== '');
    setWordCount(words.length);
    if (words.length <= 200) {
      setMessage(event.target.value);
    }
  };

  const validateForm = () => {
    let newErrors = {name: '', email: '', message: ''};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    let newErrors = validateForm();
    if (Object.values(newErrors).every(error => error === '')) {
      setIsSubmitted(true);
      // Submit form
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => handleInputChange(event, setName)} />
        {errors.name && <p>{errors.name}</p>}
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => handleInputChange(event, setEmail)} />
        {errors.email && <p>{errors.email}</p>}
      </label>
      <label>
        Message:
        <textarea value={message} onChange={handleMessageChange} />
        {errors.message && <p>{errors.message}</p>}
      </label>
      <input type="submit" value="Submit" disabled={!name || !email || !message || wordCount > 200} />
      {isSubmitted && <p>Form submitted successfully!</p>}
    </form>
  );
};

export default ContactForm;