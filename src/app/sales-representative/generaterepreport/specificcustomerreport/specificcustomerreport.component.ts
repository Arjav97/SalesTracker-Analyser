import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ReportService } from 'src/app/report.service';
import * as UIkit from 'uikit';
declare let jsPDF;
import { ProductConsumption } from 'src/app/sales-representative/generaterepreport/productconsumption';
import { Orderdetails } from 'src/app/sales-admin/generateadminreport/Orderdetails';

@Component({
  selector: 'app-specificcustomerreport',
  templateUrl: './specificcustomerreport.component.html',
  styleUrls: ['./specificcustomerreport.component.css']
})
export class SpecificcustomerreportComponent {

  pipe = new DatePipe('en-US');
  datestring1:string;
  datestring2:string;
  success:string;
  products:ProductConsumption[]=[];
  customerorderdetail:Orderdetails[]=[];

  constructor(private reportservice:ReportService) { }

  transformDate(date:Date):string
  {
    return this.pipe.transform(date,'dd/MM/yy');
  }

  specificcustomerforRep(date1,date2,customer):void
  {
      let date1f=new Date(date1);
      let date2f=new Date(date2);
      this.datestring1=this.transformDate(date1f);
      this.datestring2=this.transformDate(date2f);
      
      this.reportservice.salesrepcustomeradmin(new Date(date1f.getFullYear(),date1f.getMonth(),date1f.getDate(),0,0,0).toString(),new Date(date2f.getFullYear(),date2f.getMonth(),date2f.getDate(),24,0,0).toString(),customer,localStorage.getItem('salesrep')).subscribe(result=>{
        this.success=result['success'];
       
        if(this.success=='true')
        { 
          this.products=result['productconsumption'];
          this.customerorderdetail=result['customerorderdetails'];
         
          var doc=new jsPDF('p','pt');

          setTimeout(()=>{
          var productconsumptionelem=document.getElementById("productconsumptioncontent");
          var productconsumptiondata=doc.autoTableHtmlToJson(productconsumptionelem);
          var customerorderdetailselem=document.getElementById("customerorderdetailscontent");
          var customerorderdetailsdata=doc.autoTableHtmlToJson(customerorderdetailselem);
          
          doc.text(`Detailed ${customer} Report ( ${this.datestring1} - ${this.datestring2} ) `,75,25);
          //First AutoTable
           doc.autoTable({
           startY:80,
           body:productconsumptiondata.rows,
           columns:["Products","Quantity Consumed"],
           theme:'striped',
           columnStyles:{0:{halign:'center',textColor:'black',fontStyle:'bold'},1:{halign:'center',textColor:'black',fontStyle:'bold'}},
           headStyles:{fontStyle:'bold',fontSize:15,halign:'center'},
           bodyStyles:{minCellHeight:'15',fontSize:15}
          });

          
          doc.text('Customer Order Details Data ',195,doc.lastAutoTable.finalY+45);
          //Second AutoTable
          doc.autoTable({
            body:customerorderdetailsdata.rows,
            head:[["Order Id","Order Date","Order Total","Commission Earned"]],
            theme:'striped',
            columnStyles:{0:{halign:'left',textColor:'black',fontStyle:'bold'},1:{halign:'center',textColor:'black',fontStyle:'bold'},2:{halign:'center',textColor:'black',fontStyle:'bold'},3:{halign:'center',textColor:'black',fontStyle:'bold'}},
            headStyles:{fontStyle:'bold',fontSize:15,halign:'center'},
            bodyStyles:{minCellHeight:'15',fontSize:15},
            startY:doc.lastAutoTable.finalY+78
              })
          
          window.open(doc.output('bloburl'),'_blank','customerdetailedsalesrep.pdf'); 
        },1);
         }
         else
         {
          UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>Customer Details Not Found`,status:'danger',pos:'top-center',timeout:1000});
         }
       
        
      });

    }
  }
  



