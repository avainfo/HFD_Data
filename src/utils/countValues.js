/**
 * Counts occurrences in a list of items
 * @param {Array} items - The data array
 * @param {Function} accessor - Extracts a value or array from an item
 * @param {boolean} [multi=false] - Whether the accessor returns an array
 * @returns {Array<{name: string, value: number}>}
 */
export const countValues = (items, accessor, multi = false) => {
	const counts = {};
	items.forEach(item => {
		const value = accessor(item);
		if(multi && Array.isArray(value)) {
			value.forEach(v => v && (counts[v] = (counts[v] || 0) + 1));
		} else if(!multi && value) {
			counts[value] = (counts[value] || 0) + 1;
		}
	});
	return Object.entries(counts).map(([name, value]) => ({name, value}));
};