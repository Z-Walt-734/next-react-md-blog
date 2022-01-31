const { Typography } = require('@mui/material');

const PostCard = ({ post }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link href={post.path}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>

            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
                <div className={classes.cardDescription}>
                  {post.description}
                </div>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.excerpt}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                                Continue reading...
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Link>
    </Grid>
  );
};

export default PostCard;
