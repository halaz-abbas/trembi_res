import * as Yup from 'yup';

// Login validation schema
export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
});

// Registration validation schema
export const registrationValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9+\-\s()]+$/, 'Invalid phone number')
    .required('Phone number is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain uppercase, lowercase and number')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required')
});

// Restaurant registration validation schema
export const restaurantValidationSchema = Yup.object({
  restaurantName: Yup.string()
    .min(2, 'Restaurant name must be at least 2 characters')
    .required('Restaurant name is required'),
  restaurantAddress: Yup.string()
    .min(5, 'Address must be at least 5 characters')
    .required('Restaurant address is required'),
  restaurantPhone: Yup.string()
    .matches(/^[0-9+\-\s()]+$/, 'Invalid phone number')
    .required('Restaurant phone is required')
});

// Contact form validation schema
export const contactValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email format'),
  phone: Yup.string()
    .matches(/^[0-9+\-\s()]+$/, 'Invalid phone number')
    .required('Phone number is required'),
  findUs: Yup.string()
});