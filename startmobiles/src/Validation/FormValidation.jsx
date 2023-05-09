import React from 'react'
import * as yup from 'yup'

export const userSchema=yup.object().shape({
 name:yup.string().required(),
 mobileNumber:yup.number().min(10).max(10).required('name is required'),
 Email:yup.string().email().required(),
 
 Flatno:yup.string().min(3).required(),
 Cityname:yup.string().min(3).required(),
 pincode:yup.number().min(6).max(6).required(),
 district:yup.string().min(3).required(),
 stateName:yup.string().required()




})
