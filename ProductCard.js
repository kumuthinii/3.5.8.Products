import React, { useState, useMemo, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Link } from 'react-router-dom';
import { getProductCardData } from './GetData';
class ProductCard extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      rowData: [],
      columnDefs: [{
        headerName: "Cards & Unsecured Lending",
        children: [
          {
            headerName: "A/C No", field: "uob_accountnumber", sortable: true, sort: "asc",
            cellStyle: {
              color: 'grey'
            }
          },
          { headerName: "A/C Type", field: "uob_accountproducttypename", sortable: true },
          { headerName: "Product Type", field: "accountproducttypename", sortable: true },
          { headerName: "A/C Currency", field: "accountCurrency", sortable: true },
          { headerName: "OutstandingBalance", field: "outsBalance", sortable: true },
          { headerName: "Balance As At Date", field: "balanceAsAtDate", sortable: true },
          { headerName: "A/C Status", field: "accountstatusdescriptionname", sortable: true },
          { headerName: "Approved Limit", field: "approvedLimit", sortable: true },
          { headerName: "Loan Tenor", field: "loanTenor", sortable: true },
          { headerName: "Loan Tenor Frequency", field: "loanTenorFrequencey", sortable: true },
          { headerName: "Min Payment Amount", field: "minPaymentAmount", sortable: true },
          { headerName: "Next Payment Due Date", field: "nextPaymentDueDate", sortable: true }
        ]
      }]
    }
    this.getCardData();
  }

  async getCardData() {
    let data = await getProductCardData();
    console.log("getCard Data");
    console.log(data);
    // set the data into the rows
    this.setState(
      { rowData: data }
    );
  }

  //const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  gridStyle = { height: 350, width: '100%', textAlign: 'left' };

  render() {

    return(
      <>
        <h2>3.5.8.1 Products</h2>

        <div>
          <h3>Cards</h3>
        </div>
        <div className="ag-theme-balham" style={this.gridStyle}>
          <AgGridReact
            rowData={this.state.rowData}
            columnDefs={this.state.columnDefs}
            pagination={true}
            paginationPageSize={10}
            icons={{
              sortAscending: '<i class="fa-solid fa-angle-up"/>',
              sortDescending: '<i class="fa-solid fa-angle-down"/>'
            }}
          >
          </AgGridReact>
        </div>
      </>
    )
  }
}


export default ProductCard;
