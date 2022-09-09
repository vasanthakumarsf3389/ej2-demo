import { Component, ViewChild } from '@angular/core';
import {  GridComponent } from '@syncfusion/ej2-angular-grids';
import { lazyLoadData  } from './data';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<button class="btn btn-primary" (click)="flag = true" >
  Render
</button>
<button class="btn btn-primary" (click)="flag = !flag" >
     Destroy
</button>
  <span id="performanceTime">Initial Load Time Taken: 0 ms</span>

  <span id="performanceTime1"> Grid Action Taken Time : 0 ms</span>
  <ejs-grid #grid [dataSource]='data' [enableVirtualization]='true' height='400' [allowSorting]='true' 
      [allowGrouping]='true' [pageSettings]='initialPage' [toolbar]='toolbar' [allowFiltering]='true'
      (created)='created($event)' (dataBound)='dataBound($event)' (actionBegin)='actionBegin($event)'
      (actionComplete)='actionComplete($event)' showColumnChooser='true' *ngIf="flag">
      <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width='120'></e-column>
          <e-column field='ProductName' headerText='Product Name' width='100'></e-column>
          <e-column field='ProductID' headerText='Product ID' textAlign='Right' width='120'></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width='120'></e-column>
          <e-column field='CustomerName' headerText='Customer Name' width='120'></e-column>
      </e-columns>
  </ejs-grid>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: Object[] = lazyLoadData;
  @ViewChild('grid')
  public grid: GridComponent;
  public date1: number;
  public date2: number;
  public date3: number;
  public flag: boolean = true;
  public ngOnInit(): void { }
  public initialPage: Object =  { pageSize: 100 };
  public toolbar: string[] = ['Search', 'ColumnChooser'];

  created() {
    this.date1 = new Date().getTime();
  }

  dataBound() {
    if (this.flag && this.date1) {
      this.date2 = new Date().getTime();
      document.getElementById('performanceTime').innerHTML = 'Time Taken: ' + (this.date2 - this.date1) + 'ms';
      // this.flag = false;
  }
  }

  actionBegin(args: any) {
    if (args.requestType === 'sorting' || args.requestType === 'filtering' || args.requestType === 'searching' ||
      args.requestType === 'grouping' || args.requestType === 'reorder' || args.requestType == 'columnstate'
      || args.requestType === 'paging' || args.requestType === 'ungrouping') {
      this.date3 = new Date().getTime();
    }

  }

  actionComplete(args: any): void {
    if (args.requestType === 'sorting' || args.requestType === 'filtering' || args.requestType === 'searching' ||
      args.requestType === 'grouping' || args.requestType === 'reorder' || args.requestType === 'columnstate'
      || args.requestType === 'paging' || args.requestType === 'ungrouping') {
      if (this.date3) {
        const dateAction: number = new Date().getTime();
        document.getElementById('performanceTime1').innerHTML = 'Action Time Taken: ' + (dateAction - this.date3) + 'ms';
      }
    }
  }
}
