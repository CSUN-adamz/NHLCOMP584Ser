import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerthreeComponent } from './playerthree.component';

describe('PlayerthreeComponent', () => {
  let component: PlayerthreeComponent;
  let fixture: ComponentFixture<PlayerthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerthreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
