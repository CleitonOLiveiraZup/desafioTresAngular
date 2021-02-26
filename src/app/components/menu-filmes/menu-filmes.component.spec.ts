import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MenuFilmesComponent } from './menu-filmes.component';


describe('MenuFilmesComponent', ()=>{
  let component: MenuFilmesComponent,
      HttpTestingController: HttpTestingController;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[
        MenuFilmesComponent
      ]
    });

    const fixture = TestBed.createComponent(MenuFilmesComponent);
     component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('deve ser instaciado', ()=>{
    expect(component).toBeTruthy();
  })

});