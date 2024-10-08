import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POST_COMMENTS } from "../../gql/queries";
import { Typography, Grid, Box, Avatar } from "@mui/material";

function Comment({ slug }) {
  const { loading, data } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });
  if (loading) return null;
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          کامنت ها
        </Typography>
        {data?.comments?.map((com) => (
          <Grid
            item
            xs={12}
            key={com.id}
            m={2}
            p={2}
            border="1px silver solid"
            borderRadius={1}
          >
            <Box component="div" display="flex" alignItems="center" mb={3}>
              <Avatar>{com.name[0]}</Avatar>
              <Typography component="span" variant="p" fontWeight={700} mr={1}>
                {com.name}
              </Typography>
            </Box>
            <Typography component="p" variant="p">
              {com.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Comment;
