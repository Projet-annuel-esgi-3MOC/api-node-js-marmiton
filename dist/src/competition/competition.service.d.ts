import { CreateCompetitionDto } from './dto/create-competition.dto';
import { UpdateCompetitionDto } from './dto/update-competition.dto';
export declare class CompetitionService {
    create(createCompetitionDto: CreateCompetitionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCompetitionDto: UpdateCompetitionDto): string;
    remove(id: number): string;
}
