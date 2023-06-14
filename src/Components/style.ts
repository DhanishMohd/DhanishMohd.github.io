import { SxProps } from "@mui/material";

export const ModalBox: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40vw",
  bgcolor: "white",
  boxShadow: 4,
  borderRadius: "0.7rem",
  padding: 3,
  paddingTop: 2,
  outline: "none",
  minHeight: "40vh",
  maxHeight: "80vh",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
};

export const ModalHeader: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  mb: 1,
};

export const CardContainer: SxProps = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: 2,
};

export const CardStyle: SxProps = {
  p: 2,
  bgcolor: "#fff",
  borderRadius: 2,
  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  position: "relative",
};

export const AddButtonContainer: SxProps = {
  position: "absolute",
  top: 5,
  right: 0,
};
