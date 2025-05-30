import React from 'react';
import ChartCard from './components/ChartCard.jsx';
import {useChartData} from './hooks/useChartData';
import './App.css';

/**
 * Main application component.
 */
export default function App() {
	const charts = useChartData();

	return (
		<div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-6 lg:p-8 font-sans antialiased">
			<header className="text-center mb-10 p-4 bg-gray-800 rounded-xl shadow-lg">
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-400 mb-2">
					Analyse des Réponses au Sondage
				</h1>
				<p className="text-lg sm:text-xl text-gray-300">Visualisation des données clés du questionnaire</p>
			</header>

			<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
				{charts.map(cfg => (
					<ChartCard
						key={cfg.key}
						title={cfg.title}
						data={cfg.data}
						type={cfg.type}
						barFill={cfg.barFill}
					/>
				))}
			</main>
		</div>
	);
}