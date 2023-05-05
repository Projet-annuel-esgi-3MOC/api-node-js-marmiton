import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';
export declare class RewardsService {
    create(createRewardDto: CreateRewardDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRewardDto: UpdateRewardDto): string;
    remove(id: number): string;
}
