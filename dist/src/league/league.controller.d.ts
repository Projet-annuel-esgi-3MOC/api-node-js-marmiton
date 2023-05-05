import { LeagueService } from './league.service';
import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';
export declare class LeagueController {
    private readonly leagueService;
    constructor(leagueService: LeagueService);
    create(createLeagueDto: CreateLeagueDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLeagueDto: UpdateLeagueDto): string;
    remove(id: string): string;
}
