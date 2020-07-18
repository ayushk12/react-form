import React from "react";
import "./App.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const formStructure = {
  name: "",
  age: "",

  radioGroup: "",
  phone: "",
  permanentAddress: "",
  currentAddress: "",
  educationDegree: "",
  skills: "",
  picture: "",
  resume: "",
  LinkdIn: "",
  message: "",
  email: "",
  password: "",
  confirmPassword: "",
};

// const FILE_SIZE = 160 * 1024;
// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
// const PDF_SUPPORTED_FORMATS = ["pdf"];
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "must be atleast 3 characters")
    .max(15, "must be less than 15 charcters")
    .required("Name is Required"),

  age: Yup.number()
    .positive("age should be in positive")
    .min(1, "you must be atleast o years")
    .max(99, "You must be less than 99 years")
    .required("age is required")
    .typeError("age must be a number"),

  radioGroup: Yup.string().required("is required"),
  phone: Yup.string()
    .max(10, "must be alteast 10 number")
    .required("phone is required"),

  permanentAddress: Yup.string()
    .min(1, "Minimum 5 words required")
    .max(100, "must be less than 20 charcter")
    .required("address is required"),
  currentAddress: Yup.string()
    .min(1, "Minimum 5 words required")
    .max(100, "must be less than 20 charcter")
    .required("address is required"),
  educationDegree: Yup.string()
    .required("its is required")
    .min(2, "atleast 2 words any degree"),
  skills: Yup.mixed().required("it is required"),

  picture: Yup.mixed().required("A image is required"),
  // .test(
  //   "fileSize",
  //   "File is too large",
  //   (value) => value && value.size <= FILE_SIZE
  // )
  // .test(
  //   "fileFormat",
  //   "Unsupported Format",
  //   (value) => value && SUPPORTED_FORMATS.includes(value.type)
  // ),

  resume: Yup.string().required("it is required"),
  // .test(
  //   "fileFormat",
  //   "Unsupported Format",
  //   (value) => value && PDF_SUPPORTED_FORMATS.includes(value.type)
  // ),
  LinkdIn: Yup.string()
    .url("Must enter URL in http://www.linkedIn.com format")
    .required("it is required"),
  message: Yup.string()
    .required("*URL required")
    .min(3, "atleast you have to message 3 words")
    .max(50, "words less than 50"),
  email: Yup.string().email("Email is invalid").required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(10, "must be less than 10 ")
    // .matches(/[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/i, "invalid Password")
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
              placeholder="Please Enter your name"
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
            <div className="form-group pt-2">
              <label htmlFor="age">Age</label>
              <Field
                name="age"
                type="number"
                placeholder="Please Enter your Age"
                className={
                  "form-control" +
                  (errors.age && touched.age ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="age"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className="ml-4 small-font-size"
              >
                <label className="font-weight-light">
                  <Field type="radio" name="radioGroup" value="Male" />
                  Male
                </label>
                <label className="ml-4">
                  <Field type="radio" name="radioGroup" value="Female" />
                  Female
                </label>

                <label className="ml-4">
                  <Field type="radio" name="radioGroup" value="Others" />
                  Others
                </label>
              </div>

              <ErrorMessage
                name="gender"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">PhoneNo</label>
              <Field
                name="phone"
                type="number"
                placeholder="Please Enter your number"
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
              <label htmlFor="permanentAddress">Permanent Address</label>
              <Field
                name="permanentAddress"
                type="text"
                placeholder="Please Enter your permanent address"
                className={
                  "form-control" +
                  (errors.permanentAddress && touched.permanentAddress
                    ? " is-invalid"
                    : "")
                }
              />
              <ErrorMessage
                name="permanentAddress"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="currentAddress">Current Address</label>
              <Field
                name="currentAddress"
                type="text"
                placeholder="Please Enter your current address"
                className={
                  "form-control" +
                  (errors.currentAddress && touched.currentAddress
                    ? " is-invalid"
                    : "")
                }
              />
              <ErrorMessage
                name="currentAddress"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="educationDegree">Education degree </label>
              <Field
                name="educationDegree"
                type="text"
                placeholder="Please Enter your latest degree"
                className={
                  "form-control" +
                  (errors.educationDegree && touched.educationDegree
                    ? " is-invalid"
                    : "")
                }
              />
              <ErrorMessage
                name="educationDegree"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="skills">Skills</label>
              <Field
                name="skills"
                type="text"
                placeholder="Please Enter Minimum 3 skills"
                className={
                  "form-control" +
                  (errors.skills && touched.skills ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="skills"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="picture">Picture</label>
              <Field
                name="picture"
                type="file"
                className={
                  "form-control" +
                  (errors.picture && touched.picture ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="picture"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="resume">Resume</label>
              <Field
                name="resume"
                type="file"
                className={
                  "form-control" +
                  (errors.resume && touched.resume ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="resume"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="LinkdIn">LinkdIn</label>
              <Field
                name="LinkdIn"
                type="text"
                placeholder="Please Enter your LinkdIn profile URL"
                className={
                  "form-control" +
                  (errors.LinkdIn && touched.LinkdIn ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="LinkdIn"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="text"
                placeholder="xyz@gmail.com"
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
                placeholder="Please Enter your message"
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
                placeholder="Please Enter your password"
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
            <button type="submit" className="btn btn-danger mr-2">
              Register
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default App;
