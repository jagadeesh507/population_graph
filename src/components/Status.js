import React from 'react'
import {Flex,chakra,Progress} from "@chakra-ui/react"
function Status({country,maxval}) {
    console.log(maxval)
  return (
    <Flex justifyContent={"space-between"} direction={"row"} py="15px" mx="20px"  >
        <chakra.p w="10vw" alignContent={"left"}>{country["Country Name"]}</chakra.p>
        <Progress w={"50vw"} value={(country.Value/maxval)*100} size={"lg"} rounded={"lg"}/>
        <chakra.p w="10vw">{country.Value}</chakra.p>
    </Flex>
  )
}

export default Status