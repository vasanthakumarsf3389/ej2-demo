// /* tslint:disable */

// import {  ColumnDirective, Toolbar, Sort, ColumnsDirective, VirtualScroll, GridComponent, Reorder,
//    ColumnChooser, Filter, Inject, Page, Group } from '@syncfusion/ej2-react-grids';
// import * as React from 'react';

// let lazyLoadData: any = [];
// var customerid = ['VINET', 'TOMSP', 'HANAR', 'VICTE', 'SUPRD', 'HANAR', 'CHOPS', 'RICSU', 'WELLI', 'HILAA', 'ERNSH', 'CENTC',
//   'OTTIK', 'QUEDE', 'RATTC', 'ERNSH', 'FOLKO', 'BLONP', 'WARTH', 'FRANK', 'GROSR', 'WHITC', 'WARTH', 'SPLIR', 'RATTC', 'QUICK', 'VINET',
//   'HUNGO', 'PRINI', 'FRANK', 'OLDWO', 'MEREP', 'BONAP', 'SIMOB', 'FRANK', 'LEHMS', 'WHITC', 'QUICK', 'RATTC', 'FAMIA'];
// var product = ['Chai', 'Chang', 'Aniseed Syrup', 'Chef Anton\'s Cajun Seasoning', 'Chef Anton\'s Gumbo Mix', 'Grandma\'s Boysenberry Spread',
//   'Gudbrandsdalsost', 'Outback Lager', 'Flotemysost', 'Mozzarella di Giovanni', 'Röd Kaviar', 'Longlife Tofu', 'Rhönbräu Klosterbier', 'Lakkalikööri', 'Original Frankfurter grüne Soße'];
// var customername = ['Maria', 'Ana Trujillo', 'Antonio Moreno', 'Thomas Hardy', 'Christina Berglund', 'Hanna Moos', 'Frédérique Citeaux', 'Martín Sommer', 'Laurence Lebihan', 'Elizabeth Lincoln',
//   'Victoria Ashworth', 'Patricio Simpson', 'Francisco Chang', 'Yang Wang', 'Pedro Afonso', 'Elizabeth Brown', 'Sven Ottlieb', 'Janine Labrune', 'Ann Devon', 'Roland Mendel', 'Aria Cruz', 'Diego Roel',
//   'Anabela Domingues', 'Helvetius Nagy', 'Palle Ibsen', 'Mary Saveley', 'Paul Henriot', 'Rita Müller', 'Pirkko Koskitalo', 'Paula Parente', 'Karl Jablonski', 'Matti Karttunen', 'Zbyszek Piestrzeniewicz'];
// var customeraddress = ['507 - 20th Ave. E.\r\nApt. 2A', '908 W. Capital Way', '722 Moss Bay Blvd.', '4110 Old Redmond Rd.', '14 Garrett Hill', 'Coventry House\r\nMiner Rd.', 'Edgeham Hollow\r\nWinchester Way',
//   '4726 - 11th Ave. N.E.', '7 Houndstooth Rd.', '59 rue de l\'Abbaye', 'Luisenstr. 48', '908 W. Capital Way', '722 Moss Bay Blvd.', '4110 Old Redmond Rd.', '14 Garrett Hill', 'Coventry House\r\nMiner Rd.', 'Edgeham Hollow\r\nWinchester Way',
//   '7 Houndstooth Rd.', '2817 Milton Dr.', 'Kirchgasse 6', 'Sierras de Granada 9993', 'Mehrheimerstr. 369', 'Rua da Panificadora, 12', '2817 Milton Dr.', 'Mehrheimerstr. 369'];
// var quantityperunit = ['10 boxes x 20 bags', '24 - 12 oz bottles', '12 - 550 ml bottles', '48 - 6 oz jars', '36 boxes', '12 - 8 oz jars', '12 - 1 lb pkgs.', '12 - 12 oz jars', '18 - 500 g pkgs.', '12 - 200 ml jars',
//   '1 kg pkg.', '10 - 500 g pkgs.', '2 kg box', '40 - 100 g pkgs.', '24 - 250 ml bottles', '32 - 500 g boxes', '20 - 1 kg tins', '16 kg pkg.', '10 boxes x 12 pieces', '30 gift boxes', '24 pkgs. x 4 pieces', '24 - 500 g pkgs.', '12 - 250 g pkgs.',
//   '12 - 355 ml cans', '20 - 450 g glasses', '100 - 250 g bags'];

