import React, { useState } from "react";
import { ErrorMessage, Field, Formik } from "formik";

export const FormToGetData = () => {
  const formValuesDefault = {
    year: "",
    semester: "1",
    option: "",
    numRow: "1",
  };
  const [formValues, setFormValues] = useState(formValuesDefault);

  const handleSubmit = (values) => {};

  const handleValidate = (values) => {};

  return (
    <div className="container p-0">
      <Formik
        initialValues={formValues}
        onSubmit={handleSubmit}
        validate={handleValidate}
        enableReinitialize={true}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
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
                  <option value="">Seleccione un año</option>
                  {[...Array(20).keys()].map((year) => (
                    <option key={year} value={year + 2001}>
                      {year + 2001}
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
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="semester1"
                >
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
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="semester2"
                >
                  Segundo semestre
                </label>
              </div>
              <div className="col-md-10 text-danger">
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
                  <option value="">Seleccione una opción</option>
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
                <label className="btn btn-outline-secondary" htmlFor="numRow1">
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
                <label className="btn btn-outline-secondary" htmlFor="numRow2">
                  Fila 2
                </label>
              </div>
            </div>

            <div className="form-group row mb-3">
              <div className="col-6">
                <button type="submit" className="btn btn-success btn-lg w-100">
                  Ver examen
                </button>
              </div>
              <div className="col-6">
                <button type="submit" className="btn btn-success btn-lg w-100">
                  Ver solución
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
