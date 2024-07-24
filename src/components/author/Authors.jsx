import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_AUTHORS } from '../../gql/queries'
import { Avatar, Card, CardHeader, Divider, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Authors() {
  const {data, loading, error} = useQuery(GET_AUTHORS);
  console.log(data)


  
  return (
    <>
      {loading && <h3>Loading...</h3>}
      {error && <h3>Error...</h3>}
      <Grid
        container
        sx={{ boxShadow: "rgba(0,0,0,0.5) 0px 4px 12px", borderRadius: 4, width: "100%" }}
      >
      {
        data && data.authors.map((item, index) => (
          <React.Fragment key={item.id}>
            <Grid  item xs={12} padding={3}>
              <Link
                to={`/authors/${item.slug}`}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none"
                }} 
              >
               <Avatar style={{height: "50px", width: "50px"}} src={item.avatar.url} sx={{ marginLeft: 2 }} />
              <div
                style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "8px"}} 
                
              >
              <Typography component="p" variant="p" color="text.secondary">
                {item.name}
              </Typography>
              <hr style={{opacity: "0"}}/>
              <Typography component="p" variant="p" sx={{fontSize: "10px", wordSpacing: "2px", fontWeight: "600", textAlign: "center", marginRight: "7px", paddingX: "12px", paddingY: "8px", backgroundColor: "rgb(44, 118, 247)", color: "white", borderRadius: "8px"}} color="text.primary">
                {item.field}
              </Typography>
              </div>
              </Link>
            </Grid>

            {
              index !== data.authors.length - 1 && (
                <Grid item xs={12}>
                  <Divider variant='middle'/>
                </Grid>
              )
            }
            

          </React.Fragment>
        ))
      }
      </Grid>
    </>
  )
}

export default Authors