// var OrderID = 10248;

// for (var i = 0; i < 20000; i++) {
//   lazyLoadData.push({
//       'OrderID': OrderID + i,
//       'CustomerID': customerid[Math.floor(Math.random() * customerid.length)],
//       'CustomerName': customername[Math.floor(Math.random() * customername.length)],
//       'CustomerAddress': customeraddress[Math.floor(Math.random() * customeraddress.length)],
//       'ProductName': product[Math.floor(Math.random() * product.length)],
//       'ProductID': i,
//       'Quantity': quantityperunit[Math.floor(Math.random() * quantityperunit.length)]
//   });
// }


// export default class App extends React.Component<{}, {}>{

//   public date1: number;
//   public date2: number;
//   public date3: number;
//   public flag: boolean = true;
//   public grid: GridComponent | null;
//   public toolbarOptions: any = ['Search', 'ColumnChooser'];
//   public dataBound() {
//     if (this.flag && this.date1) {
//       this.date2 = new Date().getTime();
//       (document.getElementById('performanceTime') as any).innerHTML = 'Time Taken: ' + (this.date2 - this.date1) + 'ms';
//       this.flag = false;
//     }
//   }

//   public created() {
//     this.date1 = new Date().getTime();
//   }

//   public actionBegin(args: any) {
//     if (args.requestType === 'sorting' || args.requestType === 'filtering' || args.requestType === 'searching' ||
//       args.requestType === 'grouping' || args.requestType === 'reorder' || args.requestType == 'columnstate'
//       || args.requestType === 'paging' || args.requestType === 'ungrouping') {
//       this.date3 = new Date().getTime();
//     }
//   }

//   public actionComplete(args: any) {
//     if (args.requestType === 'sorting' || args.requestType === 'filtering' || args.requestType === 'searching' ||
//       args.requestType === 'grouping' || args.requestType === 'reorder' || args.requestType === 'columnstate'
//       || args.requestType === 'paging' || args.requestType === 'ungrouping') {
//       if (this.date3) {
//         const dateAction: number = new Date().getTime();
//         (document.getElementById('performanceTime1') as any).innerHTML = 'Action Time Taken: ' + (dateAction - this.date3) + 'ms';
//       }
//     }
//   }

//   public render() {
//     return (
//       <div className='control-pane'>
//         <div className='control-section'>
//         <span id="performanceTime">Initial Load Time Taken: 0 ms</span>
//         <span>   ----- </span>
//         <span id="performanceTime1"> Grid Action Taken Time : 0 ms</span>
//           <GridComponent dataSource={lazyLoadData} enableVirtualization={true} height={400} ref={g => this.grid = g} dataBound={this.dataBound.bind(this)}
//             created={this.created.bind(this)} actionBegin={this.actionBegin.bind(this)} actionComplete={this.actionComplete.bind(this)} allowFiltering={true}
//             allowSorting={true} allowGrouping={true} allowReordering={true} showColumnChooser={true} pageSettings={{ pageSize: 100 }} toolbar={this.toolbarOptions} >
//             <ColumnsDirective>
//               <ColumnDirective field='OrderID' headerText='Order ID' textAlign="Right" width='120' ></ColumnDirective>
//               <ColumnDirective field='ProductName' headerText='Product Name' width='160' ></ColumnDirective>
//               <ColumnDirective field='ProductID' headerText='Product ID' textAlign="Right" width='120' ></ColumnDirective>
//               <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' ></ColumnDirective>
//               <ColumnDirective field='CustomerName' headerText='Customer Name' width='160' ></ColumnDirective>
//             </ColumnsDirective>
//             <Inject services={[Page, Toolbar, Group, Sort, Filter, ColumnChooser, VirtualScroll, Reorder]} />
//           </GridComponent>
//         </div>
//       </div>
//     )
//   }
// };

/* tslint:disable */

