import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceLteComponent } from './space-lte.component';

describe('SpaceLteComponent', () => {
  let component: SpaceLteComponent;
  let fixture: ComponentFixture<SpaceLteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceLteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceLteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
