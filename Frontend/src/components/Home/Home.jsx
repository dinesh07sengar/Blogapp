import React, { useEffect, useState } from 'react'
import Slideshow from '../Slideshow'
import {Blogcard} from '../Blogcard'
import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { Customthunk } from '../../redux/Action'
import { useDispatch, useSelector } from 'react-redux'
import PreLoader from '../Preloader'

export const Home = () => {
    const dispatch = useDispatch()
    const [state, setstate] = useState(null)

    
    let data= useSelector((state)=>state.alldata)
    console.log(data)
    useEffect(()=>{
        dispatch(Customthunk("get",null,null))


    },[])
    return (
        <>{data.length<1?<PreLoader/>:
        <div>
            <Box w={"100%"}   h={"50vh"}>  
                <Slideshow />
            </Box>
            <SimpleGrid columns={[1,2,3,3]} gap={"2%"} p={"2%"}>
                {data.map((ele,i)=>{
                    return <Blogcard ele={ele} key={i+1}/>
                })} </SimpleGrid>



        </div>
        }
        </>
    )
}
