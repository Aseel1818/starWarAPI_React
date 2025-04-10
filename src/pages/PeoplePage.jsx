import React, { useEffect, useState } from 'react';
import StarWarsStore from '../stores/StarWarsStore';
import StarWarsActions from '../actions/StarWarsActions';

const PeoplePage = () => {
    const [people, setPeople] = useState(StarWarsStore.getPeople());

    useEffect(() => {
        StarWarsActions.fetchPeople();

        // Correct function name
        const onChange = () => setPeople(StarWarsStore.getPeople());

        // Register the listener
        StarWarsStore.on('change', onChange);

        // Cleanup function to remove the listener
        return () => {
            StarWarsStore.removeListener('change', onChange);
        };

    }, []);

    return (
        <div className='container'>
            <h1 className='title'>Star Wars Characters</h1>
            <div className='card-grid'>
                {people.map((person, index) => (
                    <div key={index} className='card'>
                        <h2>{person.name}</h2>
                        <p><strong>Height:</strong> {person.height} cm</p>
                        <p><strong>Mass:</strong> {person.mass} kg</p>
                        <p><strong>Gender:</strong> {person.gender}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PeoplePage;
