import {
    enableRipple,
    closest,
    EventHandler,
    L10n,
    isNullOrUndefined,
} from "@syncfusion/ej2-base";
enableRipple(true);

import { Grid } from "./src/grid/base/grid";
import { VirtualScroll } from "./src/grid/actions/virtual-scroll";
import { InfiniteScroll } from "./src/grid/actions/infinite-scroll";
import { Page } from "./src/grid/actions/page";
import { Group } from "./src/grid/actions/group";
// import {  Selection, Freeze, Resize } from '@syncfusion/ej2-grids';
import { Selection } from "./src/grid/actions/selection";
import { Filter } from "./src/grid/filter";
import { Sort } from "./src/grid/sort";
import { DetailRow } from "./src/grid/actions/detail-row";
import { Reorder } from "./src/grid/actions/reorder";
import { Toolbar } from "./src/grid/actions/toolbar";
import {
    Query,
    DataManager,
    ODataV4Adaptor,
    ODataAdaptor,
    WebApiAdaptor,
    ReturnOption,
    UrlAdaptor,
} from "@syncfusion/ej2-data";
// import { customerData, data } from './spec/grid/base/datasource.spec';
import { Freeze } from "./src/grid/actions/freeze";
import { Edit } from "./src/grid/actions/edit";
import { ColumnMenu } from "./src/grid/actions/column-menu";
import { CheckBox } from "@syncfusion/ej2-buttons";
import { CommandColumn } from "./src/grid/command-column";
import { Column } from "./src/grid/models/column";
import { Button } from "@syncfusion/ej2-buttons";
//import { orderDataSource,categoryData } from './datasource';
//import { EditEventArgs, ICellFormatter } from './src';
//import { MultiSelect,MultiSelectChangeEventArgs } from '@syncfusion/ej2-dropdowns';
//import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';
//import { Toolbar } from './src';
//import { InPlaceEditor } from "@syncfusion/ej2-inplace-editor";
// import { MultiSelectEditCell } from './src/grid/renderer/multiselect-edit-cell';
import {
    ICellFormatter,
    ColumnMenuClickEventArgs,
    IRow,
    PageEventArgs,
} from "./src/grid/base/interface";
import { Resize } from "./src/grid/actions/resize";
// import { Column } from './src/grid/models/column';
//import { MaskedTextBoxCellEdit } from './src/grid/renderer/inputmask-edit-cell';
//import { ColorPickerEditCell } from './src/grid/renderer/colorpicker-edit-cell';
//import { DateRangePickerEditCell } from './src/grid/renderer/daterangepicker-edit-cell';
// import { AutoCompleteEditCell } from './src/grid/renderer/autocomplete-edit-cell';
// import { ServiceLocator } from './src/grid/services/service-locator';
// import { IGrid  } from './src/grid/base/interface';
// import { ToggleEditCell } from './src/grid/renderer/toggleswitch-edit-cell';
// import { ComboboxEditCell } from './src/grid/renderer/combobox-edit-cell';
// import { TimePickerEditCell } from './src/grid/renderer/timepicker-edit-cell';
// //import { filterAfterOpen, Filter } from './src';
// //Edit.addEditors({'multiselect':MultiSelectEdit});
import { Aggregate } from "./src/grid/actions/aggregate";
import { NumericTextBox } from "@syncfusion/ej2-inputs";
import {
    createLazyLoadData,
    hierarchyOrderdata,
    inventoryData,
    orderData,
    orderDetails,
    productData,
    getTradeData,
    data,
} from "./datasource";
import { infiniteGroupData } from "./spec/grid/base/datasource.spec";
//import { Button } from '@syncfusion/ej2-buttons';
import {
    virtualData,
    dataSource,
    categoryData,
    employeeData,
    customerData,
    lazyLoadData,
} from "./datasource";
import { ForeignKey } from "./src/grid/actions/foreign-key";
import { AutoComplete, ChangeEventArgs } from "@syncfusion/ej2-dropdowns";
import { createElement } from "@syncfusion/ej2-base";
import { foreigndata, normalData } from "./spec/grid/base/datasource.spec";
import { ColumnChooser } from "./src/grid/actions/column-chooser";
import { LazyLoadGroup } from "./src/grid/actions/lazy-load-group";
import { Search } from "./src/grid/actions/search";
import { Dialog } from "@syncfusion/ej2-popups";
import { RowDD } from "./src/grid/actions/row-reorder";
import { DropDownList } from "@syncfusion/ej2-dropdowns";

Grid.Inject(
    VirtualScroll,
    InfiniteScroll,
    Filter,
    Edit,
    Page,
    Aggregate,
    Group,
    Sort,
    ForeignKey,
    Toolbar,
    Freeze,
    Resize,
    ColumnChooser,
    LazyLoadGroup,
    Selection,
    Search,
    RowDD,
    DetailRow
);

// let date1: number; let date2: number; let flag: boolean = true; let genarateData: Button = new Button({}, '#genarate');
// genarateData.element.onclick = () => {
//     if (!virtualData.length) {
//         show(); dataSource(); date1 = new Date().getTime(); grid.dataSource = virtualData;
//     }
// };
// (<IWindow>window).viewCollection=(args: any)=>{
//     console.log(args);
// }

// class SerialNoAdaptor extends ODataAdaptor {
//     processResponse(): Object {
//         let i: number = 0;
//         // calling base class processResponse function
//         let original: {result: Object[], count: number} = super.processResponse.apply(this, arguments);
//         // adding serial number
//         original.result.forEach((item: Object) => item['Sno'] = ++i);
//         return { result: original.result, count: original.count };
//     }
// }

// let data: DataManager = new DataManager({
//     url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders/?$top=7',
//     adaptor: new SerialNoAdaptor
// });

let dataManger: Object = new DataManager({
    url: "https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders",
    adaptor: new ODataAdaptor(),
    crossDomain: true,
});
let dataManger2: Object = new DataManager({
    url: "https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Customers",
    adaptor: new ODataAdaptor(),
    crossDomain: true,
});

let urlapi: DataManager = new DataManager({
    url: 'http://localhost:62869/api/UrlDataSource',
    // url: "https://ej2services.syncfusion.com/production/web-services/api/UrlDataSource",
    // url: "https://ej2services.syncfusion.com/development/web-services/api/UrlDataSource",
    adaptor: new UrlAdaptor()
});

L10n.load({
    "de-DE": {
        grid: {
            EmptyRecord: "Keine Aufzeichnungen angezeigt",
            GroupDropArea:
                "Ziehen Sie einen Spaltenkopf hier, um die Gruppe ihre Spalte",
            UnGroup: "Klicken Sie hier, um die Gruppierung aufheben",
            EmptyDataSourceError:
                "DataSource darf bei der Erstauslastung nicht leer sein, da Spalten aus der dataSource im AutoGenerate Spaltenraster",
            Item: "Artikel",
            Items: "Artikel",
        },
        // 'pager': {
        //     'currentPageInfo': '{0} von {1} Seiten',
        //     'totalItemsInfo': '({0} Beiträge)',
        //     'firstPageTooltip': 'Zur ersten Seite',
        //     'lastPageTooltip': 'Zur letzten Seite',
        //     'nextPageTooltip': 'Zur nächsten Seite',
        //     'previousPageTooltip': 'Zurück zur letzten Seit',
        //     'nextPagerTooltip': 'Zum nächsten Pager',
        //     'previousPagerTooltip': 'Zum vorherigen Pager'
        // }
    },
});

