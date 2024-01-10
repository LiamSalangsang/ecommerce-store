import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { productsContext } from './context';


export default function BreadCrumbs({thisItem}) {
  const {categories} = React.useContext(productsContext)
  const thisCategoryForItem = categories.find(category=> category.id == thisItem.category_id)
  const navigate = useNavigate()

  function handleClick(event) {
    event.preventDefault();
    console.log(event.target.name)
    navigate(event.target.name)
  }

  return (
    <div  role="presentation" onClick={handleClick}>
      <Breadcrumbs  separator="›" aria-label="breadcrumb">
        <Link  underline="hover" name = "/products" color="inherit" >
            All Products
          </Link>
          <Link underline="hover" name = "/discover" color="inherit" >
           Categories
          </Link>
          <Link underline="hover" name = {`/${thisCategoryForItem.id}`} color="inherit" >
            {thisCategoryForItem.name}
          </Link>
          <Link
            underline="hover"
            color="inherit"
            className='cursor-pointer'
            name = {`/${thisItem.id}`
            }
          >
            {thisItem.name}
          </Link>
      </Breadcrumbs>
    </div>
  );
}