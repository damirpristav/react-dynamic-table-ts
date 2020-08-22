import React, { FC, Fragment } from 'react';
import './App.scss';

import Header from './components/Header';
import Table from './components/Table';

export interface DriversData {
  number: number;
  name: string;
  team: string;
  country: string;
  dob: string;
  placeOfBirth: string;
}

export interface TracksData {
  name: string;
  country: string;
  length: number;
  numberOfLaps: number;
}

const driversData: DriversData[] = [
  {
    number: 44,
    name: 'Lewis Hamilton',
    team: 'Mercedes',
    country: 'United Kingdom',
    dob: '07/01/1985',
    placeOfBirth: 'Stevenage, England'
  },
  {
    number: 77,
    name: 'Valtteri Bottas',
    team: 'Mercedes',
    country: 'Finland',
    dob: '28/08/1989',
    placeOfBirth: 'Nastola, Finland'
  },
  {
    number: 5,
    name: 'Sebastian Vettel',
    team: 'Ferrari',
    country: 'Germany',
    dob: '03/07/1987',
    placeOfBirth: 'Heppenheim, Germany'
  },
  {
    number: 16,
    name: 'Charles Leclerc',
    team: 'Ferrari',
    country: 'Monaco',
    dob: '16/10/1997',
    placeOfBirth: 'Monte Carlo, Monaco'
  },
  {
    number: 33,
    name: 'Max Verstappen',
    team: 'Red Bull Racing',
    country: 'Netherlands',
    dob: '30/09/1997',
    placeOfBirth: 'Hasselt, Belgium'
  },
  {
    number: 23,
    name: 'Alex Albon',
    team: 'Red Bull Racing',
    country: 'Thailand',
    dob: '23/03/1996',
    placeOfBirth: 'London, England'
  },
  {
    number: 4,
    name: 'Lando Norris',
    team: 'McLaren',
    country: 'United Kingdom',
    dob: '13/11/1999',
    placeOfBirth: 'Bristol, England'
  },
  {
    number: 3,
    name: 'Daniel Ricciardo',
    team: 'Renault',
    country: 'Australia',
    dob: '01/07/1989',
    placeOfBirth: 'Perth, Australia'
  },
  {
    number: 31,
    name: 'Esteban Ocon',
    team: 'Renault',
    country: 'France',
    dob: '17/09/1996',
    placeOfBirth: 'Évreux, Normandy'
  },
  {
    number: 10,
    name: 'Pierre Gasly',
    team: 'AlphaTauri',
    country: 'France',
    dob: '07/02/1996',
    placeOfBirth: 'Rouen, France'
  },
  {
    number: 26,
    name: 'Daniil Kvyat',
    team: 'AlphaTauri',
    country: 'Russian Federation',
    dob: '26/04/1994',
    placeOfBirth: 'Ufa, Russia'
  },
  {
    number: 11,
    name: 'Sergio Perez',
    team: '	Racing Point',
    country: 'Mexico',
    dob: '26/01/1990',
    placeOfBirth: 'Guadalajara, Mexico'
  },
  {
    number: 18,
    name: 'Lance Stroll',
    team: '	Racing Point',
    country: 'Canada',
    dob: '29/10/1998',
    placeOfBirth: 'Montreal, Canada'
  },
  {
    number: 7,
    name: 'Kimi Räikkönen',
    team: 'Alfa Romeo',
    country: 'Finland',
    dob: '17/10/1979',
    placeOfBirth: 'Espoo, Finland'
  },
  {
    number: 99,
    name: 'Antonio Giovinazzi',
    team: 'Alfa Romeo',
    country: 'Italy',
    dob: '14/12/1993',
    placeOfBirth: 'Martina Franca, Italy'
  },
  {
    number: 20,
    name: 'Kevin Magnussen',
    team: 'Haas',
    country: 'Denmark',
    dob: '05/10/1992',
    placeOfBirth: 'Roskilde, Denmark'
  },
  {
    number: 8,
    name: 'Romain Grosjean',
    team: 'Haas',
    country: 'France',
    dob: '17/04/1986',
    placeOfBirth: 'Geneva, Switzerland'
  },
  {
    number: 63,
    name: 'George Russell',
    team: 'Williams',
    country: 'United Kingdom',
    dob: '15/02/1998',
    placeOfBirth: 'King\'s Lynn, England'
  },
  {
    number: 6,
    name: 'Nicholas Latifi',
    team: 'Williams',
    country: 'Canada',
    dob: '29/06/1995',
    placeOfBirth: 'Montreal, Canada'
  },
];

const tracksData: TracksData[] = [
  {
    name: 'Spa-Francorchamps',
    country: 'Belgium',
    length: 7.004,
    numberOfLaps: 44
  },
  {
    name: 'Circuit de Monaco',
    country: 'Monaco',
    length: 3.337,
    numberOfLaps: 78
  },
  {
    name: 'Silverstone',
    country: 'England',
    length: 5.891,
    numberOfLaps: 52
  },
  {
    name: 'Suzuka',
    country: 'Japan',
    length: 5.807,
    numberOfLaps: 53
  },
  {
    name: 'Hockenheimring',
    country: 'Germany',
    length: 4.574,
    numberOfLaps: 67
  },
];

const App: FC = () => {
  return (
    <Fragment>
      <Header title="Dynamic &amp; Responsive Table Component" />
      <Table 
        tableData={driversData}
        headingColumns={['#', 'Name', 'Team', 'Country', 'Date of birth', 'Place of birth']}
        title="F1 Drivers 2020"
      />
      <Table 
        tableData={tracksData}
        headingColumns={['Name', 'Country', 'Length(km)', 'Number of laps']}
        title="Top F1 tracks"
        breakOn="small"
      />
    </Fragment>
  );
}

export default App;
