import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JorgecolqueComponent } from './jorgecolque.component';

describe('JorgecolqueComponent', () => {
  let component: JorgecolqueComponent;
  let fixture: ComponentFixture<JorgecolqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JorgecolqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JorgecolqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
