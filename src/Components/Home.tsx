import { Box, Chip, Typography } from "@mui/material";
import { useState } from "react";
import SearchResults from "./SearchResults";
import { CardContainer, CardStyle } from "./style";
import { DateTime } from "luxon";

const Home = () => {
  const [foodList, setFoodList] = useState<any>(
    localStorage.getItem("food-list")
      ? JSON.parse(localStorage.getItem("food-list") || "[] ")
      : []
  );

  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100% - 85px)",
        overflow: "auto",
        bgcolor: "rgba(0,0,0,0.1)",
      }}
    >
      <Box sx={{ width: "50%", p: 2 }}>
        <Typography variant="h5" sx={{ mb: 4, textDecoration: "underline" }}>
          My Food Diary
        </Typography>
        {foodList.length ? (
          <Box sx={CardContainer}>
            {foodList.map((food: any, index: number) => {
              return (
                <Box sx={CardStyle} key={index}>
                  <Typography variant="body1">
                    <b>Brand Name</b> : {food?.brandName}
                  </Typography>
                  <Typography variant="body1">
                    <b>Brand Owner</b> : {food?.brandOwner}
                  </Typography>
                  <Typography variant="body1">
                    <b>Description</b> : {food?.desc}
                  </Typography>
                  <Typography variant="body1">
                    <b>Serving</b> : {food?.serving}
                  </Typography>
                  <Typography variant="body1">
                    <b>Notes</b> : {food?.notes}
                  </Typography>
                  {food?.time && (
                    <Typography variant="body1">
                      <b>Time</b> :
                      {DateTime.fromISO(food?.time).toFormat("hh:mm a")}
                    </Typography>
                  )}
                  {food?.type && <Chip label={food?.type} sx={{ mt: 1 }} />}
                </Box>
              );
            })}
          </Box>
        ) : (
          <Typography variant="subtitle1" color="gray">
            No Food Added
          </Typography>
        )}
      </Box>
      <SearchResults foodList={foodList} setFoodList={setFoodList} />
    </Box>
  );
};

export default Home;
