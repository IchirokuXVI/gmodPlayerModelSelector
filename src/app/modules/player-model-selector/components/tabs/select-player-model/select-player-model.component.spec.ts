import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPlayerModelComponent } from './select-player-model.component';

describe('SelectPlayerModelComponent', () => {
  let component: SelectPlayerModelComponent;
  let fixture: ComponentFixture<SelectPlayerModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPlayerModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPlayerModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
