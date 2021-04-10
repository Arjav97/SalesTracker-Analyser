import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ReportService } from 'src/app/report.service';
import * as UIkit from 'uikit';
declare let jsPDF;
import { ProductConsumption } from 'src/app/sales-representative/generaterepreport/productconsumption';
import { Detailsalesrep } from 'src/app/sales-representative/generaterepreport/detailedsalesrep';

@Component({
  selector: 'app-allcustomerpurchasereport',
  templateUrl: './allcustomerpurchasereport.component.html',
  styleUrls: ['./allcustomerpurchasereport.component.css']
})
export class AllcustomerpurchasereportComponent {

  pipe = new DatePipe('en-US');
  datestring1:string;
  datestring2:string;
  success:string;
  products:ProductConsumption[]=[];
  customers:Detailsalesrep[]=[];

  constructor(private reportservice:ReportService) { }


  transformDate(date:Date):string
  {
    return this.pipe.transform(date,'dd/MM/yy');
  }

  allcustomerpurchase(date1,date2):void
  {

    if(date1=="" || date2=="")
    {
      UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>Missing dates`,status:'danger',pos:'top-center',timeout:1000});
    }
   else
    {
     
      let date1f=new Date(date1);
      let date2f=new Date(date2);
      this.datestring1=this.transformDate(date1f);
      this.datestring2=this.transformDate(date2f);
      
      this.reportservice.allcustomerpurchase(new Date(date1f.getFullYear(),date1f.getMonth(),date1f.getDate(),0,0,0).toString(),new Date(date2f.getFullYear(),date2f.getMonth(),date2f.getDate(),24,0,0).toString()).subscribe(result=>{
        this.success=result['success'];
       
        if(this.success=='true')
        { 
          this.products=result['productconsumption'];
          this.customers=result['customers'];

          var doc=new jsPDF('p','pt');

          setTimeout(()=>{
          var productconsumptionelem=document.getElementById("productconsumptioncontent");
          var productconsumptiondata=doc.autoTableHtmlToJson(productconsumptionelem);
          var customerelem=document.getElementById("customercontent");
          var customerdata=doc.autoTableHtmlToJson(customerelem);
          
          doc.text(`All Customer Purchase Report ( ${this.datestring1} - ${this.datestring2} ) `,75,25);
   
          //First AutoTable
           doc.autoTable({
           body:productconsumptiondata.rows,
           columns:["Products","Quantity Consumed"],
           theme:'striped',
           columnStyles:{0:{halign:'center',textColor:'black',fontStyle:'bold'},1:{halign:'center',textColor:'black',fontStyle:'bold'}},
           headStyles:{fontStyle:'bold',fontSize:15,halign:'center'},
           bodyStyles:{minCellHeight:'15',fontSize:15}
          });

          
          doc.text('Customer Purchase Data ',195,doc.lastAutoTable.finalY+45);
          //Second AutoTable
          doc.autoTable({
            body:customerdata.rows,
            head:[["Customer Id","Total Purchase"]],
            theme:'striped',
            columnStyles:{0:{halign:'center',textColor:'black',fontStyle:'bold'},1:{halign:'center',textColor:'black',fontStyle:'bold'}},
            headStyles:{fontStyle:'bold',fontSize:15,halign:'center'},
            bodyStyles:{minCellHeight:'15',fontSize:15},
            startY:doc.lastAutoTable.finalY+78
              })
          
          window.open(doc.output('bloburl'),'_blank','allcustomerpurchase.pdf'); 
        },1);
         }
         else
         {
          UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>No Customer Details Found`,status:'danger',pos:'top-center',timeout:1000});
         }
       
        
      });

    }
  }
}
