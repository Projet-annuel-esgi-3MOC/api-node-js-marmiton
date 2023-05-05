import { CreateForumDto } from './dto/create-forum.dto';
import { UpdateForumDto } from './dto/update-forum.dto';
export declare class ForumService {
    create(createForumDto: CreateForumDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateForumDto: UpdateForumDto): string;
    remove(id: number): string;
}
