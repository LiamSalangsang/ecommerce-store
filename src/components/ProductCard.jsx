import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Link, useParams } from "react-router-dom";
import { searchContext } from "./context";
import { motion } from "framer-motion";

export default function ProductCard({ item, deal = [false, 0.0] }) {
  const { searchValue } = React.useContext(searchContext);

  return (
    item.name.toLowerCase().includes(searchValue.toLowerCase()) && (
      <motion.div
        className="p-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link to={`/products/${item.category_id}/${item.id}`} key={item.id}>
          <Card
            sx={{
              minHeight: "12rem",
              maxHeight: "13rem",
              maxWidth: "14rem",
              minWidth: "14rem",
              borderRadius: 5,
            }}
          >
            <CardActionArea>
              <div className=" flex max-h-[5.5rem] object-cover">
                <CardMedia
                  component="img"
                  className=" object-cover"
                  image={item.image}
                  alt={item.name}
                />
              </div>
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  {item.name}
                </Typography>
                <div className="text-gray-600 w-[100%] text-[0.7rem]">
                  {item.description.split(" ").slice(0, 3).join(" ")}...
                </div>

                <div>
                  <Typography
                    className="flex items-center h-[2rem] justify-center"
                    variant="body2"
                    color="text.secondary"
                  >
                    <Rating
                      className="absolute bottom-0"
                      name="read-only"
                      value={item.rating}
                      precision={0.2}
                      readOnly
                    />
                    <span className="items-center">{item.rating}/5.0</span>
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
