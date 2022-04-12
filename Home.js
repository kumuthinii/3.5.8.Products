import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <main style={{textAlign:"center"}}>
        <h2>Navigation</h2>
    
      <nav >
        {/* <Link to="/product-deposit">Product-Deposit</Link>*/}
          {/*Lili */}
        <br></br>
        <Link to="/product-deposit">Product Deposit</Link>
        <br></br>
        <Link to="/product-card">Product-Card</Link>
        <br></br>
        <Link to="/summary-customer-info">Summary-Basic Customer & Contact Info</Link>
        <br />
        <Link to="/summary-note">Summary Note</Link>
        <br/>
        <Link to="/summary-open-lead">Summary - Open Lead</Link>
        <br/>
        <Link to="/summary-alert">Summary - Alert </Link>
        {/*Aqilah */}
        <hr></hr>
        <Link to="/customer-search">Customer Search </Link>
        <br/>
        <Link to="/customer-search2">Customer Search2 </Link>
        <br />
        {/*Munirah*/}
        <hr></hr>
        <Link to="/application-card">Cards and Unsecured Lending</Link>
        <br></br>
        <Link to="/secured-data">Secured Lending</Link>
        <br />
        <hr/>
        {/*Kumu*/}
        <Link to="/sales-opportunity-lead">Sales opportunity Lead</Link><br></br>
        <Link to="/product-secure-lending">Product Secured Lending</Link><br></br>
        <Link to="/product-services">Product Services</Link>

        <br></br>
        <hr></hr>
   
      

       
 
      </nav>

      </main>
    </>
  );
}

export default Home