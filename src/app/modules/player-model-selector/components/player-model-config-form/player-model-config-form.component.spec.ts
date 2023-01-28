import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerModelConfigFormComponent } from './player-model-config-form.component';

describe('PlayerModelConfigFormComponent', () => {
  let component: PlayerModelConfigFormComponent;
  let fixture: ComponentFixture<PlayerModelConfigFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerModelConfigFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerModelConfigFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
