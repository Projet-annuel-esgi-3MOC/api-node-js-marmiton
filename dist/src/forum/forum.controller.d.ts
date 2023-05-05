import { ForumService } from './forum.service';
import { CreateForumDto } from './dto/create-forum.dto';
import { UpdateForumDto } from './dto/update-forum.dto';
export declare class ForumController {
    private readonly forumService;
    constructor(forumService: ForumService);
    create(createForumDto: CreateForumDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateForumDto: UpdateForumDto): string;
    remove(id: string): string;
}
