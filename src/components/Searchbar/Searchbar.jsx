import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import PropTypes from 'prop-types';


const initialValues = {
    search:'',

    };
const schema = yup.object().shape({
  search: yup.string().required(),
});

export class Searchbar extends React.Component  {

  handleSubmit = (values, actions) => {
    if(values.search.trim() === '') {
      alert('enter text')
      return;
    }   
    this.props.onSubmit(values);
    // console.log(values);
    // console.log(actions);
    actions.resetForm();
    
    
  
};
static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  
   
    render() {
      return(<header className="searchbar">
      <Formik initialValues={initialValues} validationSchema={schema}
                  onSubmit ={this.handleSubmit} 
                  >
      <Form className="form">
        <button type="submit" className="button">
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
      </Formik>
    </header>)
    }
}
// validationSchema={schema}