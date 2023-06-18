import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"} width={300}>
        <Typography variant="h6" fontWeight={300} mb={2}>
          Friends Online
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA0Zd_UzrsDzfm8A3kvsEkEnsC29zAqyPuig&usqp=CAU"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/3796990/pexels-photo-3796990.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/8852718/pexels-photo-8852718.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/3796990/pexels-photo-3796990.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA0Zd_UzrsDzfm8A3kvsEkEnsC29zAqyPuig&usqp=CAU"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/3796990/pexels-photo-3796990.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/8852718/pexels-photo-8852718.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/3796990/pexels-photo-3796990.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={"300"} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100}>
          <ImageListItem>
            <img
              src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg?quality=85&w=800"
              alt="h"
            ></img>
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=740&t=st=1687032364~exp=1687032964~hmac=d2c2070b6de3e76939aeea91961ebf4ac5f53dee9b017f3a23ace523b5dfc0b5"
              alt="h"
            ></img>
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?size=626&ext=jpg&ga=GA1.1.1023356680.1677069699&semt=sph"
              alt="h"
            ></img>
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={"300"} mt={2}>
          Recent Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.1023356680.1677069699&semt=sph "
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
        );
      </Box>
    </Box>
  );
};

export default Rightbar;
