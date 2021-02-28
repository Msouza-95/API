import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import userRepository from '../repositories/UserRepository';


 export default class UserController{

    async create(request: Request, response:Response){
        
        const {name , email} = request.body; 

        const usersRepo = getCustomRepository(userRepository);
    
        const emailAlreadyExists = await usersRepo.findOne({
            email,
        });

        if(emailAlreadyExists){
            return response.status(400).json({
                error: "User Already Exists",
            });
        }
        const user = usersRepo.create({
            name , 
            email,
        });

       await usersRepo.save(user);
   
        return  response.json(user);
    }
}

