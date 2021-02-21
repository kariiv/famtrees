import IPerson from "./IPerson";

interface IChildService {

    getParents(child: IPerson): IPerson[]

}
export default IChildService;