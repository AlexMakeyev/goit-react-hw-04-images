import { useState } from 'react';
import {  toast } from 'react-toastify';
import { FcSearch} from 'react-icons/fc';
import { SearchbarHeader, SearchForm, SearchFormInput, SearchFormButton, SearchIcon } from "./Serchbar.styled";

export const Searchbar = ({onSubmit}) => {
  const [search, setSearch] = useState('');

  const onInputChange = event => {
    setSearch(event.target.value);
  };

  const validateForm = data => {
    const isValid = !!data.search;
    return isValid;
  };
  const handleSubmit = async event => {
    event.preventDefault();
    const isValid = validateForm(search);
    if (isValid && search.trim() !== '' ) {
      toast.info('...is already searching', {
        position: toast.POSITION.TOP_LEFT
      });
    } else if (search.trim() === '') {
      toast.error('Enter text!');
      return;
    }
    await onSubmit(search);
    reset();
  
  }
  const reset = () => {
    setSearch('');
  };
return(
  <SearchbarHeader >
     <SearchForm onSubmit ={handleSubmit} >
       <SearchFormButton type="submit"  disabled ={search ===''}>
         <SearchIcon><FcSearch size = {30}/></SearchIcon>
       </SearchFormButton>
   
       <SearchFormInput
         type="text"
         autoComplete="off"
         autoFocus
         placeholder="Search images and photos"
         name="search"
         onChange={onInputChange}
       />
     </SearchForm >  
   </SearchbarHeader>)
}


