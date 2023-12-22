import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import { searchContext } from './context';


const SearchInput = () => {
  const {searchValue, setSearchValue} = useContext(searchContext)

  const handleInput =(e)=>{
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }
  
  
  return (
    <div>
    <TextField  onChange={handleInput} label="Search Item" value = {searchValue} color="secondary" />
    </div>
  )
}

export default SearchInput