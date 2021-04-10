import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Product } from 'src/app/sales-admin/product/product';
import { ReportService } from 'src/app/report.service';
import * as UIkit from 'uikit';
declare let jsPDF;


@Component({
  selector: 'app-productremainingrepreport',
  templateUrl: './productremainingrepreport.component.html',
  styleUrls: ['./productremainingrepreport.component.css']
})
export class ProductremainingrepreportComponent implements OnInit {

  pipe = new DatePipe('en-US');
  datestring:string;
  products:Product[];
  success:string;
  message:string;
  
  ngOnInit(){
    this.transformDate();
  }

  transformDate():void
  {
    this.datestring=this.pipe.transform(new Date(),'dd-MM-yy');
  }

  constructor(private reportservice:ReportService) { }

  
  productremaining():void
  {
    this.reportservice.productremaining().subscribe(result=>{
      this.success=result['success'];
      this.message=result['message'];

      if(this.success=='true')
      {
        this.products=result['products'];
        
        var doc=new jsPDF('p','pt');
        
        setTimeout(()=>{
          var elem=document.getElementById("content");

          var data=doc.autoTableHtmlToJson(elem);
          /*console.log(data);
          console.log(data.columns);
          console.log(data.rows);*/
          
          doc.text(`Product Remaining Report  ${this.datestring} `,178,20);
     
           doc.autoTable({
           body:data.rows,
           columns:["Product Id","Name","Qty","Category","Price"],
           theme:'striped',
           columnStyles:{0:{halign:'center',textColor:'black',fontStyle:'bold'},1:{halign:'center',textColor:'black',fontStyle:'bold'},2:{halign:'center',textColor:'black',fontStyle:'bold'},3:{halign:'center',textColor:'black',fontStyle:'bold'},4:{halign:'center',textColor:'black',fontStyle:'bold'}},
           headStyles:{fontStyle:'bold',fontSize:15,halign:'center'},
           bodyStyles:{minCellHeight:'13',fontSize:12}
          });
         
          window.open(doc.output('bloburl'),'_blank','productremaining.pdf');
        },1);
        
      }
      else
      {
        UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>${this.message}`,status:'danger',pos:'top-center',timeout: 1000});
      }

    });
  }
}
