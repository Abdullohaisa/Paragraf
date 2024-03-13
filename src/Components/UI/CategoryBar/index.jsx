import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

const Category = ({ setCategory }) => {
  const [ctgr, setCtgr] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const mode = useSelector((state) => state.darkMode.mode);

  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(`https://dummyjson.com/products/categories`)
        .then((res) => setCtgr(res.data));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const ctgrPages = (i) => {
    navigate(`/category/${i}`);
    setCategory(false);
  };

  const theme = {
    palette: {
      primary: {
        main: `rgb(255, 152, 18)`,
      },
      secondary: {
        main: `rgb(255, 152, 18)`,
      },
    },
  };

  return (
    <div id={mode === false ? "dark" : "light"} className="category-box">
      {loading ? (
        <ThemeProvider theme={theme}>
          <CircularProgress  color="secondary" />
        </ThemeProvider>
      ) : (
        <div className="category-boxes">
          <ul>
            {ctgr &&
              ctgr.length > 0 &&
              ctgr.slice(0, 5).map((item, i) => (
                <li onClick={() => ctgrPages(item)} key={i}>
                  {item}
                </li>
              ))}
          </ul>
          <ul>
            {ctgr &&
              ctgr.length > 0 &&
              ctgr.slice(5, 10).map((item, i) => (
                <li onClick={() => ctgrPages(item)} key={i}>
                  {item}
                </li>
              ))}
          </ul>
          <ul>
            {ctgr &&
              ctgr.length > 0 &&
              ctgr.slice(10, 15).map((item, i) => (
                <li onClick={() => ctgrPages(item)} key={i}>
                  {item}
                </li>
              ))}
          </ul>
          <ul>
            {ctgr &&
              ctgr.length > 0 &&
              ctgr.slice(15, 20).map((item, i) => (
                <li onClick={() => ctgrPages(item)} key={i}>
                  {item}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Category;
