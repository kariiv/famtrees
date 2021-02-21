import IPerson from "./IPerson";

interface IChildManager {

    addParent(child: IPerson): boolean;

    removeParent(): boolean;

}

export default IChildManager;