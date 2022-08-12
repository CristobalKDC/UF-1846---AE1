// import Listado from './Listado';
// import Footer from './Footer';
import './App.css';

const App = () => {
	const saludo = 'Blog para frikis';
	const comentarios = [
		{
			id: 1,
			texto: 'La consciencia es el universo intentando entenderse',
		},
		{
			id: 2,
			texto: 'La inteligencia es un hecho emergente de actividad cerebral',
		},
		{
			id: 3,
			texto:
				'Inteligencia militar son dos términos absolutamente contradictorios',
		},
	];
	return (
		<div className='saludo'>
			<h1>{saludo}</h1>
			<p>Comentarios ({comentarios.length})</p>
			<ul>
				{comentarios.map((comentario) => (
					<li key={comentario.id}>{comentario.texto}</li>
				))}
			</ul>
		</div>
	);
};

export default App;
