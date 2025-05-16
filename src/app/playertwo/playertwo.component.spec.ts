import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayertwoComponent } from './playertwo.component';

describe('PlayertwoComponent', () => {
  let component: PlayertwoComponent;
  let fixture: ComponentFixture<PlayertwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayertwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayertwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
