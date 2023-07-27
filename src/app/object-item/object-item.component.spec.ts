import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectItemComponent } from './object-item.component';

describe('ObjectItemComponent', () => {
  let component: ObjectItemComponent;
  let fixture: ComponentFixture<ObjectItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectItemComponent]
    });
    fixture = TestBed.createComponent(ObjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
