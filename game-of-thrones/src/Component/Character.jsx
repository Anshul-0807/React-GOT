import React from 'react'
import { Card, styled } from '@mui/material';

const Image = styled('img')({
    width: '100%',
    height: 300
})


const Character = ({value}) => {
    console.log(value)
  return (
    value.characterImageFull?
        <Card>
            <Image src={value.characterImageFull} alt="" />
        </Card>
        :''
  )
}

export default Character;