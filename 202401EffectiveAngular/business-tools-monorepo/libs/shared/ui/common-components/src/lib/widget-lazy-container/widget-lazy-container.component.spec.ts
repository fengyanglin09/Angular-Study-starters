import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WidgetLazyContainerComponent } from './widget-lazy-container.component';

describe('WidgetLazyContainerComponent', () => {
  let component: WidgetLazyContainerComponent;
  let fixture: ComponentFixture<WidgetLazyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetLazyContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetLazyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
