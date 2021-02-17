abstract class BaseEntity {

    id: number;

    protected constructor(id: number) {
        this.id = id;
    }

    getId(): number {
        return this.id;
    }

    toString() {
        return `[${this.constructor.name}: ${this.getId()}]`
    }
}

export default BaseEntity;