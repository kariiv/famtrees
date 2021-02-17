import Search from "./common/RedFormControl";
import {useState} from "react";
import CreateNewPerson from "./personSelection/CreateNewPerson";
import PersonListElement from "./personSelection/PersonListElement";
import H1Title from "./common/H1Title";

export default ({ options, onSelect, famTree }) => {
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        if (!e) setSearch('')
        else setSearch(e.target.value);
    }
    options = options.filter(person => (person.getFirstName() + person.getLastName()).toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <H1Title red={famTree.getName()} caps/>
            <Search onChange={handleSearch} value={search} />
            { options.map(person => <PersonListElement key={person.getId()} onClick={()=>{ onSelect(person) }} person={person}/>) }

            <CreateNewPerson/>
        </>
    )
}