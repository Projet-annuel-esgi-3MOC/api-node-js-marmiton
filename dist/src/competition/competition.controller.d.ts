import { CompetitionService } from './competition.service';
import { CreateCompetitionDto } from './dto/create-competition.dto';
import { UpdateCompetitionDto } from './dto/update-competition.dto';
export declare class CompetitionController {
    private readonly competitionService;
    constructor(competitionService: CompetitionService);
    create(createCompetitionDto: CreateCompetitionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCompetitionDto: UpdateCompetitionDto): string;
    remove(id: string): string;
}
