import React, { useEffect, useState } from 'react'
import { Fragment } from 'react';

import {
    Container,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    VStack,
    Flex,
    Text,
    Icon,
    useToast,
    
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { Customthunk } from '../../redux/Action';
import { useDispatch, useSelector } from 'react-redux';

export const Createpost = () => {
    const [state, setstate] = useState({ image: "", user: "", Headline: "", desc: "" })
    let dispatch = useDispatch()
    const toast = useToast()
    const location = useLocation()
    let ele = location.state

    const isAuth = useSelector((state) => state.isAuth)
    const handlechange = (e) => {
        let { name, value } = e.target
        setstate({ ...state, [name]: value })

    }
    const handleclick = () => {
        if (isAuth) {
            if (ele !== null) {
                dispatch(Customthunk("update", state, state._id))

            }
            else {

                dispatch(Customthunk("post", state, null))

            }


        }else{
            toast({
                title:  "Plzz login first",
                status: error,
                isClosable: true,
              })
        }

    }

    useEffect(() => {
        if (ele !== null) {
            setstate(ele)
        }

    }, [ele])
    console.log(ele)
    return (
        <div>
            <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }}>
                <Stack spacing={10}>


                    <VStack

                        spacing={8}
                        w="100%"
                        bg={useColorModeValue('white', 'gray.700')}
                        rounded="lg"
                        boxShadow="lg"
                        p={{ base: 5, sm: 10 }}
                    >
                        <form style={{ width: "100%", minHeight: "30vh" }} >
                            <VStack spacing={4} w="100%">

                                <Stack w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>

                                    <FormLabel >Image</FormLabel>
                                    <Input type="text" placeholder="Ahmad" rounded="md" disabled={ele !== null} value={state.image} name='image' onChange={handlechange} />



                                    <FormLabel>Email</FormLabel>
                                    <Input type="email" placeholder="test@test.com" rounded="md" value={state.user} disabled />

                                </Stack>

                                <FormLabel ml={"-92%"} mb={"-0.5%"}>Subject</FormLabel>
                                <Input type="text" placeholder="Are you available for freelance work?" rounded="md" size={"lg"} value={state.Headline} name='Headline' onChange={handlechange} />


                                <FormLabel ml={"-92%"} mb={"-0.5%"}>Message</FormLabel>
                                <Textarea size="lg" placeholder="Enter your message" rounded="md" minH={"20vh"} value={state.desc} name='desc' onChange={handlechange} />


                            </VStack>
                            <VStack w="100%">
                                <Button
                                    bg="green.300"
                                    color="white"
                                    _hover={{
                                        bg: 'green.500'
                                    }}
                                    rounded="md"
                                    w={{ base: '100%', md: 'max-content' }}
                                    type='submit'
                                    mt={"1%"}
                                    onClick={handleclick}
                                >
                                    Post your data
                                </Button>
                            </VStack>
                        </form>
                    </VStack>
                </Stack>
            </Container>

        </div>
    )
}
