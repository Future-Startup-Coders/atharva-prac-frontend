import {Stack, colors } from '@mui/material'
import HomeInfo from './HomeInfo'
import NavBar from './NavBar'



const Home=()=>{
    return(
        <>

        <Stack sx={{
            height:"100vh", backgroundColor:'brown'

            
        }}>  
        <h1 style={{color:'red'}}>
        <marquee behavior="" direction="">Welcome to my portfolio</marquee>  
        </h1>
            <NavBar/>
            <HomeInfo/>
            
        
        
        </Stack>
            </>
    )
}
export default Home