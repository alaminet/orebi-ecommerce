import React from 'react'
import Container from '../../components/Container'
import Title from '../../components/Title'
import Breadcrumb from '../../components/Breadcrumb'
import Grid from '../../components/Grid'

const ProductInside = () => {
  return (
    <>
    <Container className="font-dmsans mt-12">
        <Title className="mb-3 text-5xl" title="Product"/>
        <Breadcrumb/>
        <div className="mt-12"> 
            <Grid className="grid-cols-2 gap-6">
                <div>grid1</div>
                <div>grid2</div>
                <div>grid3</div>
                <div>grid4</div>
            </Grid>
        </div>
    </Container>
    </>
  )
}

export default ProductInside