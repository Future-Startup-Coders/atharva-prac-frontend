import { Stack,Button } from "@mui/material";

const NavBar=()=>{
    return(
        <Stack direction='row'  alignItems='center' justifyContent='space-between' sx={{height:'10vh',pl:2,pr:2,backgroundColor:'skyblue'}}>
            <Stack>
                <Button sx={{fontSize:20}} variant="text" style={{color:'red'}} >Atharva</Button>
            </Stack>
            <Stack spacing={1} style={{color:'red'}} direction='row' >
                <Button  style={{color:'red'}} variant="outlined">Home</Button>
                <Button style={{color:'red'}} variant="outlined">About</Button>
                <Button style={{color:'red'}} variant="outlined">Skills</Button>
                <Button style={{color:'red'}} variant="outlined">Contact</Button>
            </Stack>

        </Stack>
        
    )

}
export default NavBar;