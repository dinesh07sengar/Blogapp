import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, HStack, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs"
import { FiEdit } from "react-icons/fi"
import { MdAutoDelete } from "react-icons/md"
import {FcShare} from "react-icons/fc"
import {FaComments} from "react-icons/fa"
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Customthunk } from '../../redux/Action'

export const Singlepost = () => {
    const location = useLocation()
    let ele = location.state
    const isAuth = useSelector((state) => state.isAuth)
    let dispatch =useDispatch()

    const handledelete=()=>{
        if(isAuth){
            dispatch(Customthunk("delete",null,ele._id))

        }

    }

    return (
        <Box p={"2%"}>
            
            <Card>
                <CardHeader>
                    <VStack>
                        
                       
                        <HStack >
                        <Avatar />
                            <Box>
                                <Heading as='h5' size={"md"}>{ele.user}</Heading>
                                <Text>{ele.user}</Text>

                            </Box>
                            <Spacer />
                            <Menu isLazy>
                                <MenuButton
                                    px={4}
                                    py={2}
                                    transition='all 0.2s'
                                    borderRadius='none'
                                    borderWidth='none'

                                >
                                    <BsThreeDotsVertical />
                                </MenuButton>
                                <MenuList>
                                    <Link to="/create" state={ele}><MenuItem icon={<FiEdit />}>edit post</MenuItem></Link>
                                    <MenuItem icon={<MdAutoDelete />} onClick={handledelete}>delete post</MenuItem>

                                </MenuList>
                            </Menu>
                        </HStack>
                    </VStack>
                </CardHeader>
                <CardBody>
                    <Heading mb={"2%"}>
                        {ele.Headline}
                    </Heading>
                    <Divider/>
                    <Image src={ele.image} alt='blog'  w={"100%"} maxH={"60vh"} objectFit={"cover"}/>
                    <Text mt={"1%"} fontSize={"lg"}>
                        {ele.desc}
                        </Text>
                </CardBody>
                <CardFooter>
          <Button>Back</Button>
          <Spacer/>
          <Button bg={"none"}><FaComments/></Button>
          <Spacer/>
          <Button bg={"none"}><FcShare/></Button>

        </CardFooter>
            </Card>
        </Box>
    )
}
