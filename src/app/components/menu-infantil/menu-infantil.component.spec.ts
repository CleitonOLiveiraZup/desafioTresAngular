

import { MenuInfantilComponent } from './menu-infantil.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';




describe('MenuInfantilComponent', ()=>{
  let component: MenuInfantilComponent,
      HttpTestingController: HttpTestingController;
  let el: HTMLElement;    

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[
        MenuInfantilComponent
      ]
    });

    const fixture = TestBed.createComponent(MenuInfantilComponent);
     component = fixture.componentInstance;
     el = fixture.debugElement.nativeElement.querySelector('h1');
    fixture.detectChanges();
  });

  it('no title in the DOM until manually call `detectChanges`',() => {
 expect(el.textContent).toEqual('Séries Amazon Originals para crianças');
 });
 
  it('should create', ()=>{
    expect(component).toBeTruthy();
  })

});