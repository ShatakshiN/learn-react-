
export abstract class  BaseService<T> {
    abstract create(data: T): Promise<any>;
    abstract findOne(criteria:Partial<T>):Promise<any>;
}