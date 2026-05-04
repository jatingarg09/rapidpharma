import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcdFranchiseComponent } from './pcd-franchise.component';

describe('PcdFranchiseComponent', () => {
  let component: PcdFranchiseComponent;
  let fixture: ComponentFixture<PcdFranchiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcdFranchiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcdFranchiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
