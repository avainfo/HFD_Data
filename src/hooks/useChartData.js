import {useMemo} from 'react';
import data from '../assets/data/simulated_responses.json';
import {countValues} from '../utils/countValues';
import {chartConfigs} from '../config/chartConfigs';

/**
 * Hook to compute datasets for all charts.
 */
export const useChartData = () => {
	return useMemo(
		() => chartConfigs.map(cfg => ({
			...cfg,
			data: countValues(data, cfg.field, cfg.multi)
		})),
		[]
	);
};