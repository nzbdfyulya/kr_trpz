// import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {


  size = 8;
  constructor(private http: HttpClient) {}


    getUsers(){
      return this.http.get('https://randomuser.me/api/?inc=gender%2Cname%2Cpicture%2Clocation&results=' + this.size + '&nat=gb')
      .pipe(map(response => response['results']));

      
    }
  setSize(size){
    this.size = size;
  }

    
  }