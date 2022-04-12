import React, { useState, useMemo, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Link } from 'react-router-dom';
import { getProductSecuredLending } from './GetData';

class ProductSecuredLending extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rowData: [],
            columnDefs: [{
               headerName: "Secured Lending",
                children: [
                    {
                        headerName: "A/C No", field: "uob_accountnumber", sortable: true, sort: "asc",
                        cellStyle: {
                            color: 'grey'
                        }
                    },
                    { headerName: "Product Type", field: "uob_accountproducttypename", sortable: true },
                    { headerName: "A/C Relationship", field: "record1roleid", sortable: true },
                    { headerName: "A/C Currency", field: "CURTYP", sortable: true },
                    { headerName: "Outstanding Balance", field: "OSBAL", sortable: true },
                    { headerName: "A/C Status", field: "uob_accountstatusdescriptionname", sortable: true },
                    { headerName: "Approved Limit", field: "PRNAMT", sortable: true },
                    { headerName: "Current Installment Amt", field: "RPYAMT", sortable: true },
                    { headerName: "Current Interest Rate", field: "RATE", sortable: true },
                    { headerName: "Loan Tenor", field: "TERM", sortable: true },
                    { headerName: "Loan Tenor Frequency", field: "TMCODE", sortable: true },
                    { headerName: "Next Payment Amount", field: "NPDAM2", sortable: true },
                    { headerName: "Next Payment Due", field: "NPDDT6", sortable: true },
                ]
            }]

        };
        this.getSecuredLanding();
    }

    async getSecuredLanding() {
        let data = await getProductSecuredLending();
        this.setState(
            {rowData:  data}
        );
        // this.setState( prevState => ({
        //      rowData: [...prevState.rowData,  data]
        //  }));
    }

    gridStyle = { height: 350, width: '100%', textAlign: 'left' };
    render() {
        return (
            <>
                <main>
                    <h2>3.5.8.3 Products</h2>
                    <div>
                        <h3>Secured Lending</h3>
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
                </main>
                <div>
                    Go back to home
                    <nav>
                        <Link to="/">Home</Link>

                    </nav>
                </div>
            </>
        )


    }
}

export default ProductSecuredLending;