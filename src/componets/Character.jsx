import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { oneCharacter } from "../functions/functions";

const Character = () => {
    const params =  useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        oneCharacter(params.id, setCharacter);
    }, [])

    return (
        <>
        {character != null ? (
            <div className="character">
                <img src={character.image} alt={character.name} />
                <div className="info">
                    <p>Nombre: {character.name}</p>
                    <p>Estado: {character.status}</p>
                    <p>Especie: {character.species}</p>
                    <p>Género: {character.gender}</p>
                </div>
                <span>Identificado con el id {params.id}</span>
            </div>
        ) : ('no existe el personaje')}
        </>
    )
}

export default Character;