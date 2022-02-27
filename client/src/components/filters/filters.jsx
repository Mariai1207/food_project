import './filters.css';
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterByOrderAlphabetical,filterByOrderScore, filterByTypes, getTypes } from '../../actions';

export function Filters() {
    const dispatch = useDispatch()
    const types = useSelector((state) => state.types) 
    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])
    function handleOrderAlphabetical(e) {
        dispatch(filterByOrderAlphabetical(e.target.value))       
    }

    function handleOrderScore(e) {
        dispatch(filterByOrderScore(e.target.value))
    }
    function handleFilterTypes(e) {
        dispatch(filterByTypes(e.target.value))

    }


    return (
        <div>
            <select onChange={(e) => handleOrderAlphabetical(e)} >
                <option value='A-Z'> alphabetical  A-Z</option>
                <option value='Z-A'> alphabetical  Z-A</option>
            </select>
            <select onChange={(e) => handleOrderScore(e)} >
                <option value='max-min'> score max-min </option>
                <option value='min-max'> score min-max  </option>
            </select>

            <select onChange={(e) => handleFilterTypes(e)}>
                <option value='all'>all</option>
                {types.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
        </div>
    )
}