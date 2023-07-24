import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
  
  const [inputValue, setinputValue] = useState('')
  
  const onInputChange = (event) => {
    setinputValue(event.target.value)
  }

  const onSubmit = (event) =>{
    event.preventDefault();
    const newInputValue = inputValue.trim();
    if( newInputValue >= 1) return;
    onNewCategory( newInputValue);
    setinputValue('');
  } 
  
  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar gifts"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  )
}
