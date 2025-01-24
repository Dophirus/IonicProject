import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrevisionsPage } from './previsions.page';

describe('PrevisionsPage', () => {
  let component: PrevisionsPage;
  let fixture: ComponentFixture<PrevisionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevisionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
