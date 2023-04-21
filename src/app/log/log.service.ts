import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }


    msg:Array<Object>=[
      {addmsg:'Data has been added',
      delmsg:'Data has been deleted',
      updmsg:'Data has been Updated',
      patmsg:'Data has been patched'
    }
]

}
