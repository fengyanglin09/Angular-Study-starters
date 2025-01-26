import {FormArray, FormControl, FormGroup} from "@angular/forms";

export interface AddExpense {
  description: string;
  amountExclVat: number | null;
  vatPercentage: number | null;
  date: Date | null;
  password: {
    password: string | null;
    confirmPassword: string | null;
  };
}

export interface AddExpenseReactive {
  description?: string | null;
  amount?: {
    amountExclVat?: number | null;
    vatPercentage?: number | null;
  };
  password: {
    firstPassword: string | null;
    confirmedPassword: string | null;
  };

  date?: string[] | string | null;
  tags?: string[];
}


export interface AddExpenseReactiveForm {
  description: FormControl<string | null>;
  amount: FormGroup<{
    amountExclVat: FormControl<number | null>;
    vatPercentage: FormControl<number | null>;
  }>;
  password: FormGroup<{
    firstPassword: FormControl<string | null>;
    confirmedPassword: FormControl<string | null>;
  }>;
  date: FormControl<string | string[] | null>;
  tags: FormArray<FormControl<string | null>>;
}


