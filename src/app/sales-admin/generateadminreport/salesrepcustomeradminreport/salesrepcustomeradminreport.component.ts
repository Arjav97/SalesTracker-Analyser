import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ReportService } from 'src/app/report.service';
import * as UIkit from 'uikit';
declare let jsPDF;
import { ProductConsumption } from 'src/app/sales-representative/generaterepreport/productconsumption';
import { Orderdetails } from '../Orderdetails';
import { Specificorderdetails } from '../Specificorderdetail';
import { Totalsalesadmin } from '../totalsalesadmin';

@Component({ 
  selector: 'app-salesrepcustomeradminreport',
  templateUrl: './salesrepcustomeradminreport.component.html',
  styleUrls: ['./salesrepcustomeradminreport.component.css']
})
export class SalesrepcustomeradminreportComponent  {

  pipe = new DatePipe('en-US');
  datestring1:string;
  datestring2:string;
  success:string;
  products:ProductConsumption[]=[];
  customerorderdetail:Orderdetails[]=[];
  customerspecificorderdetail:Specificorderdetails[]=[];
  totalsalesbyrep:Totalsalesadmin[]=[];

  constructor(private reportservice:ReportService) { }

  transformDate(date:Date):string
  {
    return this.pipe.transform(date,'dd/MM/yy');
  }


  salesrepcustomeradmin(date1,date2,customer:string,salesrep:string):void
  {

    if(date1=="" || date2=="")
    {
      UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>Missing dates`,status:'danger',pos:'top-center',timeout:1000});
    }
    else if(customer=="")
    {
      UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>Missing Customer Id `,status:'danger',pos:'top-center',timeout:1000});
    }
    else if(salesrep=="" && customer!=="")
    {
     
      let date1f=new Date(date1);
      let date2f=new Date(date2);
      this.datestring1=this.transformDate(date1f);
      this.datestring2=this.transformDate(date2f);
      this.reportservice.customerspecific(new Date(date1f.getFullYear(),date1f.getMonth(),date1f.getDate(),0,0,0).toString(),new Date(date2f.getFullYear(),date2f.getMonth(),date2f.getDate(),24,0,0).toString(),customer).subscribe(result=>{
        this.success=result['success'];
       
        if(this.success=='true')
        { 
          this.products=result['productconsumption'];
          this.customerspecificorderdetail=result['customerspecificorderdetails'];
          this.totalsalesbyrep=result['totalbyrep'];
          console.log(this.totalsalesbyrep);
         
          var doc=new jsPDF('p','pt');

          setTimeout(()=>{
          var productconsumptionelem=document.getElementById("productconsumptioncontent");
          var productconsumptiondata=doc.autoTableHtmlToJson(productconsumptionelem);
          var customerspecificorderdetailselem=document.getElementById("customerspecificorderdetailscontent");
          var customerspecificorderdetailsdata=doc.autoTableHtmlToJson(customerspecificorderdetailselem);
          var salesbyrepelem=document.getElementById("salesbyrepcontent");
          var salesbyrepdata=doc.autoTableHtmlToJson(salesbyrepelem);
           


          doc.text(`Detailed ${customer} Report ( ${this.datestring1} - ${this.datestring2} ) `,75,25);
          //First AutoTable
           doc.autoTable({
           //startY:80,
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
            body:customerspecificorderdetailsdata.rows,
            head:[["Customer Id","Order Date","Order Total","Sales Rep","Commission Earned"]],
            theme:'striped',
            columnStyles:{0:{halign:'left',textColor:'black',fontStyle:'bold'},1:{halign:'center',textColor:'black',fontStyle:'bold'},2:{halign:'center',textColor:'black',fontStyle:'bold'},3:{halign:'left',textColor:'black',fontStyle:'bold'},4:{halign:'center',textColor:'black',fontStyle:'bold'}},
            headStyles:{fontStyle:'bold',fontSize:14,halign:'center'},
            bodyStyles:{minCellHeight:'15',fontSize:12},
            startY:doc.lastAutoTable.finalY+78
              })

          
          doc.text('Total Sales with respect to sales representative',140,doc.lastAutoTable.finalY+45);
          //Third AutoTable
          doc.autoTable({
            body:salesbyrepdata.rows,
            head:[["Sales Rep","Total Sales","Commission Earned"]],
            theme:'striped',
            columnStyles:{0:{halign:'center',textColor:'black',fontStyle:'bold'},1:{halign:'center',textColor:'black',fontStyle:'bold'},2:{halign:'center',textColor:'black',fontStyle:'bold'}},
            headStyles:{fontStyle:'bold',fontSize:14,halign:'center'},
            bodyStyles:{minCellHeight:'15',fontSize:14},
            startY:doc.lastAutoTable.finalY+78
              })
          
          window.open(doc.output('bloburl'),'_blank','customerspecificdetail.pdf'); 
        },1);
         }
         else
         {
          UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>Customer Details Not Found`,status:'danger',pos:'top-center',timeout:1000});
         }
       
        
      });

    }
    else
    {
      let date1f=new Date(date1);
      let date2f=new Date(date2);
      this.datestring1=this.transformDate(date1f);
      this.datestring2=this.transformDate(date2f);
      
      this.reportservice.salesrepcustomeradmin(new Date(date1f.getFullYear(),date1f.getMonth(),date1f.getDate(),0,0,0).toString(),new Date(date2f.getFullYear(),date2f.getMonth(),date2f.getDate(),24,0,0).toString(),customer,salesrep).subscribe(result=>{
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
          doc.text(`Sales Representative - ${salesrep}`,75,50);
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
} 

