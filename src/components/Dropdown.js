import React, { useEffect, useState } from "react";
import { Progress, Select, Flex, Box } from "@chakra-ui/react";
import Status from "./Status";
function Dropdown() {
  const [population, setPopulation] = useState([]);
  const [year, setYear] = useState(1997);
  const [max, setMax] = useState(0);
  const Years=[1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000]
  const Fetchpopulation = async () => {
    const data = await fetch(
      "https://codejudge-question-artifacts.s3.ap-south-1.amazonaws.com/poplution-countries-yearwise.json"
    );
    const res = await data.json();
    setPopulation(res);
  };

  const MaxValue = () => {
    let mx = 0;
    population.map((country) => {
      if (country.Value > mx) {
        mx = country.Value;
      }
    });
    setMax(mx);
  };

  useEffect(() => {
    MaxValue();
    Fetchpopulation();
  }, []);
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      mt={"20px"}
    >
      <Box>
        <Select w={"50vw"} onChange={(e) => setYear(e.target.value)}>
         {
          Years.map((val,index)=>(
            <option key={index} value={val}>{val}</option>
          ))
         }
        </Select>
        {console.log(max)}
      </Box>
      <Flex mt="20px" direction={"column"} w="full">
        {population
          .filter((country) => country.Year == year)
          .sort((a, b) => b.Value - a.Value)
          .map((val, index,array) => (
            <Status key={index} country={val} maxval={max} />
          ))}
      </Flex>
    </Flex>
  );
}

export default Dropdown;
