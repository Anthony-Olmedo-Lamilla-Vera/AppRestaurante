import React, { useState } from "react";

function useInputHooks(initialvalue = "") {
  const [Value, setValue] = useState(initialvalue);

  const ChangeValue = (e) => {
    setValue(e.target.value);
  };
  return { Value, ChangeValue, setValue };
}

export default useInputHooks;
