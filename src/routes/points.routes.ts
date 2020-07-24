import Router, { request, response } from 'express';
import { getRepository } from 'typeorm';
import Points from '../models/Points';

const pointsRoutes = Router();

pointsRoutes.get('/', async(request, response) =>{
    const repo = getRepository(Points);
    const result = await repo.find();
    return response.status(200).json(result)
});

pointsRoutes.post('/', async(request, response) =>{
    const repo = getRepository(Points);
    const result = await repo.save(request.body);

    return response.status(201).json(result)
})

export default pointsRoutes;