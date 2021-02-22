import IPerson from "../interfaces/IPerson";
import IParentService from "./IParentService";
import ISpouseService from "./ISpouseService";
import ISiblingService from "./ISiblingService";
import IChildService from "./IChildService";

class FamilyService {

    parentService: IParentService;
    spouseService: ISpouseService;
    siblingService: ISiblingService;
    childService: IChildService;

    constructor(parentService: IParentService, spouseService: ISpouseService, siblingService: ISiblingService, childService: IChildService) {
        this.spouseService = spouseService;
        this.parentService = parentService;
        this.siblingService = siblingService;
        this.childService = childService;
    }

    getFamilyMembersByClass(): IPerson[] {
        return []
    }

    get parent(): IParentService {
        return this.parentService
    }

    get sibling(): ISiblingService {
        return this.siblingService;
    }

    get spouse(): ISpouseService {
        return this.spouseService;
    }

    get child(): IChildService {
        return this.childService;
    }
}

export default FamilyService;