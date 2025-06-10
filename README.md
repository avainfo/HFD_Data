# HFD Data Visualizer

HFD Data is a front-end data-visualization project built to explore and present the results of a large-scale employee lunch habits survey.

## Overview

- **Collection period**: 26 days
- **Participants**: 6 492 employees
- **Companies**: 8 (6 based in France, 2 in the USA)
- **Sectors**: Wide variety (Health, Finance, Tech, Public Administration, etc.)
- **Purpose**: Provide anonymized insights to support strategic product development and positioning.

## Codebase

- Built with **React** + **TailwindCSS**
- Fully componentized and documented
- Separated logic for:
  - Base statistics (`ChartCard`)
  - Cross-dimensional statistics (`CrossChart`)
- Config-driven system to easily extend new charts

## Data Privacy

- **Anonymity**: No company names or identifiable personal data are stored  
- **Fields recorded**:
  - `genre`
  - `pays`
  - `profil_professionnel`:
    - `secteur_activite`
    - `taille_entreprise`
    - `statut_professionnel`
    - `tranche_age`
    - `presence_cantine`
    - `service_departement`
  - `habitudes_dejeuner_travail`:
    - `comment_dejeunez_general`
    - `frequence_micro_onde`
    - `contraintes_principales_midi`
  - `interet_plats_healthy`:
    - `niveau_faveur_distributeurs_sains`
    - `frequence_utilisation_envisagee`
    - `types_plats_interessants`
    - `budget_plat_principal`
    - `criteres_importants_pour_vous`
    - `motivations_utilisation_service`
    - `interet_distributeur_repas_equilibre`

All data is originally in **French** and can be translated with high accuracy using automated tools like DeepL.

---

## Available Visualizations

### 🟦 Base Statistics

Displayed using **Bar** or **Pie** charts:
- **Demographics**
  - Gender distribution
  - Age range
  - Employment status
  - Activity sector
  - Company size
  - Department
- **Lunch Conditions**
  - Canteen presence
  - Microwave usage frequency
- **Lunch Habits**
  - General lunch behavior
  - Main constraints at midday
- **Healthy Meal Preferences**
  - Favorability toward healthy distributors
  - Frequency of intended use
  - Types of healthy dishes
  - Price range per dish
  - Key selection criteria
  - Motivation for using the service
  - Interest in balanced-meal dispensers

### 🧩 Cross-Tab Analyses

Presented via grouped bar charts, powered by a `crossChartConfigs` system for easy expansion.

#### 2D Cross Analyses
| Cross                              | Strategic Value             |
|------------------------------------|-----------------------------|
| Age Range × Healthy Dishes         | Targeted marketing          |
| Canteen × Interest in Distributors | Go-to-market decisions      |
| Microwave Usage × Healthy Dishes   | Product packaging relevance |
| Gender × Motivation                | Emotional targeting         |
| Sector × Lunch Constraints         | Sales field strategy        |
| Usage Frequency × Budget           | Pricing / UX optimization   |

#### 3D Experimental Axes *(planned or partially supported)*
| Cross                         | Strategic Value       |
|-------------------------------|-----------------------|
| Gender × Age × Dishes         | Personalization       |
| Sector × Canteen × Interest   | B2B targeting         |
| Budget × Frequency × Interest | CAC/CLTV segmentation |

---

## Developer Notes

### 📁 File Structure
```

/components
├── ChartCard.jsx         // Standard charts
└── CrossChart.jsx        // Cross-tab visualizations

/config
├── chartConfigs.js       // Base stats config
└── crossChartConfigs.js  // Cross charts config

/hooks
├── useChartData.js
└── useCrossChartData.js

/utils
└── countValues.js        // Reusable count logic

/assets
└── simulated_responses.json

````

### 🔄 How to Add a New Chart

1. Add a new entry in `chartConfigs.js` or `crossChartConfigs.js`
2. The app will auto-render it via `useChartData` or `useCrossChartData`

---

## Installation & Usage

1. **Install dependencies**  
   ```bash
   npm install
   ```

2. **Run the application**

   ```bash
   npm start
   ```

3. **Explore charts**

    * Filter by segment
    * Compare behavioral trends
    * Add new insights via config

---

## License & Privacy

This project is internal and **not for public release**. All data is anonymized and used exclusively for strategic product design. No raw datasets are distributed.