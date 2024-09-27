import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioAndAboutMeComponent } from './bio-and-about-me.component';

describe('BioAndAboutMeComponent', () => {
  let component: BioAndAboutMeComponent;
  let fixture: ComponentFixture<BioAndAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioAndAboutMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioAndAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
