import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventUpdaterComponentComponent } from './event-updater-component.component';

describe('EventUpdaterComponentComponent', () => {
  let component: EventUpdaterComponentComponent;
  let fixture: ComponentFixture<EventUpdaterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventUpdaterComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventUpdaterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
