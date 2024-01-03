import style from './SearchBar.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonByName, getAllPokemons } from '../../redux/actions';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(name.length) {
            dispatch(getPokemonByName(name))
            setName("")
        } else {
            dispatch(getAllPokemons());
            setName("")
        }
        
    }

    return (
       <form onSubmit={(event) => handleSubmit(event)}>
         <div >
            <input className={style.searchBox} type="text" placeholder='Search Pokemon' value={name} onChange={(event) => handleChange(event)}/>
            <button className={style.searchButton} type='submit'>Search</button>
         </div>
       </form>
    )
}

export default SearchBar;