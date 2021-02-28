import { EntityRepository, Repository } from "typeorm";
import User from "../models/User";


@EntityRepository(User)
export default class userRepository extends Repository<User>{

}

