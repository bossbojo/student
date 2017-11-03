import { HttpService } from './http.service';
import { Injectable } from '@angular/core';

@Injectable()
export class VerifyService {

  constructor(private http: HttpService) {}
  private TempData: string;
    private ActiveChats:number;

    setTempData(TempData: string): void {
        this.TempData = TempData;
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
