import { Stack } from "@mui/material";

import image from '../assets/IMG_20200829_225957_985.jpg'
const HomeInfo=()=>{
    return(
        <Stack direction='row' sx={{backgroundColor:'black',height:'100%'}}>
            <Stack direction='column' sx={{width:'100%',backgroundColor:'lightblue' }}>

                <Stack width='50%' height='auto' margin='10%' marginLeft='20%'sx={{backgroundColor:'brown'}}>
                    <h2>skills</h2>
                </Stack>

                <Stack width='20%'>
                 <div className="skills" style={{ marginLeft: '152px', marginTop: '-59px', border: 'solid 5px black' }}>
                    <ul>
                        <li>python</li>
                        <li>java</li>
                        <li>javascript</li>
                        <li>react</li>
                        <li>oops</li>

                    </ul>
                    </div>
                </Stack>
                <Stack  width='50%'  margin='10%' marginLeft='20%'sx={{backgroundColor:'brown'}}>
                    <h3>contact us</h3>
                </Stack>
                <Stack width='20%'>
                 <div className="contact us" style={{ marginLeft: '152px', marginTop: '-59px', border: 'solid 5px black' }}>
                    <ul>
                        <li>email: atharvalonikar95@gmail.com</li>
                        <li>phone: 8484941103</li>
                        </ul>
                        </div>
                </Stack>

            </Stack>

            <Stack direction='column' alignItems='center' justifyContent='center' sx={{width:'100%',backgroundColor:'lightblue'}}>
            <img src={image}   alt="cannot display" style={{bottom:0,borderRadius:'10%',
                   width: '45%',height:'45%',marginRight:80,marginBottom:20,marginTop:-102,bordertopwidth: 10, right:10,border:'solid 5px black',bordertopwidth:'10'}}></img>

                <Stack width='50%' height='12%' marginLeft='-7%' border='solid 5px black'   sx={{backgroundColor:'red',color:'wheat',borderRadius:'5%',paddingRight:'65'}}>
                    <div className="passion" style={{paddingLeft:'10',}}>
                    <h2><i>Software developer</i></h2>
                    </div>
                    
                </Stack>
    
            </Stack>
            

        </Stack>
        
    )
}

export default HomeInfo;