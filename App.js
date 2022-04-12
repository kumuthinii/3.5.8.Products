//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { React } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
//import DepositStatic from './ProductDepositStatic';

import Home from './Home';
import Card from './ProductCard';
//import SummaryCustInfo from './SummaryBasicCustInfo';
import SummaryCustInfo from './SummaryBasicCustInfo';
import CustomerSearch from './CustomerSearch';
import CustomerSearch2 from './CustomerSearch2';
import ApplicationCard from './ApplicationCard';
import SecuredLending from './SecuredLending';
import SummaryNote from './SummaryNote';
import SummaryOpenLead from './SummaryOpenLead';
import SummaryAlert from './SummaryAlert';
import SalesOpportunityLead from './SalesOpportunityLead';
import ProductDeposit from './ProductDeposit';
import ProductSecuredLending from './ProductSecuredLanding';
import ProductServices from './ProductServices';

function App() {

  return (

    <div className="App" style={{textAlign:"center"}}>
      <h1>Welcome to React js</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*}  <Route path="product-deposit" element={<DepositStatic />} />
           <Route path="product-deposit-class" element={<ProductDeposit />} />*/}

        {/*Lili*/}
        <Route path="product-deposit" element={<ProductDeposit />} />
        <Route path="product-card" element={<Card />} />
        <Route path="summary-customer-info" element={<SummaryCustInfo />} />
        <Route path="summary-note" element={<SummaryNote />} />
        <Route path="summary-open-lead" element={< SummaryOpenLead />} />
        <Route path="summary-alert" element={< SummaryAlert />} />
     
       
        {/*Aqilah*/}
        <Route path="customer-search" element={<CustomerSearch />} />
        <Route path="customer-search2" element={<CustomerSearch2 />} />
        {/*Muni*/}
        <Route path="application-card" element={<ApplicationCard />} />
        <Route path="secured-data" element={<SecuredLending />} />
        {/*Kumu*/}
        <Route path="sales-opportunity-lead" element={<SalesOpportunityLead />} />
        <Route path="product-secure-lending" element={<ProductSecuredLending />} />
        <Route path="product-services" element={<ProductServices />} />
      


        

      </Routes>

    </div>


  );
}

export default App;
