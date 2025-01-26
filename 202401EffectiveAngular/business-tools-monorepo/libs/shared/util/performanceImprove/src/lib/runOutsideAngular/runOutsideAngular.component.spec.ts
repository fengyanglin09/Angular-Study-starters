import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RunOutsideAngularComponent } from './runOutsideAngular.component';

describe('RunOutsideAngularComponent', () => {
  let component: RunOutsideAngularComponent;
  let fixture: ComponentFixture<RunOutsideAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunOutsideAngularComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RunOutsideAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
