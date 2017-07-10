import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingShellComponent } from './shell.component';

describe('LandingShellComponent', () => {
  let component: LandingShellComponent;
  let fixture: ComponentFixture<LandingShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
