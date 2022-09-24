import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
        alert('enter text')
        return;
      }   
      await onSubmit(values.search);
      actions.setSubmitting(false);
      actions.resetForm();
    };
   return(<header className="searchbar">
      <Formik initialValues={initialValues} validationSchema={schema}
                  onSubmit ={handleSubmit} 
                  >
      {({isSubmitting}) => (
        <Form className="form">
        <button type="submit" className="button" disabled={isSubmitting}>
          <span className="button-label">Search</span>
        </button>
    
        <Field
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <ErrorMessage name="search"/>
        
      </Form>
      )}
      </Formik>
    </header>)
    }

// validationSchema={schema}