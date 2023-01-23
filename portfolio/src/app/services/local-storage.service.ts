import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    get(key:string , fallback:any){
        let value = localStorage.getItem(key);
        return (value) ? JSON.parse(value) : fallback;
    }

    set(property:string , value : any){
        localStorage.setItem(property,JSON.stringify(value));
    }
  
}
