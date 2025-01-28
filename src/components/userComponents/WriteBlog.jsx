import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBlogRequest } from "../../redux/action";
import {
  Box,
  Button,
  TextField,
  Typography,
  Input,
  Card,
  CardMedia,
} from "@mui/material";
import { toast } from "react-hot-toast"; // Import toast

const WriteBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });

    // Generate image preview
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleClick = async () => {
    if (!formData.title || !formData.content || !formData.image) {
      toast.error("Please fill in all fields and upload an image.");
      return;
    }

    const data = new FormData();
    data.append("title", formData.title);
    data.append("content", formData.content);
    data.append("image", formData.image);

    try {
      dispatch(createBlogRequest(data));
      toast.success("Blog posted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to post the blog. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
        maxWidth: "80%",
        margin: "0 auto",
        boxShadow: 3,
        borderRadius: 2,
        mt: 5,
        backgroundColor: "background.paper",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "text.primary", textAlign: "center" }}
      >
        Write Your Blog
      </Typography>

      <TextField
        fullWidth
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        sx={{
          input: { color: "text.primary" },
          label: { color: "text.secondary" },
          ".MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "primary.main",
            },
            "&:hover fieldset": {
              borderColor: "primary.main",
            },
          },
        }}
      />

      <TextField
        fullWidth
        label="Content"
        name="content"
        value={formData.content}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        multiline
        rows={8}
        sx={{
          input: { color: "text.primary" },
          label: { color: "text.secondary" },
          ".MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "primary.main",
            },
            "&:hover fieldset": {
              borderColor: "primary.main",
            },
          },
        }}
      />

      <Input
        type="file"
        onChange={handleFileChange}
        sx={{
          mt: 2,
          color: "text.secondary",
        }}
      />

      {imagePreview && (
        <Card
          sx={{
            mt: 3,
            width: "100%",
            maxWidth: 300,
            height: 200,
            overflow: "hidden",
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <CardMedia
            component="img"
            image={imagePreview}
            alt="Preview"
            sx={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
          />
        </Card>
      )}

      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        sx={{ mt: 3, width: "50%" }}
      >
        Post Blog
      </Button>
    </Box>
  );
};

export default WriteBlog;
