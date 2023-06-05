import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {    
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {        
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        // console.log('Hola mundo desde Submit!!!!!!!!!')
        event.preventDefault();    
        if(inputValue.trim().length <= 1) return;       
        onNewCategory(inputValue);
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit } aria-label="form">
        <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange= { onInputChange }
        />
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,   
  
}