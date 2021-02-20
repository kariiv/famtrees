
class ConnectionConfiguration {

    ip: string;
    port: string;
    api: string;

    constructor(ip: string, port: string, apiPath: string) {
        this.api = apiPath;
        this.port = port;
        this.ip = ip;
    }

    getIp(): string {
        return this.ip;
    }

    getPort(): string {
        return this.port;
    }

    getApiPath(): string {
        return this.api;
    }

    toString() {
        if (this.ip && this.port)
            return `https://${this.getIp()}:${this.getPort()}${this.getApiPath()}`
        return  `${this.getApiPath()}`
    }
}

export default ConnectionConfiguration;