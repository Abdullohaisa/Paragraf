import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from "react-redux";
import {
  addToCart,
  orderTotalCost,
  removeOrder,
  removeSingleOrder,
} from "../../../Redux/cartSlice";

export default function BasicTable({ products, mode }) {
  const [checked, setChecked] = React.useState([]);
  const dispatch = useDispatch();

  const removeSingleItem = (productId) => {
    dispatch(removeSingleOrder(productId));
  };

  const addItem = (product) => {
    dispatch(addToCart(product));
  };

  React.useEffect(() => {
    dispatch(orderTotalCost());
  }, [addItem, removeSingleItem]);

  const handleCheck = (productId) => {
    if (checked.includes(productId)) {
      setChecked(checked.filter((id) => id !== productId));
    } else {
      setChecked([...checked, productId]);
    }
  };

  const removeCheckedItems = () => {
    checked.forEach((productId) => {
      dispatch(removeOrder(productId));
    });
    setChecked([]);
  };

  const tableStyle = {
    borderRadius: '10px',
    boxShadow:'none'
  }

  const tableRow = {
    border:"none"
  }

  return (
    <div className="xxx">
      <TableContainer style={tableStyle}  id={mode === false ? "dark" : "light"} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">
                <button  id={mode === false ? "dark" : "light"} className="table-button" onClick={removeCheckedItems}>Remove</button>
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell width={20}>
                  <TableBody>
                    <TableRow  key={product.item.id}>
                      <TableCell     width={20}>
                        <div className="check-box">
                          <input
                            className="table-check"
                            type="checkbox"
                            checked={checked.includes(product.item.id)}
                            onChange={() => handleCheck(product.item.id)}
                          />
                        </div>
                      </TableCell>
                      <TableCell
                        id={mode === false ? "dark" : "light"}
                        component="th"
                        scope="row"
                      >
                        <div className="table-img-row">
                          <img
                            className="basket-img"
                            src={product.item.thumbnail}
                            alt=""
                          />
                          <div className="table-img-row-icons">
                            <p>{product.item.title}</p>
                            <div>
                              <span><FavoriteBorderOutlinedIcon fontSize="large"/></span> || 
                              <span><ClearIcon fontSize="large"/></span>
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell
                        className="table-price-row"
                        id={mode === false ? "dark" : "light"}
                        align="right"
                      >
                        <div className="table-price-row">
                          <h2>${product.item.price}.00</h2>
                          <div>
                            <button onClick={() => removeSingleItem(product.item.id)}>
                              <RemoveIcon/>
                            </button>
                            <h2>{product.quantity}</h2>
                            <button onClick={() => addItem(product.item)}>
                              <AddIcon/>
                            </button>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
