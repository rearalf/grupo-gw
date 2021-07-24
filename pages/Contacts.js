import { AppLayout } from '../components/AppLayout';
import { useContactsForm } from '../hooks/useContact';
import { Contact__Styles } from '../styles/pages/Contact_styles';
import {
	FiMapPin,
	FiMail,
	FiSmartphone,
	FiInstagram,
	FiFacebook,
	FiAlertCircle,
	FiCheckCircle,
} from 'react-icons/fi';

function Contacts(){
	const {
		name,
		email,
		company,
		message,
		handleChangeInput,
		handleSubmit,
		error,
		messageForm,
	} = useContactsForm();
	return (
		<AppLayout
			title="Contactanos"
			description="Grupo GW, es una empresa productora de calzado con una trayectoria de 25
						años en el mercado salvadoreño">
			<h1 className="title__contact">Contactanos</h1>
			<div className="content__contact">
				<div className="section__form">
					<h2>Dejanos un correo</h2>
					<form onSubmit={handleSubmit} className="form__contacts">
						<div className="input__group">
							<input
								type="text"
								id="name"
								name="name"
								aria-label="Name"
								className="form__control"
								placeholder="Rodrigo Rodriguez"
								autoComplete="off"
								onChange={handleChangeInput}
								value={name}
								required
							/>
							<label htmlFor="name" className="form__label">
								Name
							</label>
						</div>
						<div className="input__group">
							<input
								type="text"
								id="email"
								name="email"
								aria-label="Email"
								className="form__control"
								placeholder="hot_mail@hotmail.com"
								autoComplete="off"
								onChange={handleChangeInput}
								value={email}
								required
							/>
							<label htmlFor="email" className="form__label">
								Email
							</label>
							{error && (
								<div className="error">
									<FiAlertCircle />
									<span className="error__message">El correo no es valido</span>
								</div>
							)}
						</div>
						<div className="input__group">
							<input
								type="text"
								id="company"
								name="company"
								aria-label="Compañia/Organización"
								className="form__control"
								placeholder="Rodriguez Comany"
								autoComplete="off"
								onChange={handleChangeInput}
								value={company}
								required
							/>
							<label htmlFor="company" className="form__label">
								Compañia/Organización
							</label>
						</div>
						<div className="input__group text__area__group">
							<label htmlFor="message" className="form__label">
								Mensaje
							</label>
							<textarea
								className="form__control"
								name="message"
								id="message"
								cols="30"
								rows="2"
								aria-label="Mensaje"
								placeholder=""
								onChange={handleChangeInput}
								value={message}
								required
							/>
						</div>
						<button type="submit" className="btn btn__primary">
							Enviar
						</button>
						<span
							className={`message__form ${messageForm ? 'show__message__form' : ''}`}>
							<FiCheckCircle />
							Mensaje
						</span>
					</form>
				</div>
				<div className="section__contact">
					<div className="social__media">
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noreferrer"
							aria-label="Ir al sitio de Facebook"
							className="social__network">
							<FiFacebook size="25" />
						</a>
						<a
							href="https://www.instagram.com/"
							target="_blank"
							rel="noreferrer"
							aria-label="Ir al sitio de Facebook"
							className="social__network">
							<FiInstagram size="25" />
						</a>
					</div>
					<ul className="contact__section">
						<li className="contact">
							<FiMapPin className="contact__icon" size="18" />
							<div className="contact__content">
								<h3>Dirección</h3>
								<p>39 C. Pte ·120 Col.Vairo</p>
								<p>San Salvador</p>
							</div>
						</li>
						<li className="contact">
							<FiSmartphone className="contact__icon" size="18" />
							<div className="contact__content">
								<h3>Teléfono</h3>
								<p>(503) 2235-9619</p>
							</div>
						</li>
						<li className="contact">
							<FiMail className="contact__icon" size="18" />
							<div className="contact__content">
								<h3>Correo electrónico</h3>
								<p>venta@grupo-gw.com</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<style jsx>{Contact__Styles}</style>
		</AppLayout>
	);
}

export default Contacts;
