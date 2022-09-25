import React from "react";
import {  toast } from 'react-toastify';
import { Formik } from "formik";
import { FcSearch} from 'react-icons/fc';
import { SearchbarHeader, SearchForm, SearchFormInput, SearchFormButton, SearchIcon, SearchError} from "./Serchbar.styled";
import * as yup from 'yup';

// import PropTypes from 'prop-types';


const initialValues = {
    search:'',

    };
const schema = yup.object().shape({
  search: yup.string().required(),
});

export const Searchbar = ({onSubmit}) => {

  const handleSubmit = async (values, actions) => {
    if(values.search.trim() === '') {
        toast.error('Enter text!')
        return;
      }   
      await onSubmit(values.search);
      actions.setSubmitting(false);
      actions.resetForm();
    };
   return(
   <SearchbarHeader >
      <Formik initialValues={initialValues} validationSchema={schema}
                  onSubmit ={handleSubmit} 
                  >
      {({isSubmitting}) => (
        <SearchForm>
        <SearchFormButton type="submit" disabled={isSubmitting}>
          <SearchIcon><FcSearch size = {30}/></SearchIcon>
        </SearchFormButton>
    
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        
        <SearchError name="search">Enter Sonething</SearchError>
        
      </SearchForm >
      )}
      </Formik>
    </SearchbarHeader>)
    }

// validationSchema={schema}