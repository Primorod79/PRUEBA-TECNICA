import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  private myAppUrl = 'https://localhost:7186/';
  private myApiUrl = 'api/laptop/'

  constructor(private http: HttpClient) { }


  getListlaptops(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deletelaptop(id: number): Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl + id)
  }

  savelaptop(laptop: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, laptop)
  }

  updatelaptop(id: number, laptop: any ): Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl + id, laptop )
  }


}
