import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {

    show : boolean = false;
    type : string = 'info';
    message: string  ;
    timer : any 
    
    alert(message : string , type : string){
        this.show = true ;
        this.message = message ;
        this.type = type;
        if(this.timer){
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
            this.show = false;
        }, 5000);
    }

}
