import React, { useEffect, useState } from 'react';
import StarWarsStore from '../stores/StarWarsStore';
import StarWarsActions from '../actions/StarWarsActions';

const PeopleList = () => {
    const [people, setPeople] = useState(StarWarsStore.getPeople());

    useEffect(() => {
        StarWarsActions.fetchPeople();
        const onChange = () => setPeople(StarWarsStore.getPeople());
        StarWarsStore.on('change', onChange);
        return () => StarWarsStore.removeListener('change', onChange);
    }, []);

    return (
        <div>
            <h2>Star Wars Characters</h2>
            <ul>
                {people.map((person, index) => (
                    <li key={index}>{person.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PeopleList;