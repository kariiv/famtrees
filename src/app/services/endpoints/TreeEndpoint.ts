import IEndpoint from "./IEndpoint";

const TreeEndpoint: IEndpoint = {
    add: "trees",
    delete: "trees/",
    getById: "tree/",
    getList: "trees",
    update: "trees"
}
Object.freeze(TreeEndpoint)

export default TreeEndpoint