// lazy load group with infinte scroll feature
createLazyLoadData();

// 1K data customize lazy load data push
function customizeLazyLoadData() {
    let customerid: string[] = [
        "VINET",
        "TOMSP",
        "HANAR",
        "VICTE",
        "SUPRD",
        "HANAR",
        "CHOPS",
        "RICSU",
        "WELLI",
        "HILAA",
        "ERNSH",
        "CENTC",
        "OTTIK",
        "QUEDE",
        "RATTC",
        "ERNSH",
        "FOLKO",
        "BLONP",
        "WARTH",
        "FRANK",
        "GROSR",
        "WHITC",
        "WARTH",
        "SPLIR",
        "RATTC",
        "QUICK",
        "VINET",
        "MAGAA",
        "TORTU",
        "MORGK",
        "BERGS",
        "LEHMS",
        "BERGS",
        "ROMEY",
        "ROMEY",
        "LILAS",
        "LEHMS",
        "QUICK",
        "QUICK",
        "RICAR",
        "REGGC",
        "BSBEV",
        "COMMI",
        "QUEDE",
        "TRADH",
        "TORTU",
        "RATTC",
        "VINET",
        "LILAS",
        "BLONP",
        "HUNGO",
        "RICAR",
        "MAGAA",
        "WANDK",
        "SUPRD",
        "GODOS",
        "TORTU",
        "OLDWO",
        "ROMEY",
        "LONEP",
        "ANATR",
        "HUNGO",
        "THEBI",
        "DUMON",
        "WANDK",
        "QUICK",
        "RATTC",
        "ISLAT",
        "RATTC",
        "LONEP",
        "ISLAT",
        "TORTU",
        "WARTH",
        "ISLAT",
        "PERIC",
        "KOENE",
        "SAVEA",
        "KOENE",
        "BOLID",
        "FOLKO",
        "FURIB",
        "SPLIR",
        "LILAS",
        "BONAP",
        "MEREP",
        "WARTH",
        "VICTE",
        "HUNGO",
        "PRINI",
        "FRANK",
        "OLDWO",
        "MEREP",
        "BONAP",
        "SIMOB",
        "FRANK",
        "LEHMS",
        "WHITC",
        "QUICK",
        "RATTC",
        "FAMIA",
    ];

    let product: string[] = [
        "Chai",
        "Chang",
        "Aniseed Syrup",
        "Chef Anton's Cajun Seasoning",
        "Chef Anton's Gumbo Mix",
        "Grandma's Boysenberry Spread",
        "Uncle Bob's Organic Dried Pears",
        "Northwoods Cranberry Sauce",
        "Mishi Kobe Niku",
        "Ikura",
        "Queso Cabrales",
        "Queso Manchego La Pastora",
        "Konbu",
        "Tofu",
        "Genen Shouyu",
        "Pavlova",
        "Alice Mutton",
        "Carnarvon Tigers",
        "Teatime Chocolate Biscuits",
        "Sir Rodney's Marmalade",
        "Sir Rodney's Scones",
        "Gustaf's Knäckebröd",
        "Tunnbröd",
        "Guaraná Fantástica",
        "NuNuCa Nuß-Nougat-Creme",
        "Gumbär Gummibärchen",
        "Schoggi Schokolade",
        "Rössle Sauerkraut",
        "Thüringer Rostbratwurst",
        "Nord-Ost Matjeshering",
        "Gorgonzola Telino",
        "Mascarpone Fabioli",
        "Geitost",
        "Sasquatch Ale",
        "Steeleye Stout",
        "Inlagd Sill",
        "Gravad lax",
        "Côte de Blaye",
        "Chartreuse verte",
        "Boston Crab Meat",
        "Jack's New England Clam Chowder",
        "Singaporean Hokkien Fried Mee",
        "Ipoh Coffee",
        "Gula Malacca",
        "Rogede sild",
        "Spegesild",
        "Zaanse koeken",
        "Chocolade",
        "Maxilaku",
        "Valkoinen suklaa",
        "Manjimup Dried Apples",
        "Filo Mix",
        "Perth Pasties",
        "Tourtière",
        "Pâté chinois",
        "Gnocchi di nonna Alice",
        "Ravioli Angelo",
        "Escargots de Bourgogne",
        "Raclette Courdavault",
        "Camembert Pierrot",
        "Sirop d'érable",
        "Tarte au sucre",
        "Vegie-spread",
        "Wimmers gute Semmelknödel",
        "Louisiana Fiery Hot Pepper Sauce",
        "Louisiana Hot Spiced Okra",
        "Laughing Lumberjack Lager",
        "Scottish Longbreads",
        "Gudbrandsdalsost",
        "Outback Lager",
        "Flotemysost",
        "Mozzarella di Giovanni",
        "Röd Kaviar",
        "Longlife Tofu",
        "Rhönbräu Klosterbier",
        "Lakkalikööri",
        "Original Frankfurter grüne Soße",
    ];

    let customername: string[] = [
        "Maria",
        "Ana Trujillo",
        "Antonio Moreno",
        "Thomas Hardy",
        "Christina Berglund",
        "Hanna Moos",
        "Frédérique Citeaux",
        "Martín Sommer",
        "Laurence Lebihan",
        "Elizabeth Lincoln",
        "Victoria Ashworth",
        "Patricio Simpson",
        "Francisco Chang",
        "Yang Wang",
        "Pedro Afonso",
        "Elizabeth Brown",
        "Sven Ottlieb",
        "Janine Labrune",
        "Ann Devon",
        "Roland Mendel",
        "Aria Cruz",
        "Diego Roel",
        "Martine Rancé",
        "Maria Larsson",
        "Peter Franken",
        "Carine Schmitt",
        "Paolo Accorti",
        "Lino Rodriguez",
        "Eduardo Saavedra",
        "José Pedro Freyre",
        "André Fonseca",
        "Howard Snyder",
        "Manuel Pereira",
        "Mario Pontes",
        "Carlos Hernández",
        "Yoshi Latimer",
        "Patricia McKenna",
        "Helen Bennett",
        "Philip Cramer",
        "Daniel Tonini",
        "Annette Roulet",
        "Yoshi Tannamuri",
        "John Steel",
        "Renate Messner",
        "Jaime Yorres",
        "Carlos González",
        "Felipe Izquierdo",
        "Fran Wilson",
        "Giovanni Rovelli",
        "Catherine Dewey",
        "Jean Fresnière",
        "Alexander Feuer",
        "Simon Crowther",
        "Yvonne Moncada",
        "Rene Phillips",
        "Henriette Pfalzheim",
        "Marie Bertrand",
        "Guillermo Fernández",
        "Georg Pipps",
        "Isabel de Castro",
        "Bernardo Batista",
        "Lúcia Carvalho",
        "Horst Kloss",
        "Sergio Gutiérrez",
        "Paula Wilson",
        "Maurizio Moroni",
        "Janete Limeira",
        "Michael Holz",
        "Alejandra Camino",
        "Jonas Bergulfsen",
        "Jose Pavarotti",
        "Hari Kumar",
        "Jytte Petersen",
        "Dominique Perrier",
        "Art Braunschweiger",
        "Pascale Cartrain",
        "Liz Nixon",
        "Liu Wong",
        "Karin Josephs",
        "Miguel Angel Paolino",
        "Anabela Domingues",
        "Helvetius Nagy",
        "Palle Ibsen",
        "Mary Saveley",
        "Paul Henriot",
        "Rita Müller",
        "Pirkko Koskitalo",
        "Paula Parente",
        "Karl Jablonski",
        "Matti Karttunen",
        "Zbyszek Piestrzeniewicz",
    ];

    let customeraddress: string[] = [
        "507 - 20th Ave. E.\r\nApt. 2A",
        "908 W. Capital Way",
        "722 Moss Bay Blvd.",
        "4110 Old Redmond Rd.",
        "14 Garrett Hill",
        "Coventry House\r\nMiner Rd.",
        "Edgeham Hollow\r\nWinchester Way",
        "4726 - 11th Ave. N.E.",
        "7 Houndstooth Rd.",
        "59 rue de l'Abbaye",
        "Luisenstr. 48",
        "908 W. Capital Way",
        "722 Moss Bay Blvd.",
        "4110 Old Redmond Rd.",
        "14 Garrett Hill",
        "Coventry House\r\nMiner Rd.",
        "Edgeham Hollow\r\nWinchester Way",
        "7 Houndstooth Rd.",
        "2817 Milton Dr.",
        "Kirchgasse 6",
        "Sierras de Granada 9993",
        "Mehrheimerstr. 369",
        "Rua da Panificadora, 12",
        "2817 Milton Dr.",
        "Mehrheimerstr. 369",
    ];

    let quantityperunit: string[] = [
        "10 boxes x 20 bags",
        "24 - 12 oz bottles",
        "12 - 550 ml bottles",
        "48 - 6 oz jars",
        "36 boxes",
        "12 - 8 oz jars",
        "12 - 1 lb pkgs.",
        "12 - 12 oz jars",
        "18 - 500 g pkgs.",
        "12 - 200 ml jars",
        "1 kg pkg.",
        "10 - 500 g pkgs.",
        "2 kg box",
        "40 - 100 g pkgs.",
        "24 - 250 ml bottles",
        "32 - 500 g boxes",
        "20 - 1 kg tins",
        "16 kg pkg.",
        "10 boxes x 12 pieces",
        "30 gift boxes",
        "24 pkgs. x 4 pieces",
        "24 - 500 g pkgs.",
        "12 - 250 g pkgs.",
        "12 - 355 ml cans",
        "20 - 450 g glasses",
        "100 - 250 g bags",
    ];

    let orderID: number = 10248;
    for (let i: number = 20000; i < 100000; i++) {
        lazyLoadData.push({
            OrderID: orderID + i,
            CustomerID: customerid[Math.floor(Math.random() * customerid.length)],
            CustomerName:
                customername[Math.floor(Math.random() * customername.length)],
            CustomerAddress:
                customeraddress[Math.floor(Math.random() * customeraddress.length)],
            ProductName: product[Math.floor(Math.random() * product.length)],
            ProductID: i,
            Quantity:
                quantityperunit[Math.floor(Math.random() * quantityperunit.length)],
        });
    }
}

