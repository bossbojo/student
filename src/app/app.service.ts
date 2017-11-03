import { HttpService } from './services/http.service';
import { Injectable } from '@angular/core';


@Injectable()
export class AppServices {

  constructor(private http: HttpService) {}
  private TempData: string;
    private ActiveChats:number;

    setTempData(TempData: string): void {
        this.TempData = TempData;
    }
    onSaveLogActive(Id_i:number,Type_i:string,Description_i:String,Description_Entry_i:string){
        var obj = {
            Id_user:Id_i,
            Type:Type_i,
            Description:Description_i,
            Description_Entry:Description_Entry_i
        }
        this.http.requestPost('SaveLogActive',obj).subscribe((res)=>(console.log('')));
    }

    get getTempData(): string {
        return this.TempData || null;
    }


    setActiveChats(ActiveChats:number):void{
        this.ActiveChats = ActiveChats;
    }
    
     get getActiveChats(): number {
        return this.ActiveChats || 0;
    }
}
