import React, { createContext, useMemo, useState } from "react";

// 入力内容を保持するコンテキスト
export const FormContext = createContext(null);

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({ name: "", description: "" });

  const value = useMemo(() => ({ formData, setFormData }), [formData]);

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}
