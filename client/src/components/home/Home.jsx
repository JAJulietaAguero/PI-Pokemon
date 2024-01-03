import React from 'react';
import { useDispatch } from 'react-redux';
import Nav from '../nav/Nav';
import Pagination from '../pagination/Pagination';
import { getTypes } from '../../redux/actions';
import style from './Home.module.css'

const Home = () => {
    
const dispatch = useDispatch();

React.useEffect(() => {
    dispatch(getTypes())
}, [dispatch])


    return (
        <div className={style.home}>
            <Nav />
            <Pagination />
        </div>
    )
}

export default Home;