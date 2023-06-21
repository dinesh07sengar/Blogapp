import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, HStack, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs"
import { FiEdit } from "react-icons/fi"
import { MdAutoDelete } from "react-icons/md"
import {FcShare} from "react-icons/fc"
import {FaComments} from "react-icons/fa"
import { Link } from 'react-router-dom'

export const Blogcard = ({ele}) => {
  return (
    <Box >
      <Card>
        <CardHeader>
          <HStack>
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
                <MenuItem icon={<FiEdit />}>edit post</MenuItem>
                <MenuItem icon={<MdAutoDelete />}>delete post</MenuItem>

              </MenuList>
            </Menu>

          </HStack>

        </CardHeader>
        <CardBody >
          <Image src={ele.image} alt='blog'  w={"100%"}/>
          <Box>
            <Heading size={"lg"} noOfLines={1} my={"3%"}>{ele.Headline}</Heading>
            <Text noOfLines={3}>{ele.desc}
            </Text>
          </Box>
        </CardBody>
        <CardFooter>
          <Link to="/single" state={ele}><Button>Read more..</Button></Link>
          <Spacer/>
          <Button bg={"none"}><FaComments/></Button>
          <Spacer/>
          <Button bg={"none"}><FcShare/></Button>

        </CardFooter>
      </Card>
    </Box>
  )
}
