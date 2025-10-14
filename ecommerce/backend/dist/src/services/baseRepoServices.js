import { BaseService } from "./baseServices.js";
import { Repository } from "typeorm";
import { AppDataSource } from "../../util/db.js";
export class BaseRepositoryService extends BaseService {
    constructor(entity) {
        const dataSource = AppDataSource.getInstance();
        if (!dataSource.isInitialized)
            dataSource.initialize();
        const repo = dataSource.getRepository(entity);
        super(repo);
    }
}
//# sourceMappingURL=baseRepoServices.js.map