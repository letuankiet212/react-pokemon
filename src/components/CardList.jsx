import React from 'react'
import PropTypes from 'prop-types'

const CardList = ({cards}) => {
    return (
        <div>
            <h1>Card List</h1>
        </div>
    )
}

CardList.propTypes = {
    card: PropTypes.array
}

export default CardList
