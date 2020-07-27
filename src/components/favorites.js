import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HousesList from './houses';
import { getFavorites } from '../actions';


const Favorites = () => {
    const favorites = useSelector(state => state.favorites)

    const displayFavorites = () => {
        return (
            favorites.map((house, i) => <HousesList key={i} data={house} />)
        )
    }
    const dispatch = useDispatch()

    useEffect(() => {
        const loadAllHouses = async () => {
            await dispatch(getFavorites());
        };
        loadAllHouses();
    }, [dispatch]);

    return (
        <div>
            <h1 className="text-center p-4">My favorites Houses</h1>
            <div className="row">
                {
                    displayFavorites()
                }
            </div>
        </div>
    );
};

export default Favorites;