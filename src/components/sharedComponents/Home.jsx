import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs, userDataRequest } from "../../redux/action";
import heroImage from "../../assets/hero.jpg";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";

const Home = () => {
  const { blogs, loading: blogsLoading, message: blogsMessage } = useSelector(
    (state) => state.blogsRequest
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBlogs());
    dispatch(userDataRequest()); // User data dispatch call added
  }, [dispatch]);

  return (
    <Box
      sx={{
        backgroundColor: "#f7f9fc",
        minHeight: "100vh",
        paddingBottom: "2rem",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          color: "#fff",
          padding: "5rem 1rem",
          textAlign: "center",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: "bold",
            textShadow: "2px 2px 5px rgba(0,0,0,0.5)",
            fontSize: "3rem",
          }}
        >
          Explore Our Blogs
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textShadow: "2px 2px 5px rgba(0,0,0,0.5)",
            fontSize: "1.2rem",
          }}
        >
          Discover the latest articles, tips, and insights from our blog
          writers.
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: "center",
            marginBottom: "2rem",
            color: "#3f51b5",
            fontWeight: "bold",
          }}
        >
          Blogs
        </Typography>

        {blogsLoading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <CircularProgress />
          </div>
        )}

        {blogsMessage && (
          <Typography
            color="error"
            variant="body1"
            sx={{ marginTop: "1rem", textAlign: "center" }}
          >
            Error: {blogsMessage}
          </Typography>
        )}

        {!blogsLoading && blogs && blogs.length > 0 ? (
          <Grid container spacing={3}>
            {blogs.map((blog) => (
              <Grid item xs={12} sm={6} md={4} key={blog._id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={blog.imageUrl}
                    alt={blog.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {blog.content.slice(0, 100)}...
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          !blogsLoading &&
          blogs.length === 0 && (
            <Typography
              variant="body1"
              sx={{ marginTop: "2rem", textAlign: "center" }}
            >
              No blogs available.
            </Typography>
          )
        )}
      </Container>
    </Box>
  );
};

export default Home;
