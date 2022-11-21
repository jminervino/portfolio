import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhistoryComponent } from './myhistory.component';

describe('MyhistoryComponent', () => {
  let component: MyhistoryComponent;
  let fixture: ComponentFixture<MyhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyhistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
