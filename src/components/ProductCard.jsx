import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { searchContext } from "./context";
import { motion } from "framer-motion";

export default function ProductCard({ item, deal = [false, 0.0] }) {
  const { searchValue } = React.useContext(searchContext);

  return (
    item.name.toLowerCase().includes(searchValue.toLowerCase()) && (
      <motion.div
        className="m-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link to={`/products/${item.category_id}/${item.id}`} key={item.id}>
          <Card
            className="md:max-h-[12rem] md:max-w-[14rem] md:min-h-[12rem] md:min-w-[14rem] rounded-lg max-h-[10rem] max-w-[10rem] min-h-[10rem] min-w-[10rem]"
          >
            <CardActionArea>
              <div className=" flex max-h-[5.5rem]">
                <CardMedia
                  component="img"
                  className=" object-cover"
                  image={item.image}
                  alt={item.name}
                />
              </div>
              <CardContent>
                <div className=" md:text-[0.9rem] line-clamp-1 text-[0.7rem]  w-full">
                  {item.name}
                </div>
                <div className="text-gray-600 md:line-clamp-1 hidden md:block min-h-[2rem] md:text-[0.9rem] ">
                  {item.description}
                </div>

                <div>
                  <Typography
                    className="flex items-center h-[2rem] justify-center"
                    variant="body2"
                    color="text.secondary"
                  >
                
                      <Rating
                      size ={"small"}
                        name="read-only"
                        value={item.rating}
                        precision={0.2}
                        readOnly
                      />
                    <span className="items-center ">{item.rating}/5.0</span>
                  </Typography>
                </div>
                {deal[0] ? (
                  <div className="absolute top-0 font-bold bg-purple-500 w-[4rem] h-[4rem]  flex-col rounded-b-lg text-white text-[0.9rem] flex gap-2 justify-center text-center">
                    <span className="line-through">${item.price} </span>$
                    {deal[1]}
                  </div>
                ) : null}
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </motion.div>
    )
  );
}
