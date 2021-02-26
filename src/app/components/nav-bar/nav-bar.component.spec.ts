import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './nav-bar.component';


describe('O componente NavBar', ()=>{
  let component: NavBarComponent,
      HttpTestingController: HttpTestingController;


  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, BrowserAnimationsModule, FontAwesomeModule],
      providers:[ NavBarComponent],
    });

    const fixture = TestBed.createComponent(NavBarComponent);
     component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('ok', ()=>{
    expect(component).toBeTruthy();
  })


});