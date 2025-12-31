import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChooseQleapComponent } from './why-choose-qleap.component';

describe('WhyChooseQleapComponent', () => {
  let component: WhyChooseQleapComponent;
  let fixture: ComponentFixture<WhyChooseQleapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyChooseQleapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyChooseQleapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
