import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FigthGifComponent } from './figth-gif.component';

describe('FigthGifComponent', () => {
  let component: FigthGifComponent;
  let fixture: ComponentFixture<FigthGifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigthGifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FigthGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