// let genarateData: Button = new Button({}, "#genarate");
// genarateData.element.onclick = () => {
//     debugger;
//     if (lazyLoadData.length <= 20000) {
//         customizeLazyLoadData();
//     } else {
//         return;
//     }
//     if (lazyLoadData.length === 100000) {
//         grid.dataSource = lazyLoadData;
//     }
// };

// infinite scroll data
// dataSource();

/**
 * Grid Overview sample
 */
let dReady: boolean = false;
let dtTime: boolean = false;
let isDataBound: boolean = false;
let isDataChanged: boolean = true;
let intervalFun: any;
let clrIntervalFun: any;
let clrIntervalFun1: any;
let clrIntervalFun2: any;
let ddObj: DropDownList;
let dropSlectedIndex: number = null;
let stTime: any;
stTime = performance.now();

function complete(args: any): void {
    if (args.requestType === "filterchoicerequest") {
        if (
            args.filterModel.options.field === "Trustworthiness" ||
            args.filterModel.options.field === "Rating" ||
            args.filterModel.options.field === "Status"
        ) {
            let span: Element =
                args.filterModel.dialogObj.element.querySelectorAll(".e-selectall")[0];
            if (!isNullOrUndefined(span)) {
                closest(span, ".e-ftrchk").classList.add("e-hide");
            }
        }
    }
}
function queryCellInfo(args: any): void {
    if (args.column.field === "Employees") {
        if (args.data.EmployeeImg === "usermale") {
            let img: HTMLElement = document.createElement("img");
            img.style.height = "27px";
            img.style.position = "relative";
            img.style.left = "-20px"
            img.setAttribute("src", "./icons/usermale.png");
            args.cell.querySelector(".e-userimg").classList.add("sf-icon-Male");
            args.cell.querySelector(".e-userimg.sf-icon-Male").append(img);
        } else {
            let img: HTMLElement = document.createElement("img");
            img.style.height = "27px";
            img.style.position = "relative";
            img.style.left = "-20px"
            img.setAttribute("src", "./icons/userfemale.png");
            args.cell.querySelector(".e-userimg").classList.add("sf-icon-FeMale");
            args.cell.querySelector(".e-userimg.sf-icon-FeMale").append(img);
        }
    }
    if (args.column.field === "Status") {
        if (args.cell.textContent === "Active") {
            args.cell.querySelector(".statustxt").classList.add("e-activecolor");
            args.cell.querySelector(".statustemp").classList.add("e-activecolor");
        }
        if (args.cell.textContent === "Inactive") {
            args.cell.querySelector(".statustxt").classList.add("e-inactivecolor");
            args.cell.querySelector(".statustemp").classList.add("e-inactivecolor");
        }
    }
    if (args.column.field === "Rating") {
        if (args.column.field === "Rating") {
            for (let i: number = 0; i < args.data.Rating; i++) {
                args.cell.querySelectorAll("span")[i].classList.add("checked");
            }
        }
    }
    if (args.column.field === "Software") {
        if (args.data.Software <= 20) {
            args.data.Software = args.data.Software + 30;
        }
        args.cell.querySelector(".bar").style.width = args.data.Software + "%";
        args.cell.querySelector(".barlabel").textContent = args.data.Software + "%";
        if (args.data.Status === "Inactive") {
            args.cell.querySelector(".bar").classList.add("progressdisable");
        }
    }
}
function startTimer(args: any): void {
    clearTimeout(clrIntervalFun);
    clearInterval(intervalFun);
    dtTime = true;
}

(<{ trustTemp?: Function }>window).trustTemp = (e: any): any => {
    debugger;
    if (e.Trustworthiness === "Select All") {
        return "";
    }
    /* tslint:disable-next-line:max-line-length */
    return (
        '<img style="width: 31px; height: 24px" src="./icons/' +
        e.Trustworthiness +
        '.png" /> <span id="Trusttext">' +
        e.Trustworthiness +
        "</span>"
    );
};

