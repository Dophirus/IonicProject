import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailVillePage } from './detail-ville.page';

describe('DetailVillePage', () => {
  let component: DetailVillePage;
  let fixture: ComponentFixture<DetailVillePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailVillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
