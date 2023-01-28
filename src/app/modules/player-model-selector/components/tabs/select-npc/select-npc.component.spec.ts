import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNPCComponent } from './select-npc.component';

describe('SelectNPCComponent', () => {
  let component: SelectNPCComponent;
  let fixture: ComponentFixture<SelectNPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectNPCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectNPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
