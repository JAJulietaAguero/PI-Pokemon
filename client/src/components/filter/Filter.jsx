import style from './Filter.module.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterBy, orderBy } from '../../redux/actions';

 const Filter = () => {
    const dispatch = useDispatch();
    const { types } = useSelector((state) => state);

    
    const handleSelect = (event) => {
        dispatch(filterBy(event.target.value))
        
    }
    
    const handleSelect2 = (event) => {
        dispatch(orderBy(event.target.value))
        
    }

    return (
        <div className={style.boxFilters}>
            <select value="default" onChange={handleSelect2} name="" id="">
                <option disabled value="default">Sort by attack</option>
                    <option className="option" value="A">Ascendant</option>
                    <option className="option" value="D">Descendant</option>
            </select>

            <select value="default" onChange={handleSelect2} name="" id="">
                <option disabled value="default">Sort alphabetically</option>
                    <option className="option" value="A-Z">A-Z</option>
                    <option className="option" value="Z-A">Z-A</option>
            </select>

            <select value="default" onChange={handleSelect} name="" id="">
                <option disabled value="default">Filter by origin</option>
                    <option className="option" value="DB">Created</option>
                    <option className="option" value="API">API</option>
            </select>

            <select value="default" onChange={handleSelect} name="" id="">
               <option disabled value="default">Filter by types</option>
               <optgroup>
                    {types && types.map(t => <option key={t.name} value={t.name}>{t.name}</option>)}
                </optgroup>
            </select>

       
            
        </div>
    )
 }

 export default Filter;