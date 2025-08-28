import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};

export default function EditModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [editBlog, setEditBlog] = React.useState({
    category: "",
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    setEditBlog({ ...editBlog, [name]: value });
  };

  return (
    <div>
      <button onClick={handleOpen}>Edit</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, position: "relative" }}>
          Close Button
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "grey.700",
            }}
          >
          <CloseIcon />
          </IconButton>
          <h1 className="text-center font-bold text-2xl mb-5">Edit blogs</h1>
          <div className="flex flex-col gap-3">
            <TextField
              value={editBlog.category}
              onChange={handleChange}
              className="w-full m-3"
              name="category"
              id="outlined-basic"
              label="Category"
              variant="outlined"
            />
            <TextField
              value={editBlog.title}
              onChange={handleChange}
              className="w-full m-3"
              name="title"
              id="outlined-basic"
              label="Title"
              variant="outlined"
            />
            <TextField
              value={editBlog.description}
              onChange={handleChange}
              className="w-full m-3"
              name="description"
              id="outlined-basic"
              label="Description"
              variant="outlined"
            />
          </div>
          <button className="bg-blue-400 p-3 py-1 px-4 block mx-auto mt-5 rounded text-white">
            Update
          </button>
        </Box>
      </Modal>
    </div>
  );
}
