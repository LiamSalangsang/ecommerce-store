import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


export default function CategoryCard({details}) {

  return (
    <>
  
     <motion.div style={{width:'90%'}}
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     transition={{delay:0.1}}>
      <section className='group hover:bg-purple-100 duration-200  hover:scale-110 border rounded-2xl flex justify-between'>
        <div className='p-4'>
          <h1 className='group-hover:scale-110 duration-200 font-bold '>{details.name}</h1>
          <div className='text-gray-600'>Looking for {details.name}?</div>
        </div>
      <img className =' mix-blend-multiply w-[10rem] h-[10rem] object-cover' src={details.images} alt={details.name} />

      </section>
       
      
     </motion.div>
  
    </>
  );
}
