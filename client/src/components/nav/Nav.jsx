import Button from '../button/Button';
import SearchBar from '../searchBar/SearchBar';
import style from './Nav.module.css'
import { useDispatch} from 'react-redux';
import { getAllPokemons } from '../../redux/actions';
import iconpoke from '../images/iconpoke.png'

const Nav = () => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        dispatch(getAllPokemons());
    };
    return (
        <nav className={style}>

             <img className={style.image} src={iconpoke}onClick={handleClick}/>
            
          
      
            <SearchBar />
            <Button
            path='/form'
            text='Create Pokemon'
            />
           
          
        </nav>
    )
}

export default Nav;