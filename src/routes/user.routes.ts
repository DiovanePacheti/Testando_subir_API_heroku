import  Router, { request, response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';

const userRoutes = Router();

userRoutes.get('/', (request, response) =>{
    return response.send("user");
});

userRoutes.post('/', async(request, response) =>{
    const repo = getRepository(User);
    const result = await repo.save(request.body)
    return response.status(200).json(result);
});

export default userRoutes;