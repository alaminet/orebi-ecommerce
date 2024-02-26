import React, { useState } from 'react'
import Container from '../../components/Container'
import Title from '../../components/Title'
import Image from '../../components/Image'
import Breadcrumb from '../../components/Breadcrumb'
import defaultPic from '../../assets/images/productImg.webp'
import Flex from '../../components/Flex'
import Grid from '../../components/Grid'
import ReviewStar from '../../components/ReviewStar'
import ColorPallet from '../../components/FilterCategory/ColorPallet'
import Quantity from '../../components/Quantity'
import Button from '../../components/Button'
import ButtonAlt from '../../components/ButtonAlt'
import Accordion from '../../components/Accordion'
import ReviewForm from '../../components/ReviewForm'
import SpecialOffer from '../../components/SpecialOffer'

const ProductInside = () => {
  const [sizeSelect, setSizeSelect] = useState("M");
  const [showTab, setShowTab] = useState("review")

  console.log(sizeSelect);
  return (
    <>
    <Container className="font-dmsans mt-12">
        <Title className="mb-3 text-5xl" title="Product"/>
        <Breadcrumb/>
        <div>
          <Grid className="grid-cols-2 gap-5">
              <div className="mt-12"> 
                <Grid className="gap-3 grid-cols-2">
                    <div>
                      <Image src={defaultPic} alt="product Img"/>
                    </div>
                    <div>
                      <Image src={defaultPic} alt="product Img"/>
                    </div>
                    <div>
                      <Image src={defaultPic} alt="product Img"/>
                    </div>
                    <div>
                      <Image src={defaultPic} alt="product Img"/>
                    </div>
                </Grid>
            </div>
            <div className='mt-12'>
              <Title className="text-4xl" title="Product Title"/>
              <Flex className="gap-2 items-center">
                <ReviewStar reviewStarCount={3}/>
                <div>
                  <p><span>1</span> Review</p>
                </div>
              </Flex>
              <Flex className="gap-3 items-center border-b pb-4">
                <div>
                  <p className='text-base line-through'><span>$</span>8.99</p>
                </div>
                <div>
                  <p className='text-xl font-bold'><span>$</span>7.99</p>
                </div>
              </Flex>
              <Flex className="items-center gap-4 my-4">
                <div className='text-base font-bold uppercase'>Color:</div>
                <Flex className="items-center">
                  <ColorPallet className="bg-[#ff0000]"/>
                  <ColorPallet className="bg-[#FFFF00]"/>
                  <ColorPallet className="bg-[#FFC0CB]"/>
                  <ColorPallet className="bg-[#008000]"/>
                </Flex>
              </Flex>
              <Flex className="gap-3">
                  <div className='text-base font-bold uppercase'>Size:</div>
                  <div>
                    <select onChange={(e)=> setSizeSelect(e.target.value)} class="font-dmsans border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                        <option value="XXXL">XXXL</option>
                    </select>
                  </div>
              </Flex>
              <Quantity className="border-b pb-4"/>
              <Flex className="gap-3">
                <div className='text-base font-bold uppercase'>Status:</div>
                <div>In Stock</div>
              </Flex>
              <Flex className="gap-3 py-4">
                <Button title="Add to Wishlist" href="#" />
                <ButtonAlt title="Add to cart" href="#" />
              </Flex>
              <div>
                <Accordion title="Feature & Details" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, soluta?"/>
              </div>
              <div>
                <Accordion title="Shipping & Returns" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, soluta?"/>
              </div>
            </div>
          </Grid>
        </div>
        <div>
          <Flex className="gap-3 text-gray-400 mt-5">
            <h6 className={`text-xl cursor-pointer ${showTab == "details" && "text-primary-black"}`} onClick={()=> setShowTab("details")}>Details</h6>
            <h6 className={`text-xl cursor-pointer ${showTab == "review" && "text-primary-black"}`} onClick={()=> setShowTab("review")}>Review <span>(1)</span></h6>
          </Flex>
          <div className='mt-12'>
            {
              showTab == "review" ? (
                <>
                  <div className='mt-5'>
                    <p className='text-sm pb-5 border-b text-[#767676]'>1 review for product</p>
                    <Flex className="gap-3 items-center">
                      <p className='text-base font-bold'>Johan Ford</p>
                      <ReviewStar reviewStarCount={4}/>
                    </Flex>
                    <p className='text-base text-[#767676]'>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta eos temporibus minima consectetur incidunt suscipit. Magni voluptatem perferendis assumenda doloribus quasi, corrupti nostrum fugit. Magni voluptas perferendis consequuntur laborum nulla?
                    </p>
                    <div className='w-1/3'>
                      <ReviewForm/>
                    </div>
                  </div>
                </>
              ) : showTab == "details" && (
                <>
                <div>
                  <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rerum totam fuga, illum adipisci velit repudiandae at cumque omnis? Fugit vel voluptatum alias, voluptatem sed error dicta eius ad, inventore possimus nesciunt, dolorum doloribus delectus asperiores aperiam ullam dolorem numquam! Odit, ducimus. Labore iusto cumque nihil tenetur. Ad, dolore laborum!</p>
                  </div>
                </div>
                </>
              )
            }
          </div>
        </div>
        <div>
        <SpecialOffer/>
        </div>
    </Container>
    </>
  )
}

export default ProductInside