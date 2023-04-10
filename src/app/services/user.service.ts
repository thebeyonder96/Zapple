import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/User';
import { HttpClient } from '@angular/common/http';
import { IUserLogin } from '../shared/interface/IUserLogin';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/url';
import { ToastrService } from 'ngx-toastr';
import { IUserRegister } from '../shared/interface/IUserRegister';

const USER_KEY = 'user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(
    this.getUserFromLocalStorage()
  );
  public userObservable: Observable<User>;
  constructor(private http: HttpClient, private toast: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          console.log(user);
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toast.success(`Welcome ${user.name}`);
        },
        error: (error) => {
          console.log(error);

          this.toast.error(error.error);
        },
      })
    );
  }

  register(userRegister:IUserRegister):Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL,userRegister).pipe(tap(
      {
        next: (user)=>{
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toast.success(`Welcome to Zapple ${user.name}`,'Registration Successful')
        },
        error: error=>{
          this.toast.error(error.error,'Registration failed')
        }
      }
    ))
  }

  logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload()
  }

  private setUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);

    if (userJson) return JSON.parse(userJson) as User;
    return new User();
  }
}
