# Countries App

A web application to display data about countries.

### Demo

Check out the live demo: [Countries App](https://nadiaturko.github.io/countriesApp/)

### Tech Stack:

- React
- React Router
- Redux
- react-redux
- 🌟 redux-thunk
- 🌟 redux-toolkit
- 🌟 MUI

### Data Sources:

- Data: [countries data](https://raw.githubusercontent.com/brightestsirius/React_23/master/final_project/src/store/data.js)
- API: [Rest Countries](https://restcountries.com/)

### Pages/Routes

#### Home

- Home Component: Displays text, e.g., <h3>Home Component 🏡</h3>
- Country Form Component: Form with two Select elements and a button:
  - Select for choosing a capital (country.capitals[0])
  - Select for choosing a translation language (country.translations)
  - Button "Read more about {country}" to navigate to the country page with the selected language

#### Countries

- Countries List Component: Displays a list of countries
  - Country flag (country.flag)
  - Country name (country.name.official), redirects to the country page when clicked
  - "Delete" button to remove the country from the list and from store.countries

#### Country

- Country Card Component: Displays data about a country
  - Country name (country.name.official or country.translations[{translation}].official)
  - List of all country properties
  - "Delete" button to remove the country and redirect to the Countries page
- Redirect Button Component: Button to redirect to a specified route, e.g., "Back to Countries"
