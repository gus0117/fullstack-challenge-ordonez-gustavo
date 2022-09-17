import React from 'react'
import { useState, useEffect } from 'react';
import { getCharacters } from '../service.js';
import Card from './Card';
import CardView from './CardView.jsx';

const CardList = () => {

    const [charList, setCharList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [charImage, setCharImage] = useState("");


    useEffect(() => {
        setIsLoading(true);
        getCharacters()
        .then((data) => setCharList(data.results))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }, []);

  return (
    <>
        { isLoading && <div>Loading...</div> }
        <CardView 
            image={charImage}
        />
        <div className='page'>
        {
            charList.map(char => (
                <Card key={char["id"]}
                    name={char["name"]}
                    status={char["status"]}
                    species={char["species"]}
                    image={char["image"]} 
                    setCardInfo={setCharImage}/>
            ))
        }
    </div>
    </>
    
  )
}

export default CardList;