/**
 * Chart configuration definitions.
 * Each entry drives one ChartCard.
 */
export const chartConfigs = [
	{
		key: 'professionalStatus',
		title: 'Distribution du Statut Professionnel',
		field: r => r.profil_professionnel?.statut_professionnel,
		type: 'bar',
		barFill: '#6366F1',
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
		barFill: '#10B981',
		multi: true
	},
	{key: 'gender', title: 'Distribution par Genre', field: r => r.genre, type: 'pie', multi: false},
	{
		key: 'sector',
		title: "Distribution par Secteur d'Activité",
		field: r => r.profil_professionnel?.secteur_activite,
		type: 'bar',
		barFill: '#EC4899',
		multi: false
	},
	{
		key: 'companySize',
		title: "Distribution par Taille d'Entreprise",
		field: r => r.profil_professionnel?.taille_entreprise,
		type: 'bar',
		barFill: '#F59E0B',
		multi: false
	},
	{
		key: 'ageRange',
		title: "Distribution par Tranche d'Âge",
		field: r => r.profil_professionnel?.tranche_age,
		type: 'bar',
		barFill: '#EF4444',
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
		barFill: '#3B82F6',
		multi: true
	},
	{
		key: 'budget',
		title: 'Budget pour un Plat Principal',
		field: r => r.interet_plats_healthy?.budget_plat_principal,
		type: 'bar',
		barFill: '#8B5CF6',
		multi: false
	},
	{
		key: 'motivations',
		title: "Motivations d'Utilisation du Service",
		field: r => r.interet_plats_healthy?.motivations_utilisation_service,
		type: 'bar',
		barFill: '#F97316',
		multi: true
	}
];