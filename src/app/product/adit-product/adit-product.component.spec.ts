import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AditProductComponent } from './adit-product.component';

describe('AditProductComponent', () => {
  let component: AditProductComponent;
  let fixture: ComponentFixture<AditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AditProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
