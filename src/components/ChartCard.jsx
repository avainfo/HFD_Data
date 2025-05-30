import React from 'react';
import {
	ResponsiveContainer,
	BarChart,
	Bar,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	PieChart,
	Pie,
	Cell
} from 'recharts';
import {COLORS} from '../config/colors';

/**
 * Renders a bar or pie chart inside a styled card.
 * @param {{
 *   title: string,
 *   data: Array<{name: string, value: number}>,
 *   type: 'bar' | 'pie',
 *   barFill?: string
 * }} props
 */
const ChartCard = ({title, data, type, barFill}) => (
	<div className="bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6 hover:shadow-2xl">
		<h2 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-4">{title}</h2>
		<div className="w-full h-80">
			<ResponsiveContainer width="100%" height="100%">
				{type === 'bar' ? (
					<BarChart data={data} margin={{top: 20, right: 30, left: 0, bottom: 5}}>
						<CartesianGrid strokeDasharray="3 3" stroke="#4a4a4a"/>
						<XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} height={100}
						       tick={{fill: '#a0aec0', fontSize: 10}}/>
						<YAxis allowDecimals={false} tick={{fill: '#a0aec0', fontSize: 10}}/>
						<Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}}/>
						<Legend wrapperStyle={{paddingTop: '10px', color: '#e2e8f0'}}/>
						<Bar dataKey="value" name={title} fill={barFill} radius={[8, 8, 0, 0]}/>
					</BarChart>
				) : (
					<PieChart>
						<Pie
							data={data}
							cx="50%"
							cy="50%"
							outerRadius="80%"
							labelLine={false}
							dataKey="value"
							label={({name, percent}) => `${name} (${(percent * 100).toFixed(0)}%)`}
						>
							{data.map((_, idx) => (
								<Cell key={idx} fill={COLORS[idx % COLORS.length]}/>
							))}
						</Pie>
						<Tooltip/>
						<Legend wrapperStyle={{paddingTop: '10px', color: '#e2e8f0'}}/>
					</PieChart>
				)}
			</ResponsiveContainer>
		</div>
	</div>
);

export default ChartCard;