<template>
<div id="app">
<button id='render' @click="flag = true">renderGrid</button>
<button id='destroy' @click="flag = !flag">destroyGrid</button>
<span id="performanceTime">Initial Load Time Taken: 0 ms</span>
<span id="performanceTime1"> Grid Action Taken Time : 0 ms</span>
    <ejs-grid :dataSource='data' :toolbar='toolbar' :enableVirtualization='true' height='400px' :allowSorting='true' 
    :allowGrouping='true' :allowFiltering='true' :pageSettings='initialPage' :showColumnChooser='true' :allowReordering='true'
    :dataBound='dataBound' :actionBegin='actionBegin' :actionComplete='actionComplete' :created='created' v-if="flag">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign= 'Right' width='120'></e-column>
        <e-column field='ProductName' headerText='Product Name' width='160'></e-column>
        <e-column field='ProductID' headerText='Product ID' textAlign= 'Right width='120'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width='120'></e-column>
        <e-column field='CustomerName' headerText='Customer Name' width='160'></e-column>
       </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Group, Sort, Filter, ColumnChooser, VirtualScroll, Reorder } from "@syncfusion/ej2-vue-grids";;
import { data } from './data.js';

Vue.use(GridPlugin);


let elem;
let datePickerObj;

export default {
  data() {
return {
  data: data,
  flag: true, 
  date1: 0, 
  date2: 0, 
  date3: 0, 
  toolbar: ['Search', 'ColumnChooser'],
  initialPage: { pageSize: 100 },

};
  },
  provide: {
grid: [Page, Toolbar, Group, Sort, Filter, ColumnChooser, VirtualScroll, Reorder]
  },
   methods: {
     dataBound: function() {
      if (this.flag && this.date1) {
        this.date2 = new Date().getTime();
        document.getElementById('performanceTime').innerHTML = 'Time Taken: ' + (this.date2 - this.date1) + 'ms';
        // this.flag = false;
      }
     },
     created: function() {
       this.date1 = new Date().getTime();
     },
     actionBegin: function(args) {
        if (args.requestType === 'sorting' || args.requestType === 'filtering' || args.requestType === 'searching' ||
           args.requestType === 'grouping' || args.requestType === 'reorder' || args.requestType == 'columnstate' ||
           args.requestType === 'paging' || args.requestType === 'ungrouping') {
              this.date3 = new Date().getTime();
        }
     },
     actionComplete: function(args) {
         if (args.requestType === 'sorting' || args.requestType === 'filtering' || args.requestType === 'searching' ||
            args.requestType === 'grouping' || args.requestType === 'reorder' || args.requestType === 'columnstate' ||
            args.requestType === 'paging' || args.requestType === 'ungrouping') {
              if (this.date3) {
                var dateAction = new Date().getTime();
                document.getElementById('performanceTime1').innerHTML = 'Action Time Taken: ' + (dateAction - this.date3) + 'ms';
              }
          }
     },
  }
  
}
</script>
<style>
@import "https://cdn.syncfusion.com/ej2/material.css";
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>