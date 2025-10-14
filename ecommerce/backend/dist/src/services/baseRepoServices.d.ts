import { BaseService } from "./baseServices.js";
import type { ObjectLiteral } from "typeorm";
export declare abstract class BaseRepositoryService<T extends ObjectLiteral> extends BaseService<T> {
    constructor(entity: {
        new (): T;
    });
}
//# sourceMappingURL=baseRepoServices.d.ts.map