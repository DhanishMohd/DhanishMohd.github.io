import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  Modal,
  TextField,
  TextFieldProps,
  Typography,
  debounce,
} from "@mui/material";
import { ModalBox, ModalHeader } from "./style";
import { Close } from "@mui/icons-material";
import { useMemo, useState } from "react";
import { TimePicker } from "@mui/x-date-pickers";
import { AxiosResponse } from "axios";
import http from "../utils/http";

type Props = {
  handleModal: (visibility: boolean, data?: any) => void;
  data: any;
};

const AddFoodModal = ({ handleModal, data, setFoodList, foodList }: any) => {
  const [buttonLoader, setButtonLoader] = useState(false);

  const [serving, setServing] = useState("1");
  const [notes, setNotes] = useState("");
  const [time, setTime] = useState<any>(null);

  const closeModal = () => {
    handleModal(false, null);
  };

  const handleSubmit = () => {
    const body = {
      ...data,
      serving: serving || "1",
      notes: notes || "-",
      time: time || null,
    };
    localStorage.setItem("food-list", JSON.stringify([body, ...foodList]));
    setFoodList((prev: any) => [body, ...prev]);
    handleModal(false, null);
  };

  return (
    <Modal open={true} onClose={closeModal}>
      <Box sx={ModalBox}>
        <Box sx={ModalHeader}>
          <Typography variant="h6">Add Food</Typography>
          <IconButton onClick={closeModal}>
            <Close />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ pt: 2 }}>
          <TextField
            label={"Number of Servings"}
            fullWidth
            type="number"
            value={serving}
            onChange={(e) => setServing(e.target.value)}
            sx={{ mb: 2.5 }}
          />
          <TextField
            fullWidth
            label={"Enter Notes"}
            multiline
            minRows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            sx={{ mb: 2.5 }}
          />
          <TimePicker
            format="hh:mm a"
            value={time}
            onChange={(newValue: any) => setTime(newValue)}
            label="Select Time"
            // slots={{
            //   textField: (params) => (
            //     <TextField
            //       {...params}
            //       inputProps={{
            //         ...params.inputProps,
            //         readOnly: true,
            //         //   placeholder: "Select time",
            //       }}
            //     />
            //   ),
            // }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 1.5,
              mt: 3,
            }}
          >
            <Button variant="outlined" onClick={closeModal}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSubmit}>
              Add
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddFoodModal;
