import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AddExpense, AddExpenseReactive, AddExpenseReactiveForm} from "../data-models/add-expense.interface";
import {maxWordCountValidator} from "@bt-libs/shared/util/form-validators";

/**
 * In reactive forms, you can use setValue to set values on individual form controls
 * and the patchValue method when you want to update multiple fields of your form simultaneously.
 * */

@Component({
  selector: 'bt-libs-ui-add-expense-reactive',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-expense-reactive.component.html',
  styleUrl: './add-expense-reactive.component.scss',
})
export class AddExpenseReactiveComponent implements OnInit{



  @Input()
  public set expenseToAdd(value: AddExpenseReactive) {
    /**
     *
     * The patchValue method will update all values that are supplied inside the value object.
     * So, if the value only contains the description key, only the description will be updated;
     * when the value object contains the description and amount with both properties, all these values will be updated.
     *
     * */

    this.addExpenseForm.patchValue(value);

    this.addExpenseForm.controls.tags.clear();

    value.tags?.forEach(tag => {
      this.addExpenseForm.controls.tags.push(new FormControl(tag));
    });

  }


  @Input()
  public set updateDescription(value: string) {
    /**
     *
     * The setValue method doesn’t allow you to assign a number value to the description input field,
     * making it a type-safe and programmatic way to set the values of form controls.
     *
     * */
    this.addExpenseForm.controls.description.setValue(value)
  }


  ngOnInit(): void {
    const exampleValue = {
      description: 'description',
      amount: {
        amountExclVat: 1234,
        vatPercentage: 5678,
      },
      password: {
        firstPassword: 'firstPassword',
        confirmedPassword: 'confirmedPassword',
      },
      date: ['2023-10-15'],
      tags: ['tag1', 'tag2', 'tag3'],
    }
    this.expenseToAdd = exampleValue as AddExpenseReactive;


    this.updateDescription = "updated description"


    /**
     * With reactive forms, you can also dynamically add and remove validators.
     * */

    this.addExpenseForm.controls.amount.controls.amountExclVat.addValidators([Validators.required]);
  }


  addExpenseForm = new FormGroup<AddExpenseReactiveForm>({
    description: new FormControl('', {updateOn: 'change', validators: [Validators.required, maxWordCountValidator(3)]}   ),
    amount: new FormGroup({
      amountExclVat: new FormControl(0),
      vatPercentage: new FormControl(0),
    }),
    password: new FormGroup({
      firstPassword: new FormControl(''),
      confirmedPassword: new FormControl(''),
    }),
    date: new FormControl(['']),
    tags: new FormArray([new FormControl('')]),
    // statuses: new FormRecord({})
  });


  addTag() {
    let length = this.addExpenseForm.controls.tags.length;
    this.addExpenseForm.controls.tags.insert(length, new FormControl(''));
    // this.addExpenseForm.controls.statuses.addControl(`tag${length}`, new FormControl(''));
  }
  removeTag(index: number) {
    this.addExpenseForm.controls.tags.removeAt(index);
  }

  @Output() addExpense = new EventEmitter<AddExpense>();

  onSubmit() {

    this.addExpenseForm.reset()
  }



}
