import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayeroneComponent } from './playerone.component';

describe('PlayeroneComponent', () => {
  let component: PlayeroneComponent;
  let fixture: ComponentFixture<PlayeroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayeroneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayeroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
