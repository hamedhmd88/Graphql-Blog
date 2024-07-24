

import { useQuery } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { GET_POST } from '../../gql/queries';
import Loader from '../shared/Loader';
import sanitizeHtml from 'sanitize-html';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useQuery(GET_POST, { variables: { slug } });


 

  console.log(data?.post?.admis?.name);
  console.log(data?.post?.title);

  return (
    <>
      <Container maxWidth="lg">
        {loading && <Loader/>}
        {error && <h3>Error...</h3>}
        <Grid container>
          <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
            <Typography
              component="h2"
              variant="h4"
              color="primary"
              fontWeight={700}
            >
              {data?.post?.title}
            </Typography>
            <ArrowBackRoundedIcon style={{cursor: 'pointer', fontSize: 35}} onClick={() => navigate(-1)} />
          </Grid>
          {data?.post?.coverPhoto && (
            <Grid item xs={12} mt={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src={data?.post?.coverPhoto?.url}
                alt={data.post.slug}
                width="800px"
                height="500px"
                
                style={{ borderRadius: 15 }}
              />
            </Grid>
          )}
          {data?.post?.admis && (
            <Grid item xs={12} mt={7} display="flex" alignItems="center">
              <Avatar
                src={data?.post?.admis?.avatar?.url}
                sx={{ width: 80, height: 80, marginLeft: 2 }}
              />
              <Box component="div">
                <Typography component="p" variant="h5" fontWeight={700}>
                  {data?.post?.admis?.name}
                </Typography>
                <Typography component="p" variant="p" color="text.secondary">
                  {data?.post?.admis?.field}
                </Typography>
              </Box>
            </Grid>
          )}
          {data?.post?.content && (
            <Grid item xs={12} mt={5}>
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(data?.post?.content?.html),
                }}
              ></div>
            </Grid>
          )}
          {/* <Grid item xs={12}>
            <CommentForm slug={slug} />
          </Grid>
          <Grid item xs={12}>
            <Comments slug={slug} />
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}

export default BlogPage;
