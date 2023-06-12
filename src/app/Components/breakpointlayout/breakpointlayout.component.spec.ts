import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakpointlayoutComponent } from './breakpointlayout.component';

describe('BreakpointlayoutComponent', () => {
  let component: BreakpointlayoutComponent;
  let fixture: ComponentFixture<BreakpointlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakpointlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakpointlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
