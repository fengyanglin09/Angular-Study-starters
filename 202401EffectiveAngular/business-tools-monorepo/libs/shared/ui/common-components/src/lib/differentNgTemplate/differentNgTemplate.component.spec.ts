import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DifferentNgTemplateComponent } from './differentNgTemplate.component';

describe('DifferentNgTemplateComponent', () => {
  let component: DifferentNgTemplateComponent;
  let fixture: ComponentFixture<DifferentNgTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DifferentNgTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DifferentNgTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
