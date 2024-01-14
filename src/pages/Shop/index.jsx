import React, { useState } from 'react'
import Container from '../../components/Container'
import Breadcrumb from '../../components/Breadcrumb'
import Title from '../../components/Title'
import Paginate from '../../components/Paginate'
import { shopData } from './shopData'
import Grid from '../../components/Grid'
import HorizontalFilter from '../../components/HorizontalFilter'
import VerticalFilter from '../../components/VerticalFilter'

const Shop = () => {
  const [perPage, setPerPage] = useState(9);
  const [itemSort, setItemSort] = useState(null);
  
  return (
    <>
    <Container className="font-dmsans mt-12">
        <Title className="mb-3 text-5xl" title="Shop"/>
        <Breadcrumb/>
        <div className="mt-12"> 
            <Grid className="grid-cols-4 gap-6">
                <div><VerticalFilter/></div>
                <div className="col-span-3">
                    <div><HorizontalFilter  perpage={setPerPage} itemSort={setItemSort}/></div>
                    <div><Paginate itemsPerPage={perPage} itemDetails={shopData}/></div>
                </div>
            </Grid>
        </div>
    </Container>
    </>
  )
}

export default Shop