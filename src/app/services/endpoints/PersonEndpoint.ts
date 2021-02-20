import IEndpoint from "./IEndpoint";

const PersonEndpoint: IEndpoint = {
    add: "people",
    delete: "people/",
    getById: "people/",
    getList: "people/",
    update: "people"
}
Object.freeze(PersonEndpoint)

export default PersonEndpoint