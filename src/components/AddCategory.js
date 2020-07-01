import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategory}) => {


    const [inputCategory, setInputCategory] = useState('');

    const handleInputChange = (e) => {

        setInputCategory(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputCategory.trim().length > 0)
        {
            setCategory( cats => [ ...cats, inputCategory]);
            setInputCategory('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}  className="center">
                <input
                    type="text"
                    className="add-input"
                    placeholder={'Search in Gify...'}
                    value={inputCategory}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}



