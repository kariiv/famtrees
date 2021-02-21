import IPerson from "./IPerson";

interface IParentManager {

    addChild(child: IPerson): boolean;

    removeChild(): boolean;

}

export default IParentManager;