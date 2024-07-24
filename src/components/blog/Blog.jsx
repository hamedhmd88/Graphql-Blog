import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_AUTHORS, GET_QUERIES } from '../../gql/queries'
import { Grid } from '@mui/material';
import CardEL from '../shared/CardEL';
import Loader from '../shared/Loader';

function Blog() {
  const {loading, data, error} = useQuery(GET_QUERIES);
  const {data : author} = useQuery(GET_AUTHORS)
  console.log(author)
  return (
    <>
     {loading && <h3><Loader/></h3>}
     {error && <h3>Somthing Wrong..</h3>}
      <Grid container spacing={2}>

        {data && data.posts.map((post) => (
                  <Grid item xs={12} sm={6} md={4} key={post.id}>
                  <CardEL {...post} author={author} />
                </Grid>
        ))}

      </Grid>
    </>
  )
}

export default Blog
