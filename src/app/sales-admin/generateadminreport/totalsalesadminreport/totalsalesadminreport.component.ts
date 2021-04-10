import { Component} from '@angular/core';
import { DatePipe } from '@angular/common';
import { ReportService } from 'src/app/report.service';
import { Totalsalesadmin } from '../totalsalesadmin';
import * as UIkit from 'uikit';
import { NgxSpinnerService } from 'ngx-spinner';
declare let jsPDF;

@Component({
  selector: 'app-totalsalesadminreport',
  templateUrl: './totalsalesadminreport.component.html',
  styleUrls: ['./totalsalesadminreport.component.css']
})
export class TotalsalesadminreportComponent {

  pipe = new DatePipe('en-US');
  datestring1:string;
  datestring2:string;
  success:string;
  totalsales:Totalsalesadmin[]=[];
  
  constructor(private reportservice:ReportService,
    private spinner:NgxSpinnerService) { }

    transformDate(date:Date):string
  {
    return this.pipe.transform(date,'dd/MM/yy');
  }

  totalSales(date1,date2):void
  {
    if(date1=="" || date2=="")
    {
      UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>Missing dates`,status:'danger',pos:'top-center',timeout:1000});
    }
    else
    {
      this.spinner.show();
      let date1f=new Date(date1);
      let date2f=new Date(date2);
      this.datestring1=this.transformDate(date1f);
      this.datestring2=this.transformDate(date2f);
      
      this.reportservice.totalSalesforAdmin(new Date(date1f.getFullYear(),date1f.getMonth(),date1f.getDate(),0,0,0).toString(),new Date(date2f.getFullYear(),date2f.getMonth(),date2f.getDate(),24,0,0).toString()).subscribe(result=>{

        this.success=result['success'];

        if(this.success=='true')
        { 
          this.totalsales=result['doc'];
          var doc=new jsPDF('p','pt');
       
        
        setTimeout(()=>{
          this.spinner.hide();
          var elem=document.getElementById("content");

          var data=doc.autoTableHtmlToJson(elem);
          /*console.log(data);
          console.log(data.columns);
          console.log(data.rows);*/
          
          doc.text(`Total Sales Report ( ${this.datestring1} - ${this.datestring2} ) `,115,20);
     
           doc.autoTable({
           body:data.rows,
           columns:["Sales Representative","Total Sales","Commission Earned"],
           theme:'striped',
           columnStyles:{0:{halign:'center',textColor:'black',fontStyle:'bold'},1:{halign:'center',textColor:'black',fontStyle:'bold'},2:{halign:'center',textColor:'black',fontStyle:'bold'}},
           headStyles:{fontStyle:'bold',fontSize:15,halign:'center'},
           bodyStyles:{minCellHeight:'13',fontSize:12}
          });
         
          window.open(doc.output('bloburl'),'_blank','totalsales.pdf');
        },1);
        }
        else
        {
          this.spinner.hide();  
          UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>No Product Consumed`,status:'danger',pos:'top-center',timeout:1000});
        }
  
      });
    }
 }
}