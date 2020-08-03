import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem = () => {
	return (
		<article className="teacher-item">
			<header>
				<img src="https://avatars3.githubusercontent.com/u/62120617?s=460&u=cd7f1e24d0d3682227e514e35eae2eeacf606e19&v=4" alt=""/>
				<div>
					<strong>Felipe Borges</strong>
					<span>Matemática</span>
				</div>
			</header>

			<p>
				Manjador das matemágicas
				<br /><br />
				Apaixonado por contas cabulosas
			</p>

			<footer>
				<p>
					Preço/hora
					<strong>R$ 50,00</strong>
				</p>

				<button type="button">
					<img src={whatsappIcon} alt="WhatsApp"/>
					Entrar em contato
				</button>

			</footer>
		</article>
	);
}

export default TeacherItem;