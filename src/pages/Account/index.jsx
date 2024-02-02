import React, { useState } from 'react'
import Container from '../../components/Container'
import Title from '../../components/Title'
import Breadcrumb from '../../components/Breadcrumb'
import Grid from '../../components/Grid'
import SideMenu from './SideMenu'
import Dashboard from './Dashboard'
import Others from './Others'
import Download from './Downloads'
import Address from './Address'
import AccountDetails from './AccountDetails'

const Account = () => {
    const [details, setDetails] = useState("")
  return (
    <>
        <Container className="font-dmsans my-12">
            <div>
                <Title className="mb-3 text-5xl" title="My Account"/>
                <Breadcrumb/>
            </div>
            <div>
                <Grid className="grid-cols-5 py-12 gap-8">
                    <div><SideMenu selected={setDetails}/></div>
                    <div className='col-span-4'>
                        <div>
                            {
                                details === "Dashboard" ? <Dashboard/> : 
                                details === "Others" ? <Others/> : 
                                details === "Downloads" ? <Download/> :
                                details === "Address" ? <Address/> :
                                details === "Account Details" ? <AccountDetails/> : <Dashboard/>
                            }
                        </div>
                    </div>
                </Grid>
            </div>
        </Container>
    </>
  )
}

export default Account