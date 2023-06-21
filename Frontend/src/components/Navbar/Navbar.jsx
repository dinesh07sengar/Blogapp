import { Avatar, Box, HStack, Heading, Image, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Box position={"sticky"} top={0} zIndex={3} bg={"white"} borderBottom={"3px solid #F0F0F0"} >
        <HStack w={"9%"}>

        <Image src='https://rb.gy/fvf1l' alt='logo' ml={"10px"} />
        <Spacer />
        
        <Link to={"/"}><Heading fontSize={"large"} mr={"20px"} ml={"1050px"}>Home</Heading></Link>
        <Link to={"/create"}><Heading fontSize={"large"} mr={"20px"}>Create</Heading></Link>
        <Link to={"/post"}><Heading fontSize={"large"} mr={"20px"}>Mypost</Heading></Link>
        <Link to={"/login"}><Heading fontSize={"large"} mr={"20px"}>Login</Heading></Link>
        <Spacer />
        <Avatar/>

        </HStack>
    </Box>
  )
}
