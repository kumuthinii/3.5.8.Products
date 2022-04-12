import React, { useState,useMemo,useEffect } from 'react';

export default async function getProductDepositData () {
    const response = await fetch('./DepositData.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
    /*
      .then(function(response){
        console.log("response1"); 
        console.log(response);
         response.json();
      })
      .then(function(myJson) {
        console.log("response2");
        console.log(myJson);
      });
*/
      const data = await response.json();
      //console.log("deposit data");
      //console.log(data);
      return data;
      
  }
 
  export async function getProductCardData () {
    const cardResponse = await fetch('CardData.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });

      const data = await cardResponse.json();

      return data;
      
  }
  export async function getBasicCustInfoData () {
    const response = await fetch('BasicCustInfoData.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
  
      const data = await response.json();
      return data;
      
  }
  export async function getSummaryNote () {
    const response = await fetch('SummaryNote.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
  
      const data = await response.json();
      return data;
      
  }
  export async function getSummaryAlert () {
    const response = await fetch('SummaryAlert.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
  
      const data = await response.json();
      return data;
      
  }
//---------------------------------------break--------------------------------------------
  
export async function getCustomerSearchData() {
  const response = await fetch('./CustomerSearchData.json'
      , {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      });

  const data = await response.json();

  return data;

}
//---------------------------------------break--------------------------------------------
export async function getApplicationCardData () {
  const cardResponse = await fetch('ApplicationCardData.json'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  });

    const data = await cardResponse.json();
  
    return data;
    
}
export async function getSecuredLendingData() {
  const cardResponse = await fetch('SecuredData.json'
      , {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      });

  const data = await cardResponse.json();
  
  return data;

}
//---------------------------------------break--------------------------------------------
export async function getSalesOpportunityLeadData () {
  const cardResponse = await fetch('SalesOpportunityLeadData.json'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  });

    const data = await cardResponse.json();
    console.log("card data");
    console.log(data);
    return data;
    
}

//---------------------------------------break--------------------------------------------
export async function getProductSecuredLending() {
    const cardResponse = await fetch('./SecuredLanding.json'
        , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

    const data = await cardResponse.json();
    console.log("card data");
    console.log(data);
    return data;

}

//---------------------------------------break--------------------------------------------
export async function getProductServices() {
    const cardResponse = await fetch('./Services.json'
        , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

    const data = await cardResponse.json();
    console.log("card data");
    console.log(data);
    return data;

}

