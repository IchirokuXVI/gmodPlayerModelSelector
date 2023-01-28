import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerModelSelectorComponent } from './player-model-selector.component';

describe('PlayerModelSelectorComponent', () => {
  let component: PlayerModelSelectorComponent;
  let fixture: ComponentFixture<PlayerModelSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerModelSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerModelSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
