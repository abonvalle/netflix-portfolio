import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsListComponent } from './cards-list.component';

describe('CardsList2Component', () => {
  let component: CardsListComponent;
  let fixture: ComponentFixture<CardsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [CardsListComponent]
});
    fixture = TestBed.createComponent(CardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
