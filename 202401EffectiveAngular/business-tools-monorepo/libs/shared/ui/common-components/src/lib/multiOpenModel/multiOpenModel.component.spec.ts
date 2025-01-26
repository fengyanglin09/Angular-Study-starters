import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiOpenModelComponent } from './multiOpenModel.component';

describe('MultiOpenModelComponent', () => {
  let component: MultiOpenModelComponent;
  let fixture: ComponentFixture<MultiOpenModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiOpenModelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MultiOpenModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
