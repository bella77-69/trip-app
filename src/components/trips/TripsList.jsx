import React from 'react';
import Trip from './Trip';
import { Link } from 'react-router-dom';

export default function TripsList ({match, days}) {
    const filter = match.params.filter;
    const trips = filter ? days.filter(trip => trip.type === filter) : days;
    return (
        <div className='trips-list'>
            <h3>{filter ? filter : 'All'} Trips</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Place</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {trips.map((trip, index) => <Trip key={index}{...trip}/>)}
                </tbody>
            </table>
            <div className='filters'>
                Filter By: 
                <Link to='/list'>All</Link>&#9679;
                <Link to='/list/Trek'>Treks</Link>&#9679;
                <Link to='/list/Club'>Club</Link>&#9679;
                <Link to='/list/Tropic'>Tropic</Link>&#9679;
            </div>
        </div>
    );
};
