import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LogService } from './log/log.service';

@Injectable({
  providedIn: 'root'
})
export class StudataService {



  studentData:Array<any>=[
    // {
    //   id:1,
    //   name:"aman",
    //   email:"aman@gmail.com",
    //   marks:65,
    //   result:"pass"
    // },
    // {
    //   id:2,
    //   name:"Babu rao",
    //   email:"BRapte@gmail.com",
    //   marks:75,
    //   result:"pass"
    // },
    // {
    //   id:3,
    //   name:"raju ",
    //   email:"raju@gmail.com",
    //   marks:32,
    //   result:"fail"
    // },
    // {
    //   id:4,
    //   name:"Shyam ",
    //   email:"shyam@gmail.com",
    //   marks:70,
    //   result:"pass"
    // }
  ]

  updateid!:number;
  msgarray:Array<any>=[]
  constructor(private logdemo:LogService) {
    this.msgarray=this.logdemo.msg
   }

  delete(data:number){
    this.studentData.splice(data,1)
    console.log(this.msgarray[0].delmsg);

  }

  newform:any

  postdata(data:any,form:any){
    this.studentData=data
    this.newform=form
    console.log(this.msgarray[0].addmsg);


  }

updatenewData(newform:FormGroup){
            this.studentData[this.updateid]=newform.value
            console.log(this.msgarray[0].updmsg);

}
  updateFormpatch(data:any,i:number): void{
    // this.newform.id= this.studentData[i].id
    // this.newform.setValue({id:this.studentData[i].id,name:this.studentData[i].name,email:this.studentData[i].email,marks:this.studentData[i].marks,result:this.studentData[i].result});
    this.newform.setValue(this.studentData[i]);

    console.log(this.studentData[i].id);
    this.updateid=i
    console.log(this.msgarray[0].patmsg);

  }



}
