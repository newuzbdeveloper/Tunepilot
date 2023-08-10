import { styled } from "styled-components";

export const Table = styled.table`
  width: 100%;
  margin-top: 35px;
`;

export const TableHead = styled.thead`
  padding: 10px;
  color: ${({ theme }) => theme.colors.secondaryGray};
  text-align: left;
  gap: 10px;
`;

export const TableHeading = styled.th`
  padding: 20px 30px 20px ${(props) => (props.forPaddingLeft ? "20px" : "0")};
`;

export const Line = styled.td`
  width: 100%;
  height: 1px;
  opacity: 0.5;
  background: linear-gradient(
    90deg,
    rgba(198, 198, 198, 0) 0%,
    #c6c6c6 51.56%,
    rgba(198, 198, 198, 0) 100%
  );
`;
