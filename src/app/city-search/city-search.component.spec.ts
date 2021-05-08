import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySearchComponent } from './city-search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'


describe('CitySearchComponent', () =>
{
  let component: CitySearchComponent;
  let fixture: ComponentFixture<CitySearchComponent>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [CitySearchComponent],
      imports: [HttpClientTestingModule],

    })
      .compileComponents();
  });

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(CitySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
