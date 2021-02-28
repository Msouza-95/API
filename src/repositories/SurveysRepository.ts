import { EntityRepository, Repository } from "typeorm";
import surveys from "../models/Surveys";

@EntityRepository(surveys)
export default class surveysRepository extends Repository<surveys> {

}