import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import toast from "react-hot-toast";
import { isNumeric } from "../../public/helper";

const Filter = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRange, setSelectedRange] = useState({ "min": 0, "max": 99999 });

  useEffect(() => {
    if(selectedRange.min == ''){
      setSelectedRange({...selectedRange,min:0})
    }
  }, []);

  function handleBrandCheckboxChange(e) {
    console.log(e.target);
    const brand = e.target.value;
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(
        selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      );
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  }

  function handleDealsFilter(e) {
    console.log(e.target.value);
  }

  function handlePriceChange(e) {
    if (isNumeric(e.target.value) || e.target.value == "") {
      if (e.target.name == "max") {
        if (parseInt(e.target.value) < selectedRange.min) {
          toast.error("your minimum is greater than your maximum");
        }else {
          console.log("selectedRange",{...selectedRange, max:parseInt(e.target.value)})
          setSelectedRange({...selectedRange,max:parseInt(e.target.value)})
        }
      } 
      if(e.target.name == "min") {
        if (e.target.value==''){
          setSelectedRange({...selectedRange,min:0})
        }

        if (e.target.value > selectedRange.max) {
          if (e.target.value !== 0) {
            toast.error("your maximum is smaller than your minimum");
          }
        } else {
          console.log("selectedRange",{...selectedRange, min:parseInt(e.target.value)})
          setSelectedRange({...selectedRange,min:parseInt(e.target.value)})
        }
      } 

    } else {
      toast.error("check that price is not negative and is a number!");
    }




  }

  return (
    <div className="h-[300vh]">
      <aside className=" bg-black/20 w-[19rem] sticky top-[2rem]">
        <h1 className="text-2xl font-bold underline pl-2">Filter</h1>
        <div className="pl-[0.5rem] flex gap-2">
          <input
            type="checkbox"
            id="deals"
            name="deals"
            value="deals"
            onChange={handleDealsFilter}
          />
          <label htmlFor="Deals">Deals</label>
        </div>

        <div>
          <Box
            sx={{
              width: "90%",
              paddingLeft: "0.5rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label className="font-bold text-lg" htmlFor="Brand Filter">
              Filter by Brand
            </label>
            <form>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="bosefilter"
                  name="bose"
                  value="Bose"
                  checked={selectedBrands.includes("Bose")}
                  onChange={handleBrandCheckboxChange}
                />
                <label htmlFor="bosefilter">Bose</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="applefilter"
                  name="apple"
                  value="Apple"
                  checked={selectedBrands.includes("Apple")}
                  onChange={handleBrandCheckboxChange}
                />
                <label htmlFor="applefilter">Apple</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="sonyfilter"
                  name="sony"
                  value="Sony"
                  checked={selectedBrands.includes("Sony")}
                  onChange={handleBrandCheckboxChange}
                />
                <label htmlFor="sonyfilter">Sony </label>
              </div>
            </form>
          </Box>
          <Box sx={{ width: "90%", height: "90vh", paddingLeft: "0.5rem" }}>
            <label className="font-bold text-lg" htmlFor="Price Filter">
              {" "}
              Filter by Price
            </label>
            <form className="grid grid-cols-2">
              <div className="flex items-center mb-2">
                <label htmlFor="Price Filter" className="text-lg mr-2">
                  Min
                </label>
                <input
                  className="border border-black text-black max-w-[50%]"
                  type="text"
                  name="min"
                  value = {selectedRange.min}
                  onChange={handlePriceChange}
                />
              </div>
              <div className="flex items-center mb-2">
                <label htmlFor="Price Filter" className="text-lg mr-2">
                  Max
                </label>
                <input
                  className="max-w-[50%] border text-black border-black"
                  type="text"
                  name="max"
                  value = {selectedRange.max}
                  
                  onChange={handlePriceChange}
                />
              </div>
              <div className="flex justify-center "></div>
            </form>
          </Box>
        </div>
      </aside>
    </div>
  );
};

export default Filter;
