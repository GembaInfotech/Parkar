import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

const ContactForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // handle form submission here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div>
    
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <h1 className='h3-phone font-semibold text-blue-400 font-semibold text-blue-400'>Get in Touch</h1>
            <div className="mb-4 ">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <Field type="text" name="name" id="name" className="form-input mt-1 block w-72 sm:w-96 border border-blue-200 border-1" />
              <ErrorMessage name="name" component="div" className="error-msg" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <Field type="email" name="email" id="email" className="form-input mt-1 block w-full border border-blue-200 border-1" />
              <ErrorMessage name="email" component="div" className="error-msg" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700">Phone</label>
              <Field type="text" name="phone" id="phone" className="form-input mt-1 block w-full border border-blue-200 border-1" />
              <ErrorMessage name="phone" component="div" className="error-msg" />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700">Subject</label>
              <Field type="text" name="subject" id="subject" className="form-input mt-1 block w-full border border-blue-200 border-1" />
              <ErrorMessage name="subject" component="div" className="error-msg" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <Field as="textarea" name="message" id="message" className="form-textarea mt-1 block w-full border border-blue-200 border-1" rows="3" />
              <ErrorMessage name="message" component="div" className="error-msg" />
            </div>
            <button type="submit" disabled={isSubmitting} className="bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
