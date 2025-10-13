export class BaseService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async findAll() {
        return this.repository.find();
    }
    async findOne(criteria) {
        return this.repository.findOne({ where: criteria });
    }
    async create(data) {
        if (Array.isArray(data)) {
            const entities = this.repository.create(data);
            return await this.repository.save(entities);
        }
        else {
            const entity = this.repository.create(data);
            return await this.repository.save(entity);
        }
    }
}
//# sourceMappingURL=baseServices.js.map