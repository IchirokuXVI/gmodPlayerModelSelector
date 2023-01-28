import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcConfigFormComponent } from './npc-config-form.component';

describe('NpcConfigFormComponent', () => {
  let component: NpcConfigFormComponent;
  let fixture: ComponentFixture<NpcConfigFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpcConfigFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcConfigFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
