import Link from "next/link";
import React from "react";
import styled from "styled-components";
const StyledLink = styled.a`
  color: rgb(43, 128, 0);
  cursor: pointer;
  &:hover {
    text-decoration:underline;
  }
`
const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  th {
    color:#FFF;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  td,
  th {
    border: none;
    padding:1em;
    text-align:center;
    width:20%;
  }

  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(even) {
      background-color: rgb(247, 247, 248);
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;
export default ({ data }) => (
  <TableMarkup data={data} />
);
const TableMarkup = ({ data }) => (
  <StyledTable>
    <thead>
      <tr>
        <th>User Name</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Image</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {data.map((user, index) => (
        <tr key={index}>
          <td><Link href="/[id]" as={`/${encodeURIComponent(user.first_name)}-${encodeURIComponent(user.last_name)}-${encodeURIComponent(user.id)}`}><StyledLink>{user.first_name}-{user.last_name}-{user.id}</StyledLink></Link></td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td><img src={user.avatar} width="40" height="40" /></td>
          <td>{user.email}</td>
        </tr>
      ))}
    </tbody>
  </StyledTable>
);
