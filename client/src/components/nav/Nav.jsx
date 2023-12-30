import Button from '../button/Button';
import SearchBar from '../searchBar/SearchBar';
import Filter from '../filter/Filter';


const Nav = () => {
    return (
        <nav>
            <Button
            path='/form'
            text='Create new Pokemon'
            />
            <SearchBar />
            <Filter />
        </nav>
    )
}

export default Nav;