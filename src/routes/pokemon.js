const express = require('express');
const router = express.Router();

const poll = require('../database');
const axios = require("axios");

const mysqlConnection = require('../database')

//RUTAS

router.get("/", async(req, res) => {
    res.status(200).send('aaaaa');
})

const getPokemon = async id => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
    const { data } = response;
    return {
        abilities: data.abilities,
        name: data.name,
        types: data.types,
        img: data.sprites.front_shiny,
        id
    };
};

router.post("/:id", async(req, res) => {
    const { id } = req.params
        //verificar si esta guardado el pokemon
        // si esta guardado
        // return res.json({ status: false, mensaje: 'El pokenmon ya encuentra guardado' });
    const pokemon = await getPokemon(id)
    const types = pokemon.types.map(x => x.type.name).join(", ")
    const abilities = pokemon.abilities.map(x => x.ability.name).join(", ")
    await mysqlConnection.query("INSERT INTO pokemon (id, name, img, types, abilities) VALUES (?, ?, ?, ?, ?)", [id, pokemon.name, pokemon.img, types, abilities])
    const savedPokemon = {
        ...pokemon,
        id: Number(id),
        types,
        abilities,
        saved: true
    }
    res.json({ status: true, pokemon: savedPokemon });
});

router.delete("/:id", async(req, res) => {
    const { id } = req.params
    await mysqlConnection.query("DELETE FROM pokemon WHERE id = ?", [id])
    res.json({ status: true });
})
module.exports = router;