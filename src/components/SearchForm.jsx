import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

const SearchForm = ({ setCards }) => {
    useEffect(() => {
        const getInitialCards = async () => {
            try {
                const res = await axios.get('https://api.pokemontcg.io/v1/cards?pageSize=50')
            }
            catch(err) {
                console.log(err);
            }
        }
    }, [])
    return (
        <div>
            <h1>Search Form</h1>
        </div>
    )
}

SearchForm.propTypes = {
    setCards: PropTypes.func
}

export default SearchForm
