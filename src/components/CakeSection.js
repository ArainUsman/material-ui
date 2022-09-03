import { Typography, Card, CardMedia, CardContent, Stack } from '@mui/material'

import React from 'react'

const CakeSection = () => {

  const cakes = [
    {
      name: 'Cup Cake',
      img: 'https://images.unsplash.com/photo-1622896784083-cc051313dbab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Chocolate Cake',
      img: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNha2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Sweet Cake',
      img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNha2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Birthday Cake',
      img: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Donk Cake',
      img: 'https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Yummy Cake',
      img: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    }
  ]

  return (
    <>
      <Typography variant='h4' p='2rem'>
        Delicious Cakes
      </Typography>

      <Stack direction='row' justifyContent='space-evenly' flexWrap='wrap'>

        {
          cakes.map(cake => {
            return (
              <Card sx={{ maxWidth: '300px', mb: 2 }}>
                <CardMedia sx={{ borderRadius: 2 }}
                  component="img"
                  height="200"
                  image={cake.img}
                  alt="CakeImg"
                />
                <CardContent>
                  <Typography variant="h5">
                    {cake.name}
                  </Typography>
                </CardContent>
              </Card>
            )
          })
        }

      </Stack>
    </>
  )
}

export default CakeSection