(<{ ratingDetail?: Function }>window).ratingDetail = (e: any): any => {
    let grid: any = (<any>document.querySelector(".e-grid")).ej2_instances[0];
    let div: Element = document.createElement("div");
    div.className = "rating";
    let span: Element;
    if (e.Rating === "Select All") {
        return "";
    }
    for (let i: number = 0; i < 5; i++) {
        if (i < e.Rating) {
            span = document.createElement("span");
            span.className = "star checked";
            div.appendChild(span);
        } else {
            span = document.createElement("span");
            span.className = "star";
            div.appendChild(span);
        }
    }
    return div.outerHTML;
};

(<{ statusDetail?: Function }>window).statusDetail = (e: any): any => {
    let grid: any = (<any>document.querySelector(".e-grid")).ej2_instances[0];
    let div: Element = document.createElement("div");
    let span: Element;
    if (e.Status === "Select All") {
        return "Select All";
    }
    span = document.createElement("span");
    if (e.Status === "Active") {
        span.className = "statustxt e-activecolor";
        span.textContent = "Active";
        div.className = "statustemp e-activecolor";
    }
    if (e.Status === "Inactive") {
        span = document.createElement("span");
        span.className = "statustxt e-inactivecolor";
        span.textContent = "Inactive";
        div.className = "statustemp e-inactivecolor";
    }
    div.appendChild(span);
    return div.outerHTML;
};

let newRowPosition: { [key: string]: Object }[] = [
    { id: 'Top', newRowPosition: 'Top' },
    { id: 'Bottom', newRowPosition: 'Bottom' }
];

