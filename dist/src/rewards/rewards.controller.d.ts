import { RewardsService } from './rewards.service';
import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';
export declare class RewardsController {
    private readonly rewardsService;
    constructor(rewardsService: RewardsService);
    create(createRewardDto: CreateRewardDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRewardDto: UpdateRewardDto): string;
    remove(id: string): string;
}
