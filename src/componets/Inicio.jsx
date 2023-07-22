import React, {useEffect, useState} from "react";
import { allCharacters } from "../functions/functions";
import { useNavigate } from 'react-router-dom';

const Inicio = () => {
    const [characters, setCharacters] = useState(null);
    const [ search, setSearch ] = useState("");
    const navigate = useNavigate();
    const id = '';

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    const characterView = e => {
		e.preventDefault();

		navigate(`/Character/${e.target.id}`, {
			replace: true,
			state: {
				logged: true,
			},
		});
    }

    const results = !search ? characters : characters.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))

    useEffect(() => {
        allCharacters(setCharacters)
    }, [])
    return (
        <>
        <input value={search} onChange={searcher} type="text" placeholder='filtra por nombre' className='Search'/>
        <div className="items">
            {characters != null ? (
            results.map(character => (
                <div className="cards">
                    <h3>{character.name}</h3>
                    <p></p>
                    <img src={character.image} id="rm" alt={character.name}/>
                    <a onClick={characterView} id={character.id}>Información</a>
                </div>
            ))
        ) : ('no hay personajes')}
        </div></>
    )
}

export default Inicio;