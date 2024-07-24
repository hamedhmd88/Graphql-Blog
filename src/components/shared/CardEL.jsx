import { useQuery } from "@apollo/client";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";



function CardEL({title, slug, coverPhoto, admis}) {



  return (
    <>

     
      <Card className="card" sx={{ boxShadow: "rgba(0,0,0,0.5) 0px 4px 12px", borderRadius: 4, transition: 'transform 0.3s', '&:hover': {transform: 'translateY(-5px)'} }}>

      {admis && (
        <CardHeader
          avatar={<Avatar src={admis.avatar.url} sx={{ marginLeft: 2 }} />}
          title={
            <Typography component="p" variant="h5" color="text.secondary">
              {admis.name}
            </Typography>
          }
        />
      )}

    <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={slug}
      />
        <CardContent>
        <Typography
          component="h3"
          variant="h6"
          color="text.primary"
          fontWeight={600}
        >
          {title}
        </Typography>
        </CardContent>

        <Divider variant="middle" sx={{ margin: "10px" }} />

      <CardActions>
        <Link
          to={`/blog/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{ width: "100%", borderRadius: 3 }}
          >
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
    </>
  )
}

export default CardEL
