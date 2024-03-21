import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdianomisListComponent } from './ldianomis-list.component';

describe('LdianomisListComponent', () => {
  let component: LdianomisListComponent;
  let fixture: ComponentFixture<LdianomisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LdianomisListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LdianomisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
