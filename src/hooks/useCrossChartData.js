import {useMemo} from 'react';
import data from '../assets/data/simulated_responses.json';
import {crossChartConfigs} from '../config/crossChartConfigs';

export const useCrossChartData = () => {
	return useMemo(() =>
			crossChartConfigs.map(cfg => ({
				...cfg,
				data,
			})),
		[]
	);
};
