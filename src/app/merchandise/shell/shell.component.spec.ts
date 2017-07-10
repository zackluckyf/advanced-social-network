import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchandiseShellComponent } from './merchandise-shell.component';

describe('MerchandiseShellComponent', () => {
  let component: MerchandiseShellComponent;
  let fixture: ComponentFixture<MerchandiseShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchandiseShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchandiseShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
