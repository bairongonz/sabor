import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatingPage } from './updating.page';

describe('UpdatingPage', () => {
  let component: UpdatingPage;
  let fixture: ComponentFixture<UpdatingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdatingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
