import React from 'react';
import {
	ResponsiveContainer,
	BarChart,
	Bar,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend
} from 'recharts';

/**
 * Generates a 2D cross-tabulated dataset.
 * @param {Array} data Raw data
 * @param {Function} rowAcc Row accessor (e.g., age)
 * @param {Function} colAcc Column accessor (e.g., dish)
 * @returns {Array} Formatted array for BarChart
 */
function crossCount(data, rowAcc, colAcc) {
	const counts = {};
	const colSet = new Set();

	for(const item of data) {
		const rows = Array.isArray(rowAcc(item)) ? rowAcc(item) : [rowAcc(item)];
		const cols = Array.isArray(colAcc(item)) ? colAcc(item) : [colAcc(item)];
		for(const r of rows) {
			if(!r) continue;
			counts[r] = counts[r] || {};
			for(const c of cols) {
				if(!c) continue;
				colSet.add(c);
				counts[r][c] = (counts[r][c] || 0) + 1;
			}
		}
	}

	const columns = [...colSet];
	return Object.entries(counts).map(([name, row]) => {
		const entry = {name};
		for(const col of columns) {
			entry[col] = row[col] || 0;
		}
		return entry;
	});
}

export default function CrossChart({title, data, rowAcc, colAcc}) {
	const dataset = crossCount(data, rowAcc, colAcc);
	const keys = dataset.length > 0 ? Object.keys(dataset[0]).filter(k => k !== 'name') : [];

	return (
		<div className="bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6 hover:shadow-2xl">
			<h2 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-4">{title}</h2>
			<div className="w-full h-96">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={dataset} margin={{top: 20, right: 30, left: 0, bottom: 5}}>
						<CartesianGrid strokeDasharray="3 3" stroke="#4a4a4a"/>
						<XAxis dataKey="name" tick={{fill: '#a0aec0', fontSize: 10}} angle={-45} textAnchor="end"
						       interval={0} height={100}/>
						<YAxis tick={{fill: '#a0aec0', fontSize: 10}}/>
						<Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}}/>
						<Legend wrapperStyle={{paddingTop: '10px', color: '#e2e8f0'}}/>
						{keys.map((key, i) => (
							<Bar key={key} dataKey={key} name={key} fill={`hsl(${(i * 50) % 360}, 70%, 50%)`}/>
						))}
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
