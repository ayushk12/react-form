import React from "react";
import "./App.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const formStructure = {
  name: "",
  age: "",
  phone: "",
  address: "",
  message: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "must be atleast 3 characters")
    .max(15, "must be less than 15 charcters")
    .required("Name is Required"),

  age: Yup.string()

    .required("age is required")
    .typeError("age must be a number"),
  phone: Yup.string()
    .min(10, "must be alteast 10 number")
    .required("phone is required"),

  address: Yup.string()
    .min(1, "Minimum 5 words required")
    .max(1000, "must be less than 20 charcter")
    .required("address is required"),

  email: Yup.string().email("Email is invalid").required("Email is required"),

  message: Yup.string().required("message required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

class App extends React.Component {
  render() {
    console.log("App Started...");
    return (
      <Formik
        initialValues={formStructure}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          alert("SUCCESS!! :-)\n\n");
          resetForm(values, "");
        }}
      >
        {({ errors, status, touched }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field
              name="name"
              type="text"
              className={
                "form-control" +
                (errors.name && touched.name ? " is-invalid" : "")
              }
            />
            <ErrorMessage
              name="name"
              component="div"
              className="invalid-feedback"
            />
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <Field
                name="age"
                type="number"
                className={
                  "form-control" +
                  (errors.gender && touched.gender ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="age"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNo">PhoneNo</label>
              <Field
                name="phone"
                type="number"
                className={
                  "form-control" +
                  (errors.phone && touched.phone ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <Field
                name="address"
                type="text"
                className={
                  "form-control" +
                  (errors.email && touched.email ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="address"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="text"
                className={
                  "form-control" +
                  (errors.email && touched.email ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>

              <Field
                name="message"
                type="text"
                className={
                  "form-control" +
                  (errors.message && touched.message ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="message"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                className={
                  "form-control" +
                  (errors.password && touched.password ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                name="confirmPassword"
                type="password"
                className={
                  "form-control" +
                  (errors.confirmPassword && touched.confirmPassword
                    ? " is-invalid"
                    : "")
                }
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <button type="submit" className="btn btn-primary mr-2">
              Register
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default App;
