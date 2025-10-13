import type { Repository, DeepPartial, ObjectLiteral } from "typeorm";
export declare abstract class BaseService<T extends ObjectLiteral> {
    protected repository: Repository<T>;
    constructor(repository: Repository<T>);
    findAll(): Promise<T[]>;
    findOne(criteria: Partial<T>): Promise<T | null>;
    create(data: DeepPartial<T> | DeepPartial<T>[]): Promise<T | T[]>;
}
//# sourceMappingURL=baseServices.d.ts.map