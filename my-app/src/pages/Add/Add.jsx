import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./Add.css"

const Add = () => {
    const formik = useFormik({
        initialValues: {
          title: '',
          desc: '',
          image: '',
          price:''
        },
        validationSchema: Yup.object({
          title: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Title elave olunmayib'),
          desc: Yup.string()
            .max(20, 'Must be 50 characters or less')
            .required('Description elave olunmayib'),
          image: Yup.string()
          .max(20, 'IMAGE characters or less')
          .required('Image elave olunmayib'),
          price:Yup.number()
          .required('Price elave olunmayib'),
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
  return (
    <form className='form' onSubmit={formik.handleSubmit}>
       <label htmlFor="title">Title</label>
       <input
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.title}
       />
       {formik.touched.title && formik.errors.title ? (
         <div>{formik.errors.title}</div>
       ) : null}
 
       <label htmlFor="desc">Description</label>
       <input
         id="desc"
         name="desc"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.desc}
       />
       {formik.touched.desc && formik.errors.desc ? (
         <div>{formik.errors.desc}</div>
       ) : null}
 
       <label htmlFor="image">Image</label>
       <input
         id="image"
         name="image"
         type="image"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.image}
       />
       {formik.touched.image && formik.errors.image ? (
         <div>{formik.errors.image}</div>
       ) : null}

       <label htmlFor="price">Peice</label>
       <input
         id="price"
         name="price"
         type="price"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.prcie}
       />
       {formik.touched.price && formik.errors.price ? (
         <div>{formik.errors.price}</div>
       ) : null}
 
       <button className='btn btn-success' style={{marginTop:"10px"}} type="submit">Submit</button>
     </form>
  )
}

export default Add