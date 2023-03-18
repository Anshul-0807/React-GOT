import React from 'react'
import { Box, Card, styled , Typography} from '@mui/material';

const Image = styled('img')({
    width: '100%',
    height: 300
})

const Component = styled(Card)`
width: 200px;
margin: 10px;
position: relative;
`
const Container = styled(Box)`
position: absolute;
top: 0;
color: #fff;
height: 300px;
width:100%;
background: #000;
opacity: 0.5;
`

const Character = ({value}) => {
    console.log(value)
  return (
    value.characterImageFull?
        <Component>
            <Image src={value.characterImageFull} alt="" />
            <Container>   
                <Typography>Name: {value.characterName}</Typography>
                <Typography>Real Name: {value.actorName}</Typography>
                <Typography>Real House : {value.houseName}</Typography>
                <Typography>Real Nickname : {value.nickname}</Typography>

            </Container>
        </Component>
        :''
  )
}

export default Character;