let autoComplete: AutoComplete;
let grid: Grid = new Grid({
    // high priority group caption 1st column template reported sample

    // dataSource: data,
    // allowGrouping: true,
    //   allowSorting: true,
    //   showColumnChooser: true,
    //   toolbar: ['ColumnChooser'],
    //   groupSettings: {
    //     showDropArea: true,
    //   },
    //   columns: [
    //     {
    //       field: 'OrderID',
    //       headerText: 'Order ID',
    //       textAlign: 'Left',
    //       width: 120,
    //     },
    //     { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    //     { field: 'Freight', headerText: 'Freight', width: 150, format: 'C2' },
    //     { field: 'ShipCountry', headerText: 'Ship Name', width: 150 },
    //   ],
    //   height: 268,
    //   aggregates: [
    //     {
    //       columns: [
    //         {
    //           type: 'Custom',
    //           customAggregate: () => 'xx',
    //           columnName: 'OrderID',
    //           field: 'OrderID',
    //           groupCaptionTemplate: 'XX: ${Custom}',
    //         },
    //         {
    //           type: 'Custom',
    //           customAggregate: () => 'zz',
    //           columnName: 'ShipCountry',
    //           field: 'ShipCountry',
    //           groupCaptionTemplate: 'ZZ: ${Custom} vasanth',
    //         },
    //       ],
    //     },
    //   ],

    // high priority group caption 1st column template with lazy loading

    // dataSource: data,
    // allowGrouping: true,
    // showColumnChooser: true,
    // toolbar: ['ColumnChooser'],
    // groupSettings: {
    //   showDropArea: true //, enableLazyLoading: true, columns: ['OrderID']
    // },
    // columns: [

    //     { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    //     { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    //     { field: 'OrderDate', headerText: 'Order Date', width: 120, format: 'yMd' },
    //     { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
    //     { field: 'Freight', headerText: 'Freight', width: 150, format: 'C2' },
    // ],
    // height: 290,
    // aggregates: [{
    //     columns: [{
    //         type: 'Sum',
    //         field: 'Freight',
    //         format: 'C2',
    //         groupFooterTemplate: 'Sum: ${Sum}'
    //     }]
    // },
    // {
    //     columns: [{
    //         type: 'Max',
    //         field: 'Freight',
    //         format: 'C2',
    //         groupCaptionTemplate: 'Max: ${Max}'
    //     }]
    // }]

    // high priority group caption 1st column template

    // dataSource: infiniteGroupData,
    //                 allowGrouping: true,
    //                 // enableInfiniteScrolling: true,
    //                 groupSettings: { showDropArea: true }, //  columns: ['ProductName'],
    //                 height: 400,
    //                 columns: [
    //                     { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 125, isPrimaryKey: true },
    //                     { field: 'CustomerID', headerText: 'Customer ID', width: 125, editType: 'dropdownedit' },
    //                     { field: 'CustomerName', headerText: 'Customer Name', width: 180, editType: 'dropdownedit' },
    //                     { field: 'CustomerAddress', headerText: 'Customer Address', width: 110 },
    //                     { field: 'ProductName', headerText: 'Product Name', width: 110 }
    //                 ],
    //                 aggregates: [{
    //                     columns: [{
    //                         type: 'Sum',
    //                         field: 'OrderID',
    //                         groupCaptionTemplate: 'Total Order: ${Sum}'
    //                     },
    //                     {
    //                         type: 'Count',
    //                         field: 'CustomerID',
    //                         groupCaptionTemplate: 'Maximum: ${Count}'
    //                     }]
    //                 }]

    // improvement multiple row adding validation and escape validation

    // dataSource: data,
    // editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Batch'},// , newRowPosition: 'Bottom'
    // toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', {
    //     text: 'Add 5 Rows',
    //     tooltipText: 'Add 5 Rows',
    //     prefixIcon: 'e-add',
    //     id: 'add5Rows',
    //   }],
    // toolbarClick: toolbarClick,
    // columns: [
    //     // { field: 'ShipCountry', headerText: 'Ship Country', width: 150, validationRules: { required: true, minLength: 3 } },
    //     // { field: 'Freight', headerText: 'Freight', width: 150, format: 'C2', },// minValue: 50, maxValue: 200 validationRules: { required: true }
    //     // { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, validationRules: { required: true, number: true } },
    //     // { field: 'CustomerID', headerText: 'Customer ID', width: 150,  },// , validationRules: { required: true } //validationRules: {minLength: 3}
    //     // { field: 'OrderDate', headerText: 'Order Date', width: 120, format: {type: 'datetime', format: 'y/M/d hh:mm a'}, validationRules: { required: true, date: true }, editType: "dateTimePickerEdit" },

    // ],
    // height: 300,

    // persist selection misbehave while sorting, filtering and searching actions

    // dataSource: data.slice(0, 100),
    // // allowPaging: true,
    // allowSorting: true,
    // // allowFiltering: true,
    // // allowFiltering: true,
    // enableVirtualization: true,
    // // allowPaging: true,
    // // toolbar: ['Search'],
    // // filterSettings: { type: "CheckBox" },
    // selectionSettings: { persistSelection: true },// , persistSelection: true
    // rowSelected: rowSelected,
    // columns: [
    //     { type: "checkbox", width: "60" },
    //     { field: "OrderID", isPrimaryKey: true, headerText: "Order ID", width: "110" },
    //     { field: "CustomerName", headerText: "Customer Name", width: "140" },
    //     // { field: "ShipName", headerText: "Ship Name", width: "180" },
    //     { field: "Freight", headerText: "Freight", width: "110" },
    //     { field: "OrderDate", headerText: "Order Date", width: "180", type: "date", format: "yMd" }
    // ],
    // height: 350,
    // width: 600,
    // pageSettings: {pageSize: 6}

    // breaking frozen grid render height setting

    // dataSource: data,
    // rowHeight: 30,
    //   allowResizing: true,
    //   height: 300,
    //   frozenColumns: 1,
    //   //   allowTextWrap: true,
    //   //   textWrapSettings: { wrapMode: 'Content' },
    //   columns: [
    //     {
    //       field: 'OrderID',
    //       headerText: 'Order ID',
    //       textAlign: 'Right',
    //       width: 120,
    //       minWidth: 10,
    //     },
    //     {
    //       headerText: 'Order Details',
    //       columns: [
    //         {
    //           field: 'OrderDate',
    //           headerText: 'Order Date',
    //           textAlign: 'Right',
    //           width: 135,
    //           format: 'yMd',
    //           minWidth: 10,
    //         },
    //         {
    //           field: 'Freight',
    //           headerText: 'Freight($)',
    //           textAlign: 'Right',
    //           width: 120,
    //           format: 'C2',
    //           minWidth: 10,
    //         },
    //       ],
    //     },
    //     {
    //       headerText: 'Ship Details',
    //       columns: [
    //         {
    //           field: 'ShippedDate',
    //           headerText: 'Shipped Date',
    //           textAlign: 'Right',
    //           width: 145,
    //           format: 'yMd',
    //           minWidth: 10,
    //         },
    //         {
    //           field: 'ShipCountry',
    //           headerText: 'Ship Country',
    //           width: 140,
    //           minWidth: 10,
    //         },
    //       ],
    //     },
    //   ],

    //Row height alignment

    // dataSource: employeeData,
    //   width: 'auto',
    //   frozenColumns: 1,
    //   rowHeight: 50,
    //   showColumnChooser: true,
    //   toolbar: ['ColumnChooser'],
    //   columns: [
    //     {
    //       field: 'EmployeeID',
    //       headerText: 'Employee ID',
    //       width: '125',
    //       textAlign: 'Right',
    //       showInColumnChooser: false,
    //     }, //, freeze: 'Right'
    //     {
    //       field: 'FirstName',
    //       headerText: 'Name',
    //       width: '120',
    //       template: '#template',
    //     },
    //     { field: 'Title', headerText: 'Title', width: '170' },
    //     {
    //       field: 'HireDate',
    //       headerText: 'Hire Date',
    //       width: '135',
    //       format: 'yMd',
    //       textAlign: 'Right',
    //     },
    //     {
    //       field: 'ReportsTo',
    //       headerText: 'Reports To',
    //       width: '120',
    //       textAlign: 'Right',
    //     },
    //   ],
    //   // dataBound: function () {
    //   //   grid.autoFitColumns([]);
    //   // },
    //   height: 500,

    // DOM Leak issue

    // dataSource: infiniteGroupData,
    // allowGrouping: true,
    // allowSorting: true,
    // // enableRtl: true,
    // groupSettings: { columns: ['CustomerID'] },// captionTemplate: '#captiontemplate',
    // height: 400,
    // columns: [
    //     { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 125, isPrimaryKey: true },
    //     { field: 'CustomerID', headerText: 'Customer ID', width: 125, editType: 'dropdownedit' },
    //     { field: 'CustomerName', headerText: 'Customer Name', width: 180, editType: 'dropdownedit' },
    //     { field: 'CustomerAddress', headerText: 'Customer Address', width: 110 },
    //     { field: 'ProductName', headerText: 'Product Name', width: 110 }
    // ],

    // Foreign Key Column

    // dataSource: orderDetails,
    //         allowPaging: true,
    //         allowSorting: true,
    //         allowFiltering: true,
    //         allowSelection: true,
    //         toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    //         filterSettings: { type: 'Menu' },
    //         editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    //         selectionSettings: { persistSelection: true, checkboxOnly: true },// , type: 'Multiple', checkboxOnly: true //2657 layout line edit input
    //         columns: [
    //             { type: "checkbox", width: "60" },
    //             {
    //                 field: 'OrderID', width: 120, headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right',
    //                 validationRules: { required: true, number: true }
    //             },
    //             {
    //                 field: 'CustomerID', foreignKeyField: 'CustomerID', foreignKeyValue: 'ContactName', dataSource: customerData,
    //                 width: 150, headerText: 'Customer Name', validationRules: { required: true }
    //             },
    //             {
    //                 field: 'Freight', textAlign: 'Right', width: 100, editType: 'numericedit', format: 'C2'
    //             },
    //             { field: 'ShipName', headerText: 'Ship Name', width: 170 },
    //             { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    //         ]

    // EJ2-32037 - testing-report

    // dataSource: data,
    //     editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
    //     toolbar:['Add','Delete','Edit'],
    //     allowRowDragAndDrop:true,
    //     columns: [
    //         { field: 'OrderID', headerText: 'Order ID', width: 120 },
    //         { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    //         { field: 'OrderDate', headerText: 'Order Date', width: 120, format: 'yMd' },
    //     ],
    //     height: 400,

    // EJ2- 18862 -testing report - resolved

    // dataSource: data,
    // 	allowGrouping: true,
    // 	groupSettings: { columns: ['CustomerID'] },
    //     // locale: 'de-DE',
    // 	created: function (args:any) {
    //         this.locale = 'de-DE';
    // 		// this.setProperties({ locale: 'de-DE' }, false);
    // 	},
    // 	columns: [
    // 		{ field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
    // 		{ field: 'CustomerID', headerText: 'Customer Name', width: 150 },
    // 		{ field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' }
    // 	],
    // 	height: 273

    //EJ2-36187 - testing report - resolved

    // dataSource: data,
    //     allowPaging: true,
    //     allowFiltering: true,
    //     // filterSettings: { type: 'Excel' },
    //     editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true,mode:'Batch'  },
    //     showColumnMenu: true,
    //     frozenColumns:3,
    //     columnMenuItems:[{text:'Toggle Freeze', id:'gridfreeze'}],
    //     pageSettings: { pageCount: 5, pageSize:10 },
    //         toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
    //     columns: [
    //         {
    //             field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Right',
    //             validationRules: { required: true, number: true }, width: 120
    //         },
    //         {
    //             field: 'CustomerID', headerText: 'Customer ID',
    //             validationRules: { required: true }, width: 140
    //         },
    //          {
    //             field: 'OrderDate', headerText: 'Order Date', editType: 'datepickeredit', format: 'yMd',
    //             width: 170, allowEditing: false
    //         },
    //         {
    //             field: 'OrderDate', headerText: 'Order Date', editType: 'datepickeredit', format: 'yMd',
    //             width: 170, allowEditing: false
    //         },
    //         {
    //             field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150,
    //             edit: { params: { popupHeight: '300px' } }
    //         },
    //     {

    //     }],

    // dialog selected data delete issue

    //     dataSource: orderData,
    //   allowPaging: true,
    //   toolbar: ['Add', 'Delete', 'Cancel', 'Update'],
    //   columns: [
    //     {
    //       field: 'OrderID',
    //       headerText: 'Order ID',
    //       width: 120,
    //       textAlign: 'Right',
    //     },
    //     { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
    //     {
    //       field: 'OrderDate',
    //       headerText: 'Order Date',
    //       width: 130,
    //       format: 'yMd',
    //       textAlign: 'Right',
    //     },
    //     { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
    //     {
    //       field: 'ShippedDate',
    //       headerText: 'Shipped Date',
    //       width: 130,
    //       format: 'yMd',
    //       textAlign: 'Right',
    //     },
    //     { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
    //   ],
    //   pageSettings: { pageCount: 5 },
    //   editSettings: {
    //     allowEditing: true,
    //     allowAdding: true,
    //     allowDeleting: true,
    //   },
    //   height: 700

    // Lazy Load Group with infinite scroll feature

    // // local data
    // dataSource: lazyLoadData,

    // // remote data
    // // dataSource: dataManger,
    // // allowPaging: true,
    
    // enableInfiniteScrolling: true,
    // height: 410,
    // allowGrouping: true,
    // allowFiltering: true,
    // rowHeight: 40,
    // allowSorting: true,
    // filterSettings: { type: "CheckBox" },
    // // infiniteScrollSettings: { initialBlocks: 5 },// enableCache: true // initialBlocks: 5,
    // editSettings: {
    //     allowAdding: true,
    //     allowDeleting: true,
    //     allowEditing: true,
    //     newRowPosition: "Top",
    // },
    // toolbar: ["Add", "Edit", "Delete", "Update", "Cancel", "Search"],
    // actionFailure: function (args: any) {
    //     debugger;
    // },
    // dataBound: function (args: any) {
    //     debugger;
    // },
    // beforeDataBound: function (args: any) {
    //     debugger;
    // },
    // actionComplete: function (args: any) {
    //     debugger;
    //     if (args.action === "add" && args.requestType === "save") {
    //         args.data.ProductName = "";
    //         args.data.CustomerName = "vasanth";
    //     }
    // },
    // // local data
    // groupSettings: {
    //     enableLazyLoading: true,
    //     columns: ["ProductName", "CustomerName"],
    // }, // enableLazyLoading: true,

    // // remote data
    // // groupSettings: { enableLazyLoading: true, columns: ['ShipName', 'ShipCity'] },// enableLazyLoading: true,

    // columns: [
    //     {
    //         field: "OrderID",
    //         headerText: "Order ID",
    //         textAlign: "Right",
    //         width: 120,
    //         isPrimaryKey: true,
    //         validationRules: { required: true, number: true },
    //     },

    //     // local data
    //     { field: "ProductName", headerText: "Product Name", width: 160 },
    //     {
    //         field: "ProductID",
    //         headerText: "Product ID",
    //         textAlign: "Right",
    //         width: 120,
    //     },
    //     { field: "CustomerID", headerText: "Customer ID", width: 120 },
    //     { field: "CustomerName", headerText: "Customer Name", width: 160 },

    //     // remote data
    //     // { field: 'ShipName', headerText: 'Ship Name', width: 160 },
    //     // { field: 'OrderDate', headerText: 'Order Date', width: 160 },
    //     // { field: 'Freight ', headerText: 'Freight ', textAlign: 'Right', width: 120 },
    //     // { field: 'ShipCity', headerText: 'Ship City', width: 160 },
    // ],
    // aggregates: [
    //     {
    //         columns: [
    //             {
    //                 type: "Sum",
    //                 field: "Freight",
    //                 format: "C2",
    //                 footerTemplate: "Sum: ${Sum}",
    //             },
    //         ],
    //     },
    //     {
    //         columns: [
    //             {
    //                 type: "Average",
    //                 field: "Freight",
    //                 format: "C2",
    //                 footerTemplate: "Average: ${Average}",
    //             },
    //         ],
    //     },
    // ],

    // check sample focus

    //         dataSource: orderData,
    //   columns: [
    //     {
    //       field: 'OrderID',
    //       headerText: 'Order ID',
    //       width: 120,
    //       textAlign: 'Right',
    //     },
    //     { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
    //     {
    //       field: 'OrderDate',
    //       headerText: 'Order Date',
    //       width: 130,
    //       format: 'yMd',
    //       textAlign: 'Right',
    //     },
    //     { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
    //     {
    //       field: 'ShippedDate',
    //       headerText: 'Shipped Date',
    //       width: 140,
    //       format: 'yMd',
    //       textAlign: 'Right',
    //     },
    //     { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
    //   ],

    // hierarchy grid checking

    // dataSource: employeeData,
    // allowSorting: true,
    // enableInfiniteScrolling: true,
    // // allowPaging: true,
    // height: 100,
    // columns: [
    //     { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 125 },
    //     { field: 'FirstName', headerText: 'Name', width: 125 },
    //     { field: 'Title', headerText: 'Title', width: 180 },
    //     { field: 'City', headerText: 'City', width: 110 },
    //     { field: 'Country', headerText: 'Country', width: 110 }
    // ],
    // pageSettings: {pageSize: 2},
    // childGrid: {
    //     dataSource: dataManger,
    //     queryString: 'EmployeeID',
    //     allowPaging: true,
    //     columns: [
    //         { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    //         { field: 'ShipCity', headerText: 'Ship City', width: 120 },
    //         { field: 'Freight', headerText: 'Freight', width: 120 },
    //         { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    //     ],
    //     childGrid: {
    //         dataSource: dataManger2,
    //         queryString: 'CustomerID',
    //         columns: [
    //             { field: 'CustomerID', headerText: 'Customer ID', textAlign: 'Right', width: 75 },
    //             { field: 'Phone', headerText: 'Phone', width: 100 },
    //             { field: 'Address', headerText: 'Address', width: 120 },
    //             { field: 'Country', headerText: 'Country', width: 100 }
    //         ]
    //     },

    // },

    // Try to use component in ts template

    // local data
    // dataSource: hierarchyOrderdata,

    // // remote data
    // // dataSource: dataManger,
    // allowPaging: true,
    // editSettings: {allowAdding: true, allowDeleting: true, allowEditing: true, newRowPosition: 'Top', mode: 'Dialog',},
    // toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    // columns: [
    //     { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, isPrimaryKey: true, validationRules: { required: true, number: true } },
    //     { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    //     { field: 'Verified', headerText: 'Verified', width: 120, editType:"booleanedit",
    //     template:  `<div><input type="checkbox"/></div>`
    //     },
    //     { field: 'ShipCountry', headerText: 'Ship Country', width: 150, editType: "dropdownedit" }
    // ],
    // queryCellInfo: checkBox

    // overview sample

    // dataSource: getTradeData(1000),
    dataSource: urlapi,
    query: new Query().addParams('dataCount', '1000'),

    // allowPaging: true,
    // pageSettings: {}

    allowSelection: true,
    allowFiltering: true,
    allowSorting: true,
    enableVirtualization: true,
    loadingIndicator: { indicatorType: 'Shimmer' },
    filterSettings: { type: 'Menu' },
    selectionSettings: { persistSelection: true, type: 'Multiple', checkboxOnly: true },
    enableHover: false,
    enableHeaderFocus: true,
    height: 600,
    // height: 450,
    rowHeight: 38,
    columns: [
        { type: 'checkbox', allowFiltering: false, allowSorting: false, width: '60' },
        { field: 'EmployeeID', visible: false, headerText: 'Employee ID', isPrimaryKey: true, width: '130' },
        {
            field: 'Employees', headerText: 'Employee Name', width: '200', clipMode: 'EllipsisWithTooltip',
            template: '#empTemplate',
            filter: { type: 'CheckBox' }
        },
        {
            field: 'Designation', headerText: 'Designation', width: '170',
            filter: { type: 'CheckBox' }, clipMode: 'EllipsisWithTooltip'
        },
        { field: 'Mail', headerText: 'Mail', width: '230', filter: { type: 'Menu' } },
        {
            field: 'Location', width: '140', headerText: 'Location', filter: { type: 'CheckBox' },
            template: '#coltemplate'
        },
        {
            field: 'Status', headerText: 'Status', filter: { type: 'CheckBox', itemTemplate: '#StatusItemTemp' },
            width: '150', template: '#statusTemplate'
        },
        {
            field: 'Trustworthiness', headerText: 'Trustworthiness',
            filter: { type: 'CheckBox', itemTemplate: '${ trustTemp(data)}' }, width: '160', template: '#trustTemplate'
        },
        {
            field: 'Rating', filter: { type: 'CheckBox', itemTemplate: '<div>${ratingDetail(data)}</div>' }, headerText: 'Rating',
            width: '160', template: '#ratingTemplate'
        },
        {
            field: 'Software', allowFiltering: false, allowSorting: false, headerText: 'Software Proficiency',
            width: '180', template: '#progessTemplate'
        },
        {
            field: 'CurrentSalary', headerText: 'Current Salary', format: 'C2',
            filter: { type: 'Menu' }, textAlign: 'Right', width: '160'
        },
        { field: 'Address', headerText: 'Address', width: '240', filter: { type: 'Menu' }, clipMode: 'EllipsisWithTooltip' },
    ],
    queryCellInfo: queryCellInfo,
    dataBound: startTimer,
    actionComplete: complete

    // // selection sample

    // dataSource: inventoryData,
    // //   allowPaging: true,
    // allowSelection: true,
    // enableVirtualization: true,
    // selectionSettings: { persistSelection: true, checkboxOnly: true },
    // editSettings: { allowDeleting: true },
    // toolbar: ['Delete'],
    // enableHover: false,
    // columns: [
    //     { type: 'CheckBox', width: 50 },
    //     {
    //     field: 'Inventor',
    //     isPrimaryKey: true,
    //     headerText: 'Inventor Name',
    //     width: 180,
    //     },
    //     {
    //     field: 'NumberofPatentFamilies',
    //     headerText: 'No of Patent Families',
    //     width: 195,
    //     textAlign: 'Right',
    //     },
    //     { field: 'Country', headerText: 'Country', width: 120 },
    //     { field: 'Active', headerText: 'Active', width: 130 },
    // ],
    // height: 600,


    // toolbar item add dynamic issue
    // dataSource: orderData,
    // editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', newRowPosition: 'Top' },
    // allowPaging: true,
    // pageSettings: { pageCount: 5 },
    // toolbar: ['Add', 'Delete', 'Update', 'Cancel', 'Save'],
    // width:600,
    // columns: [
    //     {
    //         field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Right',
    //         validationRules: { required: true, number: true }, width: 140
    //     },
    //     {
    //         field: 'CustomerID', headerText: 'Customer ID',
    //         validationRules: { required: true }, width: 140
    //     },
    //     {
    //         field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit',
    //         width: 140, format: 'C2', validationRules: { required: true }
    //     },
    //     {
    //         field: 'OrderDate', headerText: 'Order Date', editType: 'datetimepickeredit',
    //         width: 160, format: { type: 'dateTime', format: 'M/d/y hh:mm a' },
    //     },
    //     {
    //         field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150,
    //         edit: { params: { popupHeight: '300px' } }
    //     }
    // ],


    // // batch edit add validation for template column

    // dataSource: getTradeData(100),
    // editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch', newRowPosition: 'Top' },
    // // allowPaging: true,
    // // pageSettings: { pageCount: 5 },
    // toolbar: ['Add', 'Delete', 'Update', 'Cancel', 'Save'],
    // // width:600,
    // columns: [
    //     {
    //         field: 'EmployeeID',
    //         isPrimaryKey: true,
    //         visible: false,
    //         type: "number",
    //       },
    //       {
    //         field: 'Employees',
    //         type: "string",
    //         template: '${Employees} - 1',
    //         validationRules: { required: true },
    //       },
    //       {
    //         field: 'Address',
    //         type: "string",
    //         // template: '${Address} - 1',
    //         validationRules: { required: true },
    //       },
    // ],

});
grid.appendTo("#Grid");

