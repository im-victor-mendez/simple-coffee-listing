import { useState } from 'react';
import '@styles/pages/Contact.scss';
import TwentyOnePilotsLogo from '@assets/svg/Twenty One Pilots - Logo.svg';

function Contact() {
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
		'idle'
	);

	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const { name, value } = e.target;
		setForm(prev => ({ ...prev, [name]: value }));
	}

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		if (!form.name || !form.email || !form.message) {
			setStatus('error');
			return;
		}

		setStatus('sending');

		// Simulación de envío — aquí puedes conectar EmailJS, API, Supabase, etc.
		setTimeout(() => {
			setStatus('sent');
			setForm({ name: '', email: '', message: '' });
		}, 1500);
	}

	return (
		<section className='page' id='contact'>
			<main>
				<div id='heading'>
					<h1 id='title'>Contact Us</h1>
					<p id='description'>
						Have questions, feedback, or want to collaborate? We would love to
						hear from you.
					</p>
					<img
						id='vector'
						src={TwentyOnePilotsLogo}
						alt='Twenty One Pilots Logo'
					/>
				</div>

				<form id='contact-form' onSubmit={handleSubmit}>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						value={form.name}
						onChange={handleChange}
						placeholder='Your full name'
					/>

					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						value={form.email}
						onChange={handleChange}
						placeholder='you@example.com'
					/>

					<label htmlFor='message'>Message</label>
					<textarea
						name='message'
						value={form.message}
						onChange={handleChange}
						placeholder='Write your message here...'
						rows={5}
					/>

					<button type='submit' disabled={status === 'sending'}>
						{status === 'sending' ? 'Sending...' : 'Send Message'}
					</button>

					{/* Status messages */}
					{status === 'sent' && (
						<p className='status success'>Message sent successfully ✔</p>
					)}
					{status === 'error' && (
						<p className='status error'>Please fill out all fields ❗</p>
					)}
				</form>
			</main>
		</section>
	);
}

export { Contact };
