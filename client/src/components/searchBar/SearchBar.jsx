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
         <div className='search-box'>
            <input className='name' type="text" placeholder='Search Pokemon' value={name} onChange={(event) => handleChange(event)}/>
            <button type='submit'>Search</button>
         </div>
       </form>
    )
}

export default SearchBar;