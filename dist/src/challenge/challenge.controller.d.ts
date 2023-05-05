import { ChallengeService } from './challenge.service';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';
export declare class ChallengeController {
    private readonly challengeService;
    constructor(challengeService: ChallengeService);
    create(createChallengeDto: CreateChallengeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateChallengeDto: UpdateChallengeDto): string;
    remove(id: string): string;
}