// Try to use component in ts template

// function checkBox(args: any) {
//     debugger;
//     if (args.column.template) {
//         let ele: HTMLSelectElement = args.cell.querySelector('input');
//         let checkbox: CheckBox = new CheckBox({ label: '', checked: args.data.Verified });
//         checkbox.appendTo(ele);
//     }
// }

// bigger and rtl enable

var checkBoxObj = new CheckBox({ label: "Enable RTL", change: onRtlChange });
checkBoxObj.appendTo("#rtlmode");

var checkBoxObj = new CheckBox({
    label: "Enable Bigger",
    change: onBiggerChange,
});
checkBoxObj.appendTo("#biggermode");

function onRtlChange(e: any) {
    grid.enableRtl = e.checked;
}

function onBiggerChange(e: any) {
    e.checked
        ? document.body.classList.add("e-bigger")
        : document.body.classList.remove("e-bigger");
}

// dialog selected data delete issue

// let dlgObj: Dialog = new Dialog({
//     content: document.getElementById('Grid'),
//     width: '500px',
//     height: 750,
//   });
//   dlgObj.appendTo('#dialog');

// improvement multiple row adding validation and escape validation

// function toolbarClick(args: any) {
//     var nextNumber = 10260;
//     debugger;
//     // this.editModule.actionComplete();
//     if (this && args.item.id.includes('add5Rows')) {
//       for (let i = 0; i < 5; i++) {
//         debugger
//         if(i==0){
//             this.addRecord({  })
//             // this.addRecord({ OrderID: nextNumber, Freight: 20.22, CustomerID: 'Vasanth', OrderDate: '2022/4/14', ShipCountry: 'India' });
//         }
//         else if(i==1) {
//             this.addRecord({ OrderID: nextNumber, Freight: 20.22, OrderDate: '2022/4/14', ShipCountry: 'India' });
//         }
//         else if(i==4){
//             this.addRecord({ OrderID: nextNumber });
//         }
//         else if(i==3){
//             this.addRecord({ ShipCountry: 'India' });
//         }
//         else{
//             this.addRecord({  });//OrderID: nextNumber
//         }
//         nextNumber = parseInt(nextNumber.toString()) + 1;
//       }
//     }
// }

