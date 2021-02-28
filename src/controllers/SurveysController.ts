import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import surveysRepository from "../repositories/SurveysRepository";



export default class surveysController{
    async create(request: Request, response: Response){

        const { title , description } = request.body;

     
        const surveysRepo = getCustomRepository(surveysRepository); 
        const surveys =  surveysRepo.create({
                title,
                description,
              });

           await surveysRepo.save(surveys); 

        return response.status(201).json(surveys);
    }

    async index(request: Request, response: Response){

        const surveysRepo = getCustomRepository(surveysRepository); 
     
        const surveyesAll = await surveysRepo.find();

        return response.status(201).json(surveyesAll);
    }
}