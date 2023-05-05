import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';
export declare class ChallengeService {
    create(createChallengeDto: CreateChallengeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateChallengeDto: UpdateChallengeDto): string;
    remove(id: number): string;
}
