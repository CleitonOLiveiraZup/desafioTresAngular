

import { FilmesComponent } from './filmes.component';

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';




describe('FilmesComponent', ()=>{
  let component: FilmesComponent,
      HttpTestingController: HttpTestingController;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[
        FilmesComponent
      ]
    });

    const fixture = TestBed.createComponent(FilmesComponent);
     component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', ()=>{
    expect(component).toBeTruthy();
  })

});