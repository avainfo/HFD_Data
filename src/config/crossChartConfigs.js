export const crossChartConfigs = [
	{
		key: 'ageXplats',
		title: "Tranche d'âge × Types de plats healthy",
		rowAcc: r => r.profil_professionnel?.tranche_age,
		colAcc: r => r.interet_plats_healthy?.types_plats_interessants
	},
	{
		key: 'cantineXinteret',
		title: "Présence cantine × Intérêt pour distributeur",
		rowAcc: r => r.profil_professionnel?.presence_cantine,
		colAcc: r => r.interet_plats_healthy?.interet_distributeur_repas_equilibre
	},
	{
		key: 'microOndesXplats',
		title: "Fréquence micro-ondes × Types de plats",
		rowAcc: r => r.habitudes_dejeuner_travail?.frequence_micro_onde,
		colAcc: r => r.interet_plats_healthy?.types_plats_interessants
	},
	{
		key: 'genreXmotivations',
		title: "Genre × Motivations",
		rowAcc: r => r.genre,
		colAcc: r => r.interet_plats_healthy?.motivations_utilisation_service
	},
	{
		key: 'secteurXcontraintes',
		title: "Secteur × Contraintes déjeuner",
		rowAcc: r => r.profil_professionnel?.secteur_activite,
		colAcc: r => r.habitudes_dejeuner_travail?.contraintes_principales_midi
	},
	{
		key: 'frequenceXbudget',
		title: "Fréquence utilisation × Budget",
		rowAcc: r => r.interet_plats_healthy?.frequence_utilisation_envisagee,
		colAcc: r => r.interet_plats_healthy?.budget_plat_principal
	}
];
