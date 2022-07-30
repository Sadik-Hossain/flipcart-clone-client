import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  styled,
} from "@mui/material";
// import LocalOfferIcon from "@mui/icons-material/localOffer";
import { MdLocalOffer } from "react-icons/md";
const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align:baseline & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;
const StyledBadge = styled(MdLocalOffer)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`;

const ColumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
  & > td {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const ProductDetail = ({ product }) => {
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography
        style={{ marginTop: "5px", color: "#878787", fontSize: "14px" }}
      >
        8 ratings & 1 review
        <Box component="span">
          <img src={fassured} style={{ width: "77px", marginLeft: "20px" }} />
        </Box>
      </Typography>
      <Typography style={{ display: "flex", alignItems: "center" }}>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost} &nbsp;&nbsp;&nbsp;
        </Box>
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "green" }}>
          {product.price.discount}
        </Box>
      </Typography>
      <SmallText>
        <Typography>
          <StyledBadge />
          Get extra 20% off upto $50 on 1 item(s)
        </Typography>
        <Typography>
          <StyledBadge />
          Get extra 13% off (price inclusive of discount)
        </Typography>
        <Typography>
          <StyledBadge />
          Sign up for Flipcart pay later and get flipcart gift card
        </Typography>
        <Typography>
          <StyledBadge />
          Buy 2 items save 5%, buy 3 or more save 10%
        </Typography>
      </SmallText>
      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <span style={{ color: "#2874f0" }}>SuperComNet</span>
              <Typography>GST invoice available</Typography>
              <Typography>View more sellers starting from ₹329</Typography>
            </TableCell>
          </ColumnText>
          <TableRow>
            <TableCell colSpan={2}>
              <img src={adURL} style={{ width: 390 }} />
            </TableCell>
          </TableRow>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;
