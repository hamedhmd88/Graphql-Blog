import { Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <>
      <footer>
      <Typography
        component="p"
        variant="h6"
        bgcolor="rgb(44, 118, 247)"
        color="white"
        padding="10px"
        textAlign="center"
        mt={10}
      >
        پروژه وبلاگ با GraphQL | وبلاگ برنامه نویسی 
      </Typography>
    </footer>
    </>
  )
}

export default Footer
