import React from "react";
import ImageInputList from "../ImageInputList";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const addImage = (imageUri) => {
    setFieldValue(name, [...imageUris, imageUri]);
  };

  const removeImage = (imageUri) => {
    setFieldValue(
      name,
      imageUris.filter((imgUri) => imgUri !== imageUri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAdd={addImage}
        onRemove={removeImage}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
