import * as Express from 'express';
import {HeroModel} from "../models/hero.model";


export let HeroRouter = Express.Router();

HeroRouter.get('/heroes', (req, res) => {
    res.json(HeroModel.getHeroes());
});

HeroRouter.get('/hero/:id', (req, res) => {
    res.json(HeroModel.getHero(req.params.id) || {msg: 'hero not found'});
});

HeroRouter.post('/hero/:id', (req, res) => {
    res.json(HeroModel.update(req.params.id, req.body.name) || {msg: 'hero not found'});
});

HeroRouter.put('/heroes', (req, res) => {
    res.json(HeroModel.create(req.body.name));
});

HeroRouter.delete('/hero/:id', (req, res) => {
    res.json(HeroModel.delete(req.params.id) || {msg: 'hero not found'});
});