// persist selection misbehave while sorting, filtering and searching actions

// function rowSelected(args: any) {
//     debugger;
//     var grid = (document.getElementsByClassName("e-grid")[0] as any).ej2_instances[0];
//     console.log(grid.getSelectedRecords());
// }

// interface IWindow extends Window {
//     viewCollection?: Function;
// }

// Grid.Inject(Page, Selection, DetailRow,Filter,Group,Aggregate,Sort);

// let dataManger: Object = new DataManager({
//         url: 'http://services.odata.org/V4/Northwind/Northwind.svc/Orders',
//         adaptor: new ODataV4Adaptor,
//         crossDomain: true
//     });
//     let dataManger2: Object = new DataManager({
//         url: 'http://services.odata.org/V4/Northwind/Northwind.svc/Customers',
//         adaptor: new ODataV4Adaptor,
//         crossDomain: true
//     });

//     let grid: Grid = new Grid({
//         dataSource: employeeData,
//         allowSorting: true,
//         allowGrouping:true,
//         allowFiltering:true,
//         columns: [
//             { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 125 },
//             { field: 'FirstName', headerText: 'Name', width: 125 },
//             { field: 'Title', headerText: 'Title', width: 180 },
//             { field: 'City', headerText: 'City', width: 110 },
//             { field: 'Country', headerText: 'Country', width: 110 }
//         ],

