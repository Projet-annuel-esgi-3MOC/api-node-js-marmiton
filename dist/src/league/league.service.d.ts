import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';
export declare class LeagueService {
    create(createLeagueDto: CreateLeagueDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLeagueDto: UpdateLeagueDto): string;
    remove(id: number): string;
}
