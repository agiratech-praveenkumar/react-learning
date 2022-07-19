import { Button } from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "react-bootstrap-icons";
import styled from "styled-components";
import axios from "../api/axios";
import Alerts from "../components/Alerts";
import Search from "../components/Search";
import UserContext from "../context/UserContext";

//Styled Components

const StyledGrid = styled.div`
  display: grid;
  // background: red;
  grid-template-columns: auto auto;
`;
const StyledGridItem = styled.div`
  margin: 20px;
  background: white;
  // width: 28rem;
  // height: 17rem;
`;

const StyledCard = styled.div`
  padding: 20px;
  margin: 20px 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }
`;
const StyledCardTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;
const Space = styled.div`
  height: 5px;
  margin: 10px 0px;
`;
const ImageCtr = styled.img`
  width: 270px;
  height: 270px;
  margin: 0 10px;
`;
const CategoryLabel = styled.div`
  padding: 4px;
  display: inline-block;
  background-color: #15133c;
  border-radius: 7px;
  margin: 0px 4px;
  color: white;
`;
const ProductCode = styled.div`
  font-size: 0.8rem;
  color: grey;
`;

const StyledSearch = styled(Search)`
  height: 100px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid;
`;

const StyledArrow = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;

const Products = () => {
  const [data, setData] = useState({ items: {} });
  const { user, setUser } = useContext(UserContext);
  const [alert, setAlert] = useState();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState("");
  const [perPage, setPerPage] = useState(2);
  const [order, setOrder] = useState(0);

  useEffect(() => {
    if (query.length === 0 || query.length > 2) {
      fetchData();
      console.log("ee");
    }
  }, [query, page, order]);

  async function fetchData() {
    var sort = order == 1 ? "desc" : "asc";
    const params = {
      order_by: `created_at ${sort}`,
      search: query,
      page: page,
      per_page: perPage,
    };

    var config = {
      headers: {
        "X-User-Mobile-number": JSON.parse(user).data.mobilenumber,
        "X-User-Token": JSON.parse(user).data.token,
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/products/search", params, config);
      console.log("res");
      if (res.status === 200) {
        setData({ items: res.data.data.products });
        setTotalPageCount(Math.ceil(res.data.data.total_count / perPage));
      }
    } catch (err) {
      if (err.response?.status === 401) {
        setAlert("Need to Login first");
      }
      if (JSON.stringify(err).message === "Network Error") {
        setAlert("Cannot reach servers");
      }
    }
  }

  return (
    <>
      <Container>
        <Alerts text={alert} />
        <StyledGrid>
          <StyledGridItem>
            <div className="search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              <Input
                type="text"
                placeholder="Search"
                onChange={(e) => setQuery(e.target.value)}
              />
              {order == 0 ? (
                <StyledArrow onClick={() => setOrder(1)}>
                  <ArrowDown />
                </StyledArrow>
              ) : (
                <StyledArrow onClick={() => setOrder(0)}>
                  <ArrowUp />
                </StyledArrow>
              )}
            </div>
            <ul>
              {data &&
                Object.entries(data.items).map(([k, v]) => (
                  <StyledCard>
                    {v.pictures.map((e) => (
                      <ImageCtr src={e.url} alt="no image" />
                    ))}
                    <br />
                    <ProductCode key={v.id}>{v.code}</ProductCode>
                    <StyledCardTitle>{v.name}</StyledCardTitle>
                    <p>by {v.brand.name}</p>
                    <Space />
                    <div>Approx Price ₹</div> {v.approx_price} <br />
                    <Space />
                    <p>Category</p>
                    {v.categories.map((e) => (
                      <CategoryLabel>{e.name}</CategoryLabel>
                    ))}
                  </StyledCard>
                ))}
            </ul>
          </StyledGridItem>
        </StyledGrid>
        <div className="pagination">
          {page > 1 && (
            <Button variant="outlined" onClick={(e) => setPage(page - 1)}>
              Previous
            </Button>
          )}

          {page < totalPageCount && (
            <Button variant="outlined" onClick={(e) => setPage(page + 1)}>
              Next
            </Button>
          )}
          {page}
        </div>
      </Container>
    </>
  );
};

export default Products;