//         childGrid: {
//             dataSource: dataManger,
//             queryString: 'EmployeeID',
//             allowSorting:true,
//             allowGrouping:true,
//             allowFiltering:true,
//             allowPaging: true,
//             columns: [
//                 { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
//                 { field: 'ShipCity', headerText: 'Ship City', width: 120 },
//                 { field: 'Freight', headerText: 'Freight', width: 120 },
//                 { field: 'ShipName', headerText: 'Ship Name', width: 150 }
//             ],
//             childGrid: {
//                 dataSource: dataManger2,
//                 queryString: 'CustomerID',
//                 allowSorting:true,
//                 allowFiltering:true,
//                 allowGrouping:true,
//                 columns: [
//                     { field: 'CustomerID', headerText: 'Customer ID', textAlign: 'Right', width: 75 },
//                     { field: 'Phone', headerText: 'Phone', width: 100 },
//                     { field: 'Address', headerText: 'Address', width: 120 },
//                     { field: 'Country', headerText: 'Country', width: 100 }
//                 ],
//                 load: function() { window['childGrid2'] = this; }
//             },
//         },
//     });
//     grid.appendTo('#Grid');

// Grid.Inject(Page,Selection,Filter)
// let grid : Grid = new Grid({
//     dataSource: data,
//     allowPaging: true,
//     allowFiltering: true,
//     filterSettings:{mode:'Immediate'},
//     columns: [
//         { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
//         {
//             field: 'EmployeeID', filterBarTemplate: {
//                 create: (args: { element: Element, column: Column }) => {
//                     let dd: HTMLSelectElement = document.createElement('select');
//                     dd.id = 'EmployeeID';
//                     let dataSource: string[] = ['All', '1', '3', '4', '5', '6', '8', '9'];
//                     for (let i: number = 0; i < dataSource.length; i++) {
//                         let option: HTMLOptionElement = document.createElement('option');
//                         option.value = dataSource[i];
//                         option.innerHTML = dataSource[i];
//                         dd.appendChild(option);
//                     }
//                     return dd;
//                 },
//                 write: (args: { element: Element, column: Column }) => {
//                     args.element.addEventListener('input',
//                     (args: Event): void => {
//                         let target: HTMLInputElement = <HTMLInputElement>args.currentTarget;
//                         if (target.value !== 'All') {
//                             let value: Number = +target.value;
//                             grid.filterByColumn(target.id, 'equal', value as any);
//                         } else {
//                         grid.removeFilteredColsByField(target.id);
//                         }
//                     });
//                 },
//             },
//             textAlign: 'Right', width: 70
//         },
//         { field: 'ShipCity', headerText: 'Ship City', width: 100 },
//         { field: 'ShipName', headerText: 'Ship Name', width: 100 }]
// });
//  grid.appendTo('#Grid');

// Dom leak
// setInterval(function() {
//     grid.refresh();
// }, 1000);



// overview sample

grid.on('data-ready', () => {
    dReady = true;
});
let listObj: DropDownList = new DropDownList({
    index: 0,
    placeholder: 'Select a Data Range',
    popupHeight: '240px',
    width: '220px',
    change: () => { valueChange(); }
});
listObj.appendTo('#ddl');
function valueChange(): void {
    (<any>listObj).closePopup();
    // grid.showSpinner();
    dropSlectedIndex = null;
    let index: number = listObj.value as number;
    clearTimeout(clrIntervalFun2);
    clrIntervalFun2 = setTimeout(
        () => {
            isDataChanged = true;
            stTime = null;
            let contentElement: Element = grid.contentModule.getPanel().firstChild as Element;
            contentElement.scrollLeft = 0;
            contentElement.scrollTop = 0;
            grid.pageSettings.currentPage = 1;
            stTime = performance.now();

            // grid.dataSource = getTradeData(index);
            

            // new DataManager({ url: "http://localhost:62869/api/UrlDataSource", adaptor: new UrlAdaptor })
            // .executeQuery(new Query().addParams('dataCount', index.toString()))
            // .then((e: ReturnOption) => {
            //     grid.refresh();
            //     // grid.dataSource = e.result;
            // });
            
            
            // grid.dataSource = urlapi;
            // grid.query.addParams('dataCount', index.toString());
            // let gridProperties: object = JSON.parse(grid.getPersistData());
            // let gridProperties1: object = JSON.parse();

            
            // let keys: string[] = grid.query.params.keys();
            // if (keys.includes()) {
            //     let change: boolean = true;
            //     for (var i = 0; i < grid.query.params.length; i++) {
            //         if (grid.query.params[i].key === 'dataCount') {
            //             grid.query.params[i].value = index.toString();
            //             change = false;
            //             break;
            //         }
            //     }
            //     if (change) {
            //         grid.query.addParams('dataCount', index.toString());
            //     }
            // }
            // else {
            //     grid.query.addParams('dataCount', index.toString());
            // }


            if (grid.query.params.length) {
                let change: boolean = true;
                for (var i = 0; i < grid.query.params.length; i++) {
                    if (grid.query.params[i].key === 'dataCount') {
                        grid.query.params[i].value = index.toString();
                        change = false;
                        break;
                    }
                }
                if (change) {
                    grid.query.addParams('dataCount', index.toString());
                }
            }
            else {
                grid.query.addParams('dataCount', index.toString());
            }

            grid.setProperties({dataSource: urlapi});

            grid.hideSpinner();
        },
        100);
}
document.getElementById('Grid').addEventListener('DOMSubtreeModified', () => {
    if (dReady && stTime && isDataChanged) {
        let msgEle: Element = document.getElementById('msg');
        let val: any = (performance.now() - stTime).toFixed(0);
        stTime = null;
        dtTime = false;
        dReady = false;
        isDataChanged = false;
        msgEle.innerHTML = 'Load Time: ' + '<b>' + val + '</b>' + '<b>ms</b>';
        msgEle.classList.remove('e-hide');
    }
});


// // check sample focus

// let sportsData: string[] = [
//     "Badminton",
//     "Cricket",
//     "Football",
//     "Golf",
//     "Tennis",
// ];

// // initialize DropDownList component
// let dropDownListObject: DropDownList = new DropDownList({
//     //set the data to dataSource property
//     dataSource: sportsData,
//     // set placeholder to DropDownList input element
//     placeholder: "Select a game",
// });

// // render initialized DropDownList
// dropDownListObject.appendTo("#ddlelement");


// // toolbar item add dynamic issue

// let dropDownColumns: DropDownList = new DropDownList({
//     dataSource: [{ id: 'toolbar1', name: 'default toolbar' }, { id: 'toolbar2', name: 'modify toolbar' }],
//     fields: { text: 'name', value: 'id' },
//     value: 'toolbar1',
//     width: 120,
//     change: (e: ChangeEventArgs) => {
//         if (e.value === 'toolbar1') {
//             grid.toolbar = ['Add', 'Delete', 'Update', 'Cancel', 'Save'];
//         } else {
//             grid.toolbar = ['Search', 'Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Save','Print','ExcelExport','PdfExport'];
//         }

//     }
// });
// dropDownColumns.appendTo('#ddlelement');