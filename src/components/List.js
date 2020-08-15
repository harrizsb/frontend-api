import styled from "@emotion/styled";

const List = styled.div`
  margin: 15px 0;
  border-bottom: 1px solid #333;

  &:last-child {
    border-color: transparent;
  }

  .product {${(props) =>
    props.nested &&
    `
      margin-left: 20px;
      border-bottom: 1px solid #333;

      &:last-child {
        border-color: transparent;
      }
    `};
`;

export default List;
