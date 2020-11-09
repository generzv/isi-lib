import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsiLibComponent } from './isi-lib.component';

describe('IsiLibComponent', () => {
  let component: IsiLibComponent;
  let fixture: ComponentFixture<IsiLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsiLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
