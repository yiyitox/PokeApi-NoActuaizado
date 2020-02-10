const express = require('express');
const router = express.Router();
const axios = require('axios');

const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

router.get('/Pokedex', isLoggedIn, (req, res) => {
    res.render('links/Pokedex');
});
router.get('/tabla', isLoggedIn, (req, res) => {
    res.render('links/tabla');
});
router.get('/Batalla', isLoggedIn, (req, res) => {
    res.render('links/Batalla');
});
router.post('/Pokedex', isLoggedIn, async(req, res) => {
    //const { title, url, description } = req.body;
    const { id, name, img, abilities, types } = req.body;
    //  const {name, img, abilities, types} = req.body;
    const newPokemon = {

            id,
            name,
            img,
            abilities,
            types,
            user_id: req.user_id
        }
        //  const newLinks = {
        // title,
        // url,
        // description,
        // user_id: req.user.id
        //  };
    await pool.query("INSERT INTO pokemon (id, name, img, abilities,types) VALUES (?, ?, ?, ?, ?)", [newPokemon.id, newPokemon.name, newPokemon.img, newPokemon.abilities, newPokemon.types])
    req.flash('cargado', 'Guardado con exito')
    res.redirect('/links')
        //     await pool.query('INSERT INTO links set ?', [newLink]);

});

router.get('/', isLoggedIn, async(req, res) => {
    const links = await pool.query('SELECT * FROM pokemon WHERE user_id = ?', [req.user.id]);
    res.render('links/list', { links });
});

router.get('/delete/:id', isLoggedIn, async(req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM pokemon WHERE ID = ?', [id]);
    req.flash('success', 'Link Removed Successfully');
    res.redirect('/links');
});

// router.get('/edit/:id', isLoggedIn, async(req, res) => {
//     const { id } = req.params;
//     const links = await pool.query('SELECT * FROM pokemon WHERE id = ?', [id]);
//     console.log(links);
//     res.render('links/edit', { link: links[0] });
// });

// router.post('/edit/:id', isLoggedIn, async(req, res) => {
//     const { id } = req.params;
//     const { title, description, url } = req.body;
//     const newLink = {
//         title,
//         description,
//         url
//     };
//     await pool.query('UPDATE pokemon set ? WHERE id = ?', [newLink, id]);
//     req.flash('success', 'Link Updated Successfully');
//     res.redirect('/links');
// });


module.exports = router;

// https://www.youtube.com/watch?v=qJ5R9WTW0_E