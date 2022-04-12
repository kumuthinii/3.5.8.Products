import React, { useState, useMemo, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Link } from 'react-router-dom';
import { getProductServices } from './GetData';

class ProductServices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rowData: [],
            columnDefs: [{
               headerName: "Services",
                children: [
                    {
                        headerName: "Service Type", field: "serviceType", sortable: true, width: '315', sort: "asc",
                        cellStyle: {
                            color: 'grey'
                        }
                    },
                    { headerName: "Service Sub Type", field: "serviceSubType", sortable: true, width: '320' },
                    { headerName: "Service Count", field: "serviceCount", sortable: true, width: '320' },
                    { headerName: "Status", field: "status", sortable: true, width: '320'},
                ]
            }]

        };
        this.getPrdServices();
    }

    async getPrdServices() {
        let data = await getProductServices();
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
                    <h2>3.5.8.4 Products</h2>
                    <div>
                        <h3>Services</h3>
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

export default ProductServices;