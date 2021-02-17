import TreeListElement from "./treeSelection/TreeListElement";
import CreateNewTree from "./treeSelection/CreateNewTree";
import Search from "./common/RedFormControl";
import {useState} from "react";
import H1Title from "./common/H1Title";

export default ({ options, onSelect }) => {
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        if (!e) setSearch('')
        else setSearch(e.target.value);
    }
    options = options.filter(famTree => famTree.getName().toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <H1Title red="Family" white=' trees' caps/>
            <Search onChange={handleSearch} value={search} />
            { options.map(famTree => <TreeListElement key={famTree.getId()} onClick={()=>{ onSelect(famTree) }} famTree={famTree}/>) }
            <CreateNewTree/>
        </>
    )
}