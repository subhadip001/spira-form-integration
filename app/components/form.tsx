"use client";

import React from "react";
import { FormBuilder } from "@spiraai/spira-form";
import { ebikeFormSchema, formSchema } from "../schema/formSchema";

const Form: React.FC = () => {
  return (
    <div>
      <FormBuilder schema={ebikeFormSchema} />
    </div>
  );
};

export default Form;
