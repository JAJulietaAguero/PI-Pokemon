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
        <div>
            <select className="select" onChange={handleSelect2} name="" id="">
                <option className="option" value="default">Sort by</option>
                <optgroup className="optionGroup" label="Attack">
                    <option className="option" value="A">Ascendant</option>
                    <option className="option" value="D">Descendant</option>
                </optgroup>
                <optgroup className="optionGruop" label="Alphabetically">
                    <option className="option" value="A-Z">A-Z</option>
                    <option className="option" value="Z-A">Z-A</option>
                </optgroup>
            </select>

            <select className="select" onChange={handleSelect} name="" id="">
                <option className="option" value="default">Filter by</option>
                <optgroup className="optionGroup" label="Data Base">
                    <option className="option" value="DB">Created</option>
                </optgroup>
                <optgroup className="optionGroup" label="API">
                    <option className="option" value="API">API</option>
                </optgroup>
                <optgroup className="optionGroup" label="Types">
                    {types && types.map(t => <option key={t.name} value={t.name}>{t.name}</option>)}
                </optgroup>
            </select>

       
            
        </div>
    )
 }

 export default Filter;