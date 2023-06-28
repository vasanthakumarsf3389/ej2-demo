ej.base.enableRipple(true);

var data = new ej.data.DataManager(window.orderData).executeLocal(
  new ej.data.Query().take(15)
);
var grid = new ejs.grids.Grid({
  allowPaging: true,
  columns: [
    {
      field: 'SNo',
      headerText: 'Serial No.',
      isPrimaryKey: true,
      textAlign: 'Left',
      width: '0',
    },
    {
      field: 'Name',
      headerText: 'Name',
      textAlign: 'Left',
      validationRules: {
        required: 'true',
        minLength: '3',
        maxLength: '10',
      },
      width: '200',
    },
    {
      field: 'Height',
      headerText: 'Height',
      textAlign: 'Left',
      width: '200',
    },
    {
      field: 'EmpDept.DeptNo',
      headerText: 'DeptNo',
      textAlign: 'Left',
      width: '0',
    },
    {
      field: 'EmpDept.DeptName',
      headerText: 'Dept',
      textAlign: 'Left',
      width: '100',
    },
    {
      edit: {
        params: {
          serverDecimalSeparator: '.',
          decimals: 2.0,
          format: '0.00',
          max: 100,
          min: 0,
          showSpinButton: false,
          step: 1.0,
          strictMode: false,
          validateDecimalOnType: true,
        },
      },
      editType: 'numericedit',
      field: 'Age',
      format: '0.00',
      textAlign: 'Left',
      validationRules: {
        required: 'true',
        min: '0',
        max: 100,
      },
      width: '100',
    },
  ],
  dataSource: ejs.data.DataUtil.parse.isJson([
    {
      SNo: 1000,
      IsActive: false,
      Name: 'Jack',
      Height: 173.4,
      Age: 26,
      CDate: '2023-06-07T17:51:03.350721+05:30',
      EmpDepartments: [
        {
          DeptNo: '1000123023000000001',
          DeptName: 'Administrator',
        },
        {
          DeptNo: '1000123023000000002',
          DeptName: 'Human Resource',
        },
      ],
      DeptNo: null,
      EmpDept: {
        DeptNo: '1221',
        DeptName: 'Admn',
      },
    },
    {
      SNo: 2,
      IsActive: true,
      Name: 'John',
      Height: 0.0,
      Age: 0,
      CDate: '2023-06-07T17:51:03.350721+05:30',
      EmpDepartments: [
        {
          DeptNo: '1000123023000000003',
          DeptName: 'Project Lead',
        },
        {
          DeptNo: '1000123023000000004',
          DeptName: 'Team Lead',
        },
      ],
      DeptNo: null,
      EmpDept: {
        DeptNo: '1221',
        DeptName: 'Admn',
      },
    },
    {
      SNo: 3,
      IsActive: false,
      Name: 'Mike',
      Height: 179.4,
      Age: 35,
      CDate: '2023-06-07T17:51:03.350721+05:30',
      EmpDepartments: [
        {
          DeptNo: '1000123023000000005',
          DeptName: 'Project Manager',
        },
        {
          DeptNo: '1000123023000000006',
          DeptName: 'Process Manager',
        },
      ],
      DeptNo: null,
      EmpDept: {
        DeptNo: '1221',
        DeptName: 'Admn',
      },
    },
    {
      SNo: 4,
      IsActive: false,
      Name: 'Bruce',
      Height: 181.7,
      Age: 28,
      CDate: '2023-06-07T17:51:03.350721+05:30',
      EmpDepartments: [
        {
          DeptNo: '1000123023000000007',
          DeptName: 'CEO',
        },
        {
          DeptNo: '1000123023000000008',
          DeptName: 'Finance Manager',
        },
      ],
      DeptNo: null,
      EmpDept: {
        DeptNo: '1221',
        DeptName: 'Admn',
      },
    },
  ]),
  editSettings: {
    allowAdding: true,
    allowDeleting: true,
    allowEditing: true,
    showConfirmDialog: false,
  },
  ej2StatePersistenceVersion: 'default version',
  frozenColumns: 0.0,
  frozenRows: 0.0,
  pageSettings: {
    currentPage: 1.0,
    pageCount: 8.0,
    pageSize: 10.0,
    pageSizes: [5, 10, 20, 30, 50],
  },
  selectedRowIndex: -1.0,
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
}).appendTo('#SimpleGrid');
