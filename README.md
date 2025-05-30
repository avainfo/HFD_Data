# HFD Data Visualizer

HFD Data is a front-end data-visualization project built to explore a large-scale employee lunch survey.

## Overview

- **Collection period**: 26 days
- **Participants**: 6 492 employees
- **Companies**: 8 (6 based in France, 2 in the USA)
- **Sectors**: Wide variety (e.g., Health, Finance, Tech, Public Administration, …)
- **Purpose**: Provide anonymized insights to a private client project

## Code Documentation

All in-code documentation is written in **English**, using simplified JSDoc style so that any developer—regardless of
background—can understand and extend the code easily.

## Data Privacy

- **Anonymity**: No company names or individual identities recorded
- **Recorded fields**:
    - `genre`
    - `pays`
    - Professional profile:
        - `secteur_activite`
        - `taille_entreprise`
        - `statut_professionnel`
        - `tranche_age`
        - `presence_cantine`
        - `service_departement`
    - Lunch habits:
        - `comment_dejeunez_general`
        - `frequence_micro_onde`
        - `contraintes_principales_midi`
    - Healthy-meal interest:
        - `niveau_faveur_distributeurs_sains`
        - `frequence_utilisation_envisagee`
        - `types_plats_interessants`
        - `budget_plat_principal`
        - `criteres_importants_pour_vous`
        - `motivations_utilisation_service`
        - `interet_distributeur_repas_equilibre`

All data is originally in French; automatic translations (e.g., via Google Translate or DeepL) are sufficiently
accurate.

## Retrievable Statistics

From the 6 492 survey responses you can generate:

- **Company & Geography**
    - Counts & percentages by `entreprise_id` (8 companies: 6 FR, 2 US)
    - Distribution by `pays`

- **Demographics**
    - Distribution by `genre`
    - Distribution by age range
    - Employment status
    - Activity sector
    - Company size
    - Department

- **Facilities**
    - Canteen presence
    - Microwave usage frequency

- **Lunch Habits**
    - General eating habits
    - Main midday constraints

- **Healthy-Meal Interest**
    - Favorability toward healthy distributors
    - Intended usage frequency
    - Preferred dish types
    - Budget per main dish
    - Important purchasing criteria
    - Motivations to use the service
    - Interest in balanced-meal dispensers

- **Cross-Tab Analyses** (e.g. age vs. budget, sector vs. favorability)

## Installation & Usage

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the app**

   ```bash
   npm start
   ```
3. **Visualize**

    * Bar charts for single-select questions
    * Pie charts for multi-select questions
    * Extend with your own cross-tab analyses

## License & Privacy

This dataset and visualization are for private use by the commissioning party and **are not publicly distributed**. All
participants and companies remain fully anonymous.
