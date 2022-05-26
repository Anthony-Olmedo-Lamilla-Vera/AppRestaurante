import React, { useState } from "react";
import useSWR from "swr";
import { Rutas } from "../../../../Rutas";
import axios from "axios";
export const typesForm = {
  input: "input",
  select: "select",
};
function InputForm({
  titulo,
  type,
  typeInput,
  comprobar = false,
  Cedula,
  Values,
  SetValue,
  children,
}) {
  return (
    <div className="input-form">
      {type === typesForm.input ? (
        <>
          <label htmlFor="">{titulo}</label>
          <input
            required
            value={Values}
            onChange={SetValue}
            placeholder="Complete el campo porfavor ..."
            type={typeInput}
          />
        </>
      ) : type === typesForm.select ? (
        <>
          <label htmlFor="">{titulo}</label>
          <select
            required
            defaultValue={1}
            value={Values}
            onChange={SetValue}
            placeholder="Complete el campo porfavor ..."
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </>
      ) : (
        ""
      )}
      {children}
    </div>
  );
}

export default InputForm;
