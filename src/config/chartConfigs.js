/**
 * Chart configuration definitions.
 * Each entry drives one ChartCard.
 */
export const chartConfigs = [
	{
		key: 'distributeurInteret',
		title: "Intérêt pour un Distributeur Équilibré",
		field: r => r.interet_plats_healthy?.interet_distributeur_repas_equilibre,
		type: 'pie',
		multi: false
	},
	{
		key: 'professionalStatus',
		title: 'Distribution du Statut Professionnel',
		field: r => r.profil_professionnel?.statut_professionnel,
		type: 'bar',
		barFill: '#4F46E5', // Indigo-600
		multi: false
	},
	{
		key: 'lunchHabits',
		title: 'Habitudes de Déjeuner au Travail',
		field: r => r.habitudes_dejeuner_travail?.comment_dejeunez_general,
		type: 'pie',
		multi: true
	},
	{
		key: 'healthyDishes',
		title: 'Types de Plats Sains Intéressants',
		field: r => r.interet_plats_healthy?.types_plats_interessants,
		type: 'bar',
		barFill: '#10B981', // Emerald-500
		multi: true
	},
	{
		key: 'gender',
		title: 'Distribution par Genre',
		field: r => r.genre,
		type: 'pie',
		multi: false
	},
	{
		key: 'sector',
		title: "Distribution par Secteur d'Activité",
		field: r => r.profil_professionnel?.secteur_activite,
		type: 'bar',
		barFill: '#7C3AED', // Violet-600
		multi: false
	},
	{
		key: 'companySize',
		title: "Distribution par Taille d'Entreprise",
		field: r => r.profil_professionnel?.taille_entreprise,
		type: 'bar',
		barFill: '#F59E0B', // Amber-500
		multi: false
	},
	{
		key: 'ageRange',
		title: "Distribution par Tranche d'Âge",
		field: r => r.profil_professionnel?.tranche_age,
		type: 'bar',
		barFill: '#FB7185', // Rose-400
		multi: false
	},
	{
		key: 'canteenPresence',
		title: "Présence d'une Cantine",
		field: r => r.profil_professionnel?.presence_cantine,
		type: 'pie',
		multi: false
	},
	{
		key: 'lunchConstraints',
		title: 'Contraintes Principales au Déjeuner',
		field: r => r.habitudes_dejeuner_travail?.contraintes_principales_midi,
		type: 'bar',
		barFill: '#3B82F6', // Blue-500
		multi: true
	},
	{
		key: 'budget',
		title: 'Budget pour un Plat Principal',
		field: r => r.interet_plats_healthy?.budget_plat_principal,
		type: 'bar',
		barFill: '#8B5CF6', // Purple-500
		multi: false
	},
	{
		key: 'motivations',
		title: "Motivations d'Utilisation du Service",
		field: r => r.interet_plats_healthy?.motivations_utilisation_service,
		type: 'bar',
		barFill: '#F97316', // Orange-500
		multi: true
	},
	{
		key: 'frequenceUtilisation',
		title: "Fréquence d'Utilisation Envisagée",
		field: r => r.interet_plats_healthy?.frequence_utilisation_envisagee,
		type: 'bar',
		barFill: '#06B6D4', // Cyan-500
		multi: false
	},
	{
		key: 'faveurDistributeursSains',
		title: "Niveau de Faveur pour les Distributeurs Sains",
		field: r => r.interet_plats_healthy?.niveau_faveur_distributeurs_sains,
		type: 'bar',
		barFill: '#A78BFA', // Violet-400
		multi: false
	},
	{
		key: 'criteresImportants',
		title: "Critères Importants pour un Plat",
		field: r => r.interet_plats_healthy?.criteres_importants_pour_vous,
		type: 'bar',
		barFill: '#14B8A6', // Teal-500
		multi: true
	},
	{
		key: 'microOndes',
		title: "Fréquence d'Utilisation du Micro-ondes",
		field: r => r.habitudes_dejeuner_travail?.frequence_micro_onde,
		type: 'bar',
		barFill: '#818CF8', // Indigo-400
		multi: false
	},
	{
		key: 'departement',
		title: "Service / Département",
		field: r => r.profil_professionnel?.service_departement,
		type: 'bar',
		barFill: '#60A5FA', // Blue-400
		multi: false
	}
];
