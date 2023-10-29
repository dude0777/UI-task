import React from 'react'
import OriginatorDetails from '../originatorDetails/OriginatorDetails'
import PaymentDetails from '../paymentDetails/PaymentDetails'
import BeneficiaryDetails from '../beneficiaryDetails/BeneficiaryDetails'
import { Grid } from '@mui/material'
function Main() {
  return (
    <div>
     <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <OriginatorDetails />
                  <BeneficiaryDetails />
                </Grid>
                <Grid item xs={12} md={6}>
                  <PaymentDetails/>
                </Grid>
              </Grid> 
    </div>
  )
}

export default Main
