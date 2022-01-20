import React, { useState } from "react";
import { ErrorMessage, Field, Formik } from "formik";
import styles from "./FormToGetData.module.css";

export const FormToGetData = () => {
  const formValuesDefault = {
    year: "",
    semester: "",
    option: "",
    numRow: "",
  };
  const [formValues, setFormValues] = useState(formValuesDefault);

  const [typeSubmit, setTypeSubmit] = useState("");

  const showExam = (values) => {};

  const showSolution = (values) => {};

  const handleSubmit = (values) => {
    if (typeSubmit === "exam") {
      showExam(values);
    } else if (typeSubmit === "solution") {
      showSolution(values);
    }
  };

  const handleValidate = (values) => {
    const errors = {};
    if (!values.year) {
      errors.year = "El año del examen es requerido";
    }
    if (!values.semester) {
      errors.semester =
        "Debe indicar el semestre en el que se rindió el examen";
    }
    if (!values.option) {
      errors.option = "Debe indicar la opción del examen";
    }
    if (!values.numRow) {
      errors.numRow = "El número de fila del examen es requerido";
    }
    return errors;
  };

  return (
    <>
      <div className={`row ${styles.formBackground}`}>
        <Formik
          initialValues={formValues}
          onSubmit={handleSubmit}
          validate={handleValidate}
          enableReinitialize={true}
        >
          {({ values, handleSubmit }) => (
            <form className="col" onSubmit={handleSubmit}>
              <div className="row justify-content-center mb-3">
                <h1 className="col-auto">Examendeingresoinador</h1>
              </div>
              <div className="row justify-content-center">
                <p className="col-auto text-center fw-bold">
                  Encuentra cualquier examen de ingreso de la Facultad de
                  Ciencias y Tecnología de la Universidad Mayor de San Simón
                </p>
                <hr />
              </div>
              <div className="form-group row mb-3">
                <label htmlFor="year" className="col-md-2 col-form-label">
                  Año:
                </label>
                <div className="col-md-10">
                  <Field
                    id="year"
                    className="form-select"
                    name="year"
                    as="select"
                  >
                    <option value="">Seleccione el año del examen</option>
                    {[...Array(9).keys()].map((year) => (
                      <option key={year} value={year + 2012}>
                        {year + 2012}
                      </option>
                    ))}
                  </Field>
                </div>
                <div className="col-md-10 text-danger">
                  <ErrorMessage name="year" />
                </div>
              </div>

              <div className="form-group row mb-3">
                <label className="col-12 form-label">
                  Semestre del año elegido:
                </label>
                <div
                  className="btn-group col-12"
                  role="group"
                  aria-label="Semestre del año elegido"
                  onClick={() => {
                    setFormValues({
                      ...values,
                      option: "",
                    });
                  }}
                >
                  <Field
                    type="radio"
                    className="btn-check"
                    name="semester"
                    id="semester1"
                    autoComplete="off"
                    value="1"
                  />
                  <label className="btn btn-outline-info" htmlFor="semester1">
                    Primer semestre
                  </label>

                  <Field
                    type="radio"
                    className="btn-check"
                    name="semester"
                    id="semester2"
                    autoComplete="off"
                    value="2"
                  />
                  <label className="btn btn-outline-info" htmlFor="semester2">
                    Segundo semestre
                  </label>
                </div>
                <div className="col-12 text-danger">
                  <ErrorMessage name="semester" />
                </div>
              </div>

              <div className="form-group row mb-3">
                <label htmlFor="option" className="col-md-2 col-form-label">
                  Opción:
                </label>
                <div className="col-md-10">
                  <Field
                    id="option"
                    className="form-select"
                    name="option"
                    as="select"
                  >
                    <option value="">Seleccione la opción del examen</option>
                    <option value="1">Primera opción</option>
                    <option value="2">Segunda opción</option>
                    {values.semester === "1" && (
                      <option value="3">Tercera opción</option>
                    )}
                  </Field>
                </div>
                <div className="col-md-10 text-danger">
                  <ErrorMessage name="option" />
                </div>
              </div>

              <div className="form-group row mb-3">
                <label className="col-12 form-label">
                  Número de fila del examen:
                </label>
                <div
                  className="btn-group col-12"
                  role="group"
                  aria-label="Fila del examen"
                >
                  <Field
                    type="radio"
                    className="btn-check"
                    name="numRow"
                    id="numRow1"
                    autoComplete="off"
                    value="1"
                  />
                  <label className="btn btn-outline-info" htmlFor="numRow1">
                    Fila 1
                  </label>

                  <Field
                    type="radio"
                    className="btn-check"
                    name="numRow"
                    id="numRow2"
                    autoComplete="off"
                    value="2"
                  />
                  <label className="btn btn-outline-info" htmlFor="numRow2">
                    Fila 2
                  </label>
                </div>
                <div className="col-12 text-danger">
                  <ErrorMessage name="numRow" />
                </div>
              </div>

              <div className="form-group row mb-3">
                <div className="col-6">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg w-100"
                    onClick={() => {
                      setTypeSubmit("exam");
                    }}
                  >
                    Ver examen
                  </button>
                </div>
                <div className="col-6">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg w-100"
                    onClick={() => {
                      setTypeSubmit("solution");
                    }}
                  >
                    Ver solución
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};
