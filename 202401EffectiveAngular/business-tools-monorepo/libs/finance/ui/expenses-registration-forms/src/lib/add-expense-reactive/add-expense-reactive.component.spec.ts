import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddExpenseReactiveComponent } from './add-expense-reactive.component';

describe('AddExpenseReactiveComponent', () => {
  let component: AddExpenseReactiveComponent;
  let fixture: ComponentFixture<AddExpenseReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddExpenseReactiveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddExpenseReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
