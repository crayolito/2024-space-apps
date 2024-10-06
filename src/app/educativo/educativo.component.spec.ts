import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducativoComponent } from './educativo.component';

describe('EducativoComponent', () => {
  let component: EducativoComponent;
  let fixture: ComponentFixture<EducativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducativoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
