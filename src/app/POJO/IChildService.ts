import IPerson from "../interfaces/IPerson";

interface IChildService {

    getParents(child: IPerson): IPerson[]

}
export default IChildService;