import {   GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';

let lazyLoadData: any = [];
var customerid = ['VINET', 'TOMSP', 'HANAR', 'VICTE', 'SUPRD', 'HANAR', 'CHOPS', 'RICSU', 'WELLI', 'HILAA', 'ERNSH', 'CENTC',
  'OTTIK', 'QUEDE', 'RATTC', 'ERNSH', 'FOLKO', 'BLONP', 'WARTH', 'FRANK', 'GROSR', 'WHITC', 'WARTH', 'SPLIR', 'RATTC', 'QUICK', 'VINET',
  'HUNGO', 'PRINI', 'FRANK', 'OLDWO', 'MEREP', 'BONAP', 'SIMOB', 'FRANK', 'LEHMS', 'WHITC', 'QUICK', 'RATTC', 'FAMIA'];
var product = ['Chai', 'Chang', 'Aniseed Syrup', 'Chef Anton\'s Cajun Seasoning', 'Chef Anton\'s Gumbo Mix', 'Grandma\'s Boysenberry Spread',
  'Gudbrandsdalsost', 'Outback Lager', 'Flotemysost', 'Mozzarella di Giovanni', 'Röd Kaviar', 'Longlife Tofu', 'Rhönbräu Klosterbier', 'Lakkalikööri', 'Original Frankfurter grüne Soße'];
var customername = ['Maria', 'Ana Trujillo', 'Antonio Moreno', 'Thomas Hardy', 'Christina Berglund', 'Hanna Moos', 'Frédérique Citeaux', 'Martín Sommer', 'Laurence Lebihan', 'Elizabeth Lincoln',
  'Victoria Ashworth', 'Patricio Simpson', 'Francisco Chang', 'Yang Wang', 'Pedro Afonso', 'Elizabeth Brown', 'Sven Ottlieb', 'Janine Labrune', 'Ann Devon', 'Roland Mendel', 'Aria Cruz', 'Diego Roel',
  'Anabela Domingues', 'Helvetius Nagy', 'Palle Ibsen', 'Mary Saveley', 'Paul Henriot', 'Rita Müller', 'Pirkko Koskitalo', 'Paula Parente', 'Karl Jablonski', 'Matti Karttunen', 'Zbyszek Piestrzeniewicz'];
var customeraddress = ['507 - 20th Ave. E.\r\nApt. 2A', '908 W. Capital Way', '722 Moss Bay Blvd.', '4110 Old Redmond Rd.', '14 Garrett Hill', 'Coventry House\r\nMiner Rd.', 'Edgeham Hollow\r\nWinchester Way',
  '4726 - 11th Ave. N.E.', '7 Houndstooth Rd.', '59 rue de l\'Abbaye', 'Luisenstr. 48', '908 W. Capital Way', '722 Moss Bay Blvd.', '4110 Old Redmond Rd.', '14 Garrett Hill', 'Coventry House\r\nMiner Rd.', 'Edgeham Hollow\r\nWinchester Way',
  '7 Houndstooth Rd.', '2817 Milton Dr.', 'Kirchgasse 6', 'Sierras de Granada 9993', 'Mehrheimerstr. 369', 'Rua da Panificadora, 12', '2817 Milton Dr.', 'Mehrheimerstr. 369'];
var quantityperunit = ['10 boxes x 20 bags', '24 - 12 oz bottles', '12 - 550 ml bottles', '48 - 6 oz jars', '36 boxes', '12 - 8 oz jars', '12 - 1 lb pkgs.', '12 - 12 oz jars', '18 - 500 g pkgs.', '12 - 200 ml jars',
  '1 kg pkg.', '10 - 500 g pkgs.', '2 kg box', '40 - 100 g pkgs.', '24 - 250 ml bottles', '32 - 500 g boxes', '20 - 1 kg tins', '16 kg pkg.', '10 boxes x 12 pieces', '30 gift boxes', '24 pkgs. x 4 pieces', '24 - 500 g pkgs.', '12 - 250 g pkgs.',
  '12 - 355 ml cans', '20 - 450 g glasses', '100 - 250 g bags'];

var OrderID = 10248;

for (var i = 0; i < 20000; i++) {
  lazyLoadData.push({
      'OrderID': OrderID + i,
      'CustomerID': customerid[Math.floor(Math.random() * customerid.length)],
      'CustomerName': customername[Math.floor(Math.random() * customername.length)],
      'CustomerAddress': customeraddress[Math.floor(Math.random() * customeraddress.length)],
      'ProductName': product[Math.floor(Math.random() * product.length)],
      'ProductID': i,
      'Quantity': quantityperunit[Math.floor(Math.random() * quantityperunit.length)]
  });
}


export default class App extends React.Component<{}, {}>{

  public date1: number;
  public date2: number;
  public date3: number;
  public flag: boolean = true;
  public grid: GridComponent | null;
  public toolbarOptions: any = ['Search', 'ColumnChooser'];
  public dataBound() {
    if (this.flag && this.date1) {
      this.date2 = new Date().getTime();
      (document.getElementById('performanceTime') as any).innerHTML = 'Time Taken: ' + (this.date2 - this.date1) + 'ms';
      this.flag = false;
    }
  }

  public created() {
    this.date1 = new Date().getTime();
  }

  public actionBegin(args: any) {
    if (args.requestType === 'sorting' || args.requestType === 'filtering' || args.requestType === 'searching' ||
      args.requestType === 'grouping' || args.requestType === 'reorder' || args.requestType == 'columnstate'
      || args.requestType === 'paging' || args.requestType === 'ungrouping') {
      this.date3 = new Date().getTime();
    }
  }

  public actionComplete(args: any) {
    if (args.requestType === 'sorting' || args.requestType === 'filtering' || args.requestType === 'searching' ||
      args.requestType === 'grouping' || args.requestType === 'reorder' || args.requestType === 'columnstate'
      || args.requestType === 'paging' || args.requestType === 'ungrouping') {
      if (this.date3) {
        const dateAction: number = new Date().getTime();
        (document.getElementById('performanceTime1') as any).innerHTML = 'Action Time Taken: ' + (dateAction - this.date3) + 'ms';
      }
    }
  }

  public renderGrid() {
    if ((document.getElementById('grid')  as HTMLElement).classList.contains('e-grid')) {
        let gridObj: GridComponent =(document.querySelector('#grid') as any).ej2_instances[0] as GridComponent;
        gridObj.dataSource = lazyLoadData;
        gridObj.dataBind();
    }
    else {
        let gridObj: GridComponent = new GridComponent({
            dataSource: lazyLoadData,
            height: 505,
            width: 'auto',
            allowPaging: true,
            editSettings: { allowEditing: true, allowDeleting: true, mode: 'Normal', newRowPosition: 'Top' },
            toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Print', 'Search', 'ColumnChooser'],
            pageSettings: { pageSize: 100 },
            allowFiltering: true,
            allowSorting: true,
            filterSettings: { type: 'Excel' },
            allowGrouping: true,
            allowReordering: true,
            columns: [
              { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 120 },
                { field: 'ProductName', headerText: 'Product Name', width: 160 },
                { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 120 },
                { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
                { field: 'CustomerName', headerText: 'Customer Name', width: 160 }
            ]
        });
        gridObj.appendTo(document.querySelector('#grid') as HTMLElement);
    }
}

public destroyGrid() {
    let gridObj: Record<string, any>[] = (document.querySelector('#grid') as any).ej2_instances;
    if (gridObj && gridObj.length > 0 && !gridObj[0].isDestroyed) {
        gridObj[0].destroy();
    }


}

  public render() {
    return (
      <div className='control-pane'>
        <div className='control-section'>
        <span id="performanceTime">Initial Load Time Taken: 0 ms</span>
        <span>   ----- </span>
        <span id="performanceTime1"> Grid Action Taken Time : 0 ms</span>
        <button onClick={this.renderGrid}>renderGrid</button>
        <button onClick={this.destroyGrid}>destroyGrid</button>
        <div id="grid"></div>
          {/* <GridComponent dataSource={lazyLoadData} enableVirtualization={true} height={400} ref={g => this.grid = g} dataBound={this.dataBound.bind(this)}
            created={this.created.bind(this)} actionBegin={this.actionBegin.bind(this)} actionComplete={this.actionComplete.bind(this)} allowFiltering={true}
            allowSorting={true} allowGrouping={true} allowReordering={true} showColumnChooser={true} pageSettings={{ pageSize: 100 }} toolbar={this.toolbarOptions} >
            <ColumnsDirective>
              <ColumnDirective field='OrderID' headerText='Order ID' textAlign="Right" width='120' ></ColumnDirective>
              <ColumnDirective field='ProductName' headerText='Product Name' width='160' ></ColumnDirective>
              <ColumnDirective field='ProductID' headerText='Product ID' textAlign="Right" width='120' ></ColumnDirective>
              <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' ></ColumnDirective>
              <ColumnDirective field='CustomerName' headerText='Customer Name' width='160' ></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Page, Toolbar, Group, Sort, Filter, ColumnChooser, VirtualScroll, Reorder]} />
          </GridComponent> */}
        </div>
      </div>
    )
  }
};