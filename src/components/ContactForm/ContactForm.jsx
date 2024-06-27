import { Form, Formik, Field } from "formik"
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { nanoid } from 'nanoid'
import css from "./contactForm.module.css"

const ContactForm = ({onAdd}) => {

const initialValues = {
  username: "",
 number: "",
  
};
    const handleSubmit = (values, actions) => {
        onAdd({
            id: nanoid(),
            name: values.username,
                number: values.number
        })
        actions.resetForm();
    }
   const nameFieldId = useId();
    const numberFieldId = useId();
  
    const FeedbackSchema = Yup.object().shape({
        username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
    
    });

  return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema} >
      <Form className={css.form}>
        
              <div className={css.formGroup}>
          <label className={css.label} htmlFor={nameFieldId}>Name</label>
          <Field className={css.input} id={nameFieldId} type="text" name="username" />
          <ErrorMessage className={css.message} name="username" component="span" />
        </div>

        <div className={css.formGroup}>
          <label className={css.label} htmlFor={numberFieldId}>Number</label>
          <Field id={numberFieldId} className={css.input} type="tel" name="number" />
          <ErrorMessage className={css.message} name="number" component="span" />
        </div>

        <div className={css.buttonGroup}>
          <button className={css.btn} type="submit">Add contact</button>
        </div>
          </Form>
    </Formik>
  )
}

export default ContactForm