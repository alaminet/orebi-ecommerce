import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from '../Product';
import { shopData } from '../../pages/Shop/shopData';
import Grid from '../Grid';
import Flex from '../Flex';

// Example items, to simulate fetching from another resources.
// const items = [...Array(shopData.length).keys()];


export function Items({ currentItems, itemDetails }) {
    let firstItem = currentItems[0];
    let lastItem = currentItems.slice(-1)[0] + 1;
    return (
      <>
        {currentItems &&
        itemDetails?.slice(firstItem, lastItem).map((item) => (
          <div>
            <Product badge={item?.badge} title={item?.title} image={item?.image} price={item?.price} varient={item?.color}/>
          </div>
        ))}
      </>
    );
  }


const Paginate = ({ itemsPerPage, itemDetails}) => {
    const items = [...Array(itemDetails.length).keys()];
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected *  itemsPerPage) % items.length;
        // console.log(
        //   `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        setItemOffset(newOffset);
      };
  return (
    <>
        <Grid className="grid-cols-3 gap-6">
        <Items currentItems={currentItems} itemDetails={itemDetails} />
        </Grid>
        <Flex className="justify-between items-center mt-12">
        <ReactPaginate
            className="flex gap-2 items-center mt-5"
            pageClassName='border border-primary-black px-2 hover:bg-primary-black hover:text-white'
            activeClassName="bg-primary-black text-white"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
        <div className='text-sm leading-7'>Products from {itemOffset + 1} to {endOffset > itemDetails.length ? itemDetails.length : endOffset} of {itemDetails.length}</div>
        </Flex>
    </>
  )
}

export default Paginate