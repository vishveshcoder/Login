
import { LoginComponent } from './login.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('LoginComponent', function () {
  let de: DebugElement;
  let comp: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('input'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h2> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/Login/i,
      '<h1> should say something about "Login"');
  });

 it('Username  should start with company name', () =>{
  fixture.detectChanges();

  expect(de[0].innerText).toMatch('Techno');

}  );

it(' Checking Password Verification', () =>{


  comp.onSubmit({username:'vb',password:'vb'});
  expect(comp.cr).toBe('false');

});

});
