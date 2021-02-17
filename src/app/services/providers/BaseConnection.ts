
class BaseConnection {

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
}

export default BaseConnection;