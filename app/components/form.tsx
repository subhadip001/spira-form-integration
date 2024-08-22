"use client";

import React from "react";
import { FormBuilder } from "@spiraai/spira-form";
import { ebikeFormSchema, formSchema, qaFormSchema } from "../schema/formSchema";

const Form: React.FC = () => {
  return (
    <div>
      <FormBuilder schema={qaFormSchema} />
    </div>
  );
};

export default Form;
