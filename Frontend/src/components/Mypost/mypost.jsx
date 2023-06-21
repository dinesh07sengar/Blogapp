import { Avatar, HStack, Stack, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Customthunk } from '../../redux/Action'
import PreLoader from '../Preloader'
import { Blogcard } from '../Blogcard'

export const Mypost = () => {
    const dispatch =useDispatch()
    const data = useSelector((state)=>state.userdata)
    useEffect(()=>{
        dispatch(Customthunk("mypost",null,null))

    },[])
  return (
    <div>
        {data.length<1?<PreLoader/>:
        <>
        
        <Stack>
            <VStack>
                <Avatar/>
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
            </VStack>
        </Stack>
        {data.map((ele,i)=>{
            return <Blogcard key={i+1} ele={ele}/>
        })}
        </>
        
        }

    </div>
  )
}
