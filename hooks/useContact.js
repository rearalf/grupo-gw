import { useState } from 'react';

export const useContactsForm = () => {
	const [ contactForm, setContactForm ] = useState({
		name: '',
		email: '',
		company: '',
		message: '',
	});

	const [ error, setError ] = useState(false);
	const [ messageForm, setMessageForm ] = useState(false);

	const handleChangeInput = e => {
		if (e.target.id === 'email') {
			validarEmail(e.target.value) ? setError(false) : setError(true);
		}
		setContactForm({
			...contactForm,
			[e.target.id]: e.target.value,
		});
	};

	const validarEmail = email => {
		const expre = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (expre.test(email)) {
			const parts = email.split('@');
			const partTwo = parts[1].split('.');
			if (partTwo[0] === 'hotmail' || partTwo[0] === 'gmail' || partTwo[0] === 'yahoo')
				return true;
		}
		else {
			return false;
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (
			contactForm.name.length !== 0 &&
			contactForm.email.length !== 0 &&
			contactForm.company.length !== 0 &&
			contactForm.message.length !== 0
		) {
			setMessageForm(true);
			setTimeout(() => {
				setMessageForm(false);
			}, 5000);
		}
	};

	return {
		name: contactForm.name,
		email: contactForm.email,
		company: contactForm.company,
		message: contactForm.message,
		handleChangeInput,
		handleSubmit,
		error,
		messageForm,
	};
};
