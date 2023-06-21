import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Checkbox,
  Link,
  Image,
  Flex
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { Customthunk } from '../../redux/Action';

export const Login = () => {
  const[data,setdata]=useState({name:"",email:"",password:""})
  const[state,setstate]=useState(false)
  const dispatch=useDispatch()
  const handlechange=(e)=>{
    let { name, value } = e.target
    setstate({ ...data, [name]: value })

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target.form;
    form.submit();
    if(state){
      dispatch(Customthunk("register",data,null))
      setdata({name:"",email:"",password:""})
    }
    else{
      let data1 = {email:data.email,password:data.password}
      dispatch(Customthunk("login",data1,null))
      setdata({name:"",email:"",password:""})
    }
    

  };

  return (
    <div>

      <Stack minH="100vh" direction={{ base: 'column-reverse', md: 'row' }}>
        <Flex flex={1}>
          <Image alt="Cover image" objectFit="cover" src="https://bit.ly/2k1H1t6" />
        </Flex>
        <Flex p={8} flex={1} align="center" justify="center">
          <Stack spacing={4}>
            <Stack align="center">
              <Heading fontSize="2xl">{state?"Create your account":"Sign in to your account"}</Heading>
            </Stack>
            <VStack
              as="form"
              spacing={8}
              boxSize={{ base: 'xs', sm: 'sm', md: 'md' }}
              h="max-content !important"
              bg={useColorModeValue('white', 'gray.700')}
              rounded="lg"
              boxShadow="lg"
              p={{ base: 5, sm: 10 }}
            >
              <VStack spacing={4} w="100%">
                <form style={{width:"100%"}}>
                  {state?<>
                <FormLabel>FullName</FormLabel>
                  <Input rounded="md" type="text" value={data.name}  name='name' onChange={handlechange}  />
                  </>:null}
                
                  <FormLabel>Email</FormLabel>
                  <Input rounded="md" type="email" value={data.email}  name='email' onChange={handlechange}  />
                
                
                  <FormLabel>Password</FormLabel>
                  <Input rounded="md" type="password" value={data.password}  name='password' onChange={handlechange} />
                  </form>
                
              </VStack>
              <VStack w="100%">
                <Stack direction="row" justify="space-between" w="100%">
                  <Checkbox colorScheme="green" size="md">
                    Remember me
                  </Checkbox>
                  <Link fontSize={{ base: 'md', sm: 'md' }} onClick={()=>setstate(!state)}>{state?"Click here to Sigin?":"New user click here?"}</Link>
                </Stack>
                <Button
                  bg="green.300"
                  color="white"
                  _hover={{
                    bg: 'green.500'
                  }}
                  rounded="md"
                  w="100%"
                  onClick={handleSubmit}
                >
                 {!state? "Sign in":"Create"}
                </Button>
               
              </VStack>
            </VStack>
          </Stack>
        </Flex>
      </Stack>




    </div>
  )
}
