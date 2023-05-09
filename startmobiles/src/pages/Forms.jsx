import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Forms.css';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  mobile: Yup.string().matches(/^[0-9]+$/, 'Mobile number must be numeric').min(10, 'Mobile number must be at least 10 digits').required('Mobile number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  street: Yup.string().required('Street name is required'),
  city: Yup.string().required('City name is required'),
  pincode: Yup.string().matches(/^[0-9]+$/, 'Pincode must be numeric').min(6, 'Pincode must be 6 digits').required('Pincode is required'),
  district: Yup.string().required('District name is required'),
  state: Yup.string().required('State name is required'),
});


const Forms = () => {
  const navigate=useNavigate()
  const [submitting, setSubmitting] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      mobile: '',
      email: '',
      street: '',
      city: '',
      pincode: '',
      district: '',
      state: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      // Do something with the form data
      setSubmitting(true);
      // ...
      setSubmitting(false);
      navigate('/T')
      
    },
  });

  return (
    <div className='container'>
    <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-input">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" {...formik.getFieldProps('name')} className="form-text-input" />
          {formik.touched.name && formik.errors.name ? <div className="form-error">{formik.errors.name}</div> : null}
        </div>
        <div className="form-input">
          <label htmlFor="mobile">Mobile Number:</label>
          <input type="text" id="mobile" {...formik.getFieldProps('mobile')} className="form-text-input" />
          {formik.touched.mobile && formik.errors.mobile ? <div className="form-error">{formik.errors.mobile}</div> : null}
        </div>
        <div className="form-input">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...formik.getFieldProps('email')} className="form-text-input" />
          {formik.touched.email && formik.errors.email ? <div className="form-error">{formik.errors.email}</div> : null}
        </div>
        <div className="form-input">
          <label htmlFor="street">Flat no/house no ,Street Name:</label>
          <input type="text" id="street" {...formik.getFieldProps('street')} className="form-text-input" />
          {formik.touched.street && formik.errors.street ? <div className="form-error">{formik.errors.street}</div> : null}
        </div>
        <div className="form-input">
          <label htmlFor="city">City Name:</label>
          <input type="text" id="city" {...formik.getFieldProps('city')} className="form-text-input" />
          {formik.touched.city && formik.errors.city ? <div className="form-error">{formik.errors.city}</div> : null}
        </div>
        <div className="form-input">
          <label htmlFor="pincode">Pincode:</label>
          <input type="text" id='pincode'{...formik.getFieldProps('pincode')} className="form-text-input" />
          {formik.touched.city && formik.errors.pincode ? <div className="form-error">{formik.errors.pincode}</div> : null}
        </div>

        <div className="form-input">
          <label htmlFor="district">District:</label>
          <input type="text" id='district'{...formik.getFieldProps('district')} className="form-text-input" />
          {formik.touched.city && formik.errors.district ? <div className="form-error">{formik.errors.district}</div> : null}
        </div>

        <div className="form-input">
          <label htmlFor="state">State:</label>
          <input type="text" id='state'{...formik.getFieldProps('state')} className="form-text-input" />
          {formik.touched.city && formik.errors.state ? <div className="form-error">{formik.errors.state}</div> : null}
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
        <button type="submit" disabled={submitting}  className='frm-btn' >
        Submit
      </button>
      </div>










        </form>
      </div>
      </div>
      )}
export default Forms;      