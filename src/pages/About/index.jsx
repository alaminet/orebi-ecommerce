import React from 'react'
import Container from '../../components/Container'
import Title from '../../components/Title'
import Breadcrumb from '../../components/Breadcrumb'
import Grid from '../../components/Grid'
import Card from '../../components/Card'
import visionImg from '../../assets/images/product_1.webp'
import storyImg from '../../assets/images/product_2.webp'
import brandImg from '../../assets/images/product_3.webp'

const About = () => {
  return (
    <>
        <Container className="font-dmsans mt-12">
            <Title className="mb-3 text-5xl" title="About"/>
            <Breadcrumb/>
            <div className='my-12'>
                <div className='my-5'>
                    <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, veniam. Minus, quidem commodi. Unde, officia recusandae vitae ad laudantium eveniet!</p>
                </div>
                <div>
                    <Grid className="grid-cols-3 gap-6">
                        <div>
                            <Card title="Our Vision" cardImg={visionImg}>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum soluta porro, qui amet earum tenetur quae. Quas est a voluptatibus sunt eaque! Temporibus explicabo eius, natus laboriosam molestias facere quisquam.</p>
                            </Card>
                        </div>
                        <div>
                            <Card title="Our Store" cardImg={storyImg}>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum minima blanditiis, asperiores doloremque fugit, quae velit minus vel reprehenderit tenetur nisi eligendi voluptates similique labore!</p>
                            </Card>
                        </div>
                        <div>
                            <Card title="Our Brand" cardImg={brandImg}>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat magni consequuntur qui quo officia culpa magnam nostrum quae, repudiandae modi!!</p>
                            </Card></div>
                    </Grid>
                </div>
            </div>

        </Container>
    
    </>
  )
}

export default About