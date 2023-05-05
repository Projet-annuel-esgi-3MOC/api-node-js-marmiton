import { LevelService } from './level.service';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
export declare class LevelController {
    private readonly levelService;
    constructor(levelService: LevelService);
    create(createLevelDto: CreateLevelDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLevelDto: UpdateLevelDto): string;
    remove(id: string): string;
}
