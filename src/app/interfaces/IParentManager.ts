import IPerson from "./IPerson";

interface IParentManager {

    addParent(child: IPerson, parent: IPerson): void;

    removeParent(child: IPerson, parent: IPerson): void;

}

export default IParentManager;