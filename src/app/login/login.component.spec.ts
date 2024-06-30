import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { userServiceStub } from './userService.stub';
import { UserService } from '../services/user.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [{ provide: UserService, useValue: userServiceStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should show 'User Logged' if isLogged is true", () => {
    //let uService = TestBed.get(LoginService);
    let uService = TestBed.inject(UserService);
    uService.isLogged = true;
    fixture.detectChanges();
    let el = fixture.debugElement.query(By.css('#welcome'));
    expect(el.nativeElement.textContent).toEqual('User Logged');
  });
  it("should show 'User Not Logged' if isLogged is false", () => {
    //let uService = TestBed.get(LoginService);
    let uService = TestBed.inject(UserService);
    uService.isLogged = false;
    fixture.detectChanges();
    let el = fixture.debugElement.query(By.css('#welcome'));

    expect(el.nativeElement.textContent).toEqual('User Not Logged');
  });

  it('should the user name came from the service', () => {
    //let uService = TestBed.get(LoginService);
    let uService = TestBed.inject(UserService);
    uService.isLogged = true;

    fixture.detectChanges();
    let el = fixture.debugElement.query(By.css('#user-name'));
    console.log(el.nativeElement.textContent);

    expect(el.nativeElement.textContent).toContain(uService.user.name);
  });
});
