import {
  Box,
  Chip,
  CircularProgress,
  TextField,
  Typography,
  debounce,
  IconButton,
} from "@mui/material";
import { AxiosResponse } from "axios";
import React, { useMemo, useState } from "react";
import http from "../utils/http";
import { AddButtonContainer, CardContainer, CardStyle } from "./style";
import { Add, AddCircle } from "@mui/icons-material";
import AddFoodModal from "./AddFoodModal";

const SearchResults = ({ foodList, setFoodList }: any) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleModal = (visibility: boolean, data?: any) => {
    setShowModal(visibility);
    setSelectedItem(data);
  };

  const handleSearch = useMemo(
    () =>
      debounce(async (value: string) => {
        try {
          if (value) {
            setLoading(true);
            let url = `/foods/search?query=${value}`;

            const res: AxiosResponse = await http.get(url);
            const newData = res.data?.foods?.map((item: any) => {
              return {
                desc: item?.description || "-",
                brandName: item?.brandName || "-",
                brandOwner: item?.brandOwner || "-",
                id: item?.fdcId || "-",
                type: item?.dataType || "",
              };
            });
            setData(newData || []);
            setLoading(false);
          }
        } catch (err) {
          setLoading(false);
          throw new Error(String(err));
        }
      }, 500),
    []
  );

  return (
    <Box sx={{ width: "50%", p: 2 }}>
      <TextField
        label="Add Food"
        fullWidth
        onChange={(e) => handleSearch(e.target.value)}
        sx={{ mb: 4 }}
      />
      {!loading ? (
        data.length ? (
          <Box sx={CardContainer}>
            {data.map((food: any, index: number) => {
              return (
                <Box sx={CardStyle} key={index}>
                  <Box sx={AddButtonContainer}>
                    <IconButton onClick={() => handleModal(true, food)}>
                      <AddCircle />
                    </IconButton>
                  </Box>

                  <Typography variant="body1">
                    <b>Brand Name</b> : {food?.brandName}
                  </Typography>
                  <Typography variant="body1">
                    <b>Brand Owner</b> : {food?.brandOwner}
                  </Typography>
                  <Typography variant="body1">
                    <b>Description</b> : {food?.desc}
                  </Typography>
                  {food?.type && <Chip label={food?.type} sx={{ mt: 1 }} />}
                </Box>
              );
            })}
            {showModal && (
              <AddFoodModal
                handleModal={handleModal}
                data={selectedItem}
                foodList={foodList}
                setFoodList={setFoodList}
              />
            )}
          </Box>
        ) : (
          <Typography variant="subtitle1" color="gray">
            No Results
          </Typography>
        )
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default SearchResults;
