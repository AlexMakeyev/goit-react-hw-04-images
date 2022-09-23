import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';

const initialValues = {
    text:'',

    };
const schema = yup.string().required();

export const Searchbar = () => {
   
    return(<header className="searchbar">
    <Formik initialValues={initialValues} validationSchema={schema}
                // onSubmit ={this.handleSubmit} 
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
        name="text"
      />
      <ErrorMessage name="text"/>
      
    </Form>
    </Formik>
  </header>)
}
// validationSchema={schema}