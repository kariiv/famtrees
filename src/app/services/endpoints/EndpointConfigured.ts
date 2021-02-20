import IEndpoint from "./IEndpoint";
import ConnectionConfiguration from "../providers/ConnectionConfiguration";

class EndpointConfigured implements IEndpoint {

    endpoint: IEndpoint;
    config: ConnectionConfiguration;

    constructor(endpoint: IEndpoint, config: ConnectionConfiguration) {
        this.endpoint = endpoint
        this.config = config;
    }

    get add(): string {
        return this.config.toString() + this.endpoint.add
    }
    get delete(): string {
        return this.config.toString() + this.endpoint.delete
    }
    get getById(): string {
        return this.config.toString() + this.endpoint.getById
    }
    get getList(): string {
        return this.config.toString() + this.endpoint.getList
    }
    get update(): string {
        return this.config.toString() + this.endpoint.update
    }
}
export default EndpointConfigured;