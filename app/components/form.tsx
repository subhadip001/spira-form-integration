"use client";

import React from "react";
import { FormBuilder } from "@spiraai/spira-form";
import { formSchema } from "../schema/formSchema";

const Form: React.FC = () => {
  return (
    <div>
      <FormBuilder schema={formSchema} />
    </div>
  );
};

export default Form;
