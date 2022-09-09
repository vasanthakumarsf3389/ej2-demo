import logo from './logo.svg';
import './App.css';

// f

import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { Internationalization } from '@syncfusion/ej2-base';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  DetailRow,
  Inject,
} from '@syncfusion/ej2-react-grids';
import { employeeData } from './data';
import { SampleBase } from './sample-base';

let instance = new Internationalization();
export class App extends SampleBase {
  constructor() {
    super(...arguments);
    this.format = (value) => {
      return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
    };
    this.state = {
      isShow: false,
    };
    this.template = this.gridTemplate;
    this.click = this.clickFn;
  }
  clickFn() {
    alert('yes');
  }
  colTemplate(props) {
    var src = 'src/grid/images/' + props.EmployeeID + '.png';
    const click = () => {
      debugger;
      this.setState({ isShow: true });
    };
    return (
      <div className="image">
        <button onClick={click}> click here</button>
      </div>
    );
  }

  gridTemplate(props) {
    var src = 'src/grid/images/' + props.EmployeeID + '.png';
    return (
      <table className="detailtable" style={{ width: '100%' }}>
        <colgroup>
          <col style={{ width: '35%' }} />
          <col style={{ width: '35%' }} />
          <col style={{ width: '30%' }} />
        </colgroup>
        <tbody>
          <tr>
            <td rowSpan={4} className="images">
              <img className="photo" src={src} alt={props.EmployeeID} />
            </td>
            <td>
              <span style={{ fontWeight: 500 }}>First Name: </span>{' '}
              {props.FirstName}
            </td>
            <td>
              <span style={{ fontWeight: 500 }}>Postal Code: </span>{' '}
              {props.PostalCode}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: 500 }}>Last Name: </span>{' '}
              {props.LastName}
            </td>
            <td>
              <span style={{ fontWeight: 500 }}>City: </span> {props.City}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: 500 }}>Title: </span> {props.Title}
            </td>
            <td>
              <span style={{ fontWeight: 500 }}>Phone: </span> {props.HomePhone}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: 500 }}>Address: </span> {props.Address}
            </td>
            <td>
              <span style={{ fontWeight: 500 }}>HireDate: </span>{' '}
              {this.format(props.HireDate)}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
  render() {
    return (
      <div className="control-pane">
        {this.state.isShow && <div className="myElement">SYNCFUSION</div>}
        <div className="control-section">
          <GridComponent
            dataSource={employeeData}
            detailTemplate={this.template.bind(this)}
            width="auto"
          >
            <ColumnsDirective>
              <ColumnDirective
                headerText="template column"
                width="180"
                template={this.colTemplate.bind(this)}
                textAlign="Center"
              />
              <ColumnDirective
                field="FirstName"
                headerText="First Name"
                width="110"
              />
              <ColumnDirective
                field="LastName"
                headerText="Last Name"
                width="110"
              />
              <ColumnDirective field="Title" headerText="Name" width="150" />
              <ColumnDirective
                field="Country"
                headerText="Country"
                width="110"
              />
            </ColumnsDirective>
            <Inject services={[DetailRow]} />
          </GridComponent>
        </div>
      </div>
    );
  }
}

// render(<DetailTemplate />, document.getElementById('sample'));


export default App;
