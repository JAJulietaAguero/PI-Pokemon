import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../nav/Nav';
import NotFound from '../notFound/NotFound';
import Pagination from '../pagination/Pagination';
import { getTypes } from '../../redux/actions';

const Home = () => {
    
const dispatch = useDispatch();

React.useEffect(() => {
    dispatch(getTypes())
}, [])


    return (
        <div>
            <Nav />

            <Pagination />
        </div>
    )
}

export default Home;