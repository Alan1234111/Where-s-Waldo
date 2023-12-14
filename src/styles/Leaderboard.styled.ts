import styled from "styled-components";

export const StyledLeaderboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0.5em auto;
  color: #e2e8f0;

  h3 {
    margin: 1em 0;
  }

  table {
    width: 60%;
    border-collapse: collapse;
    font-size: 1rem;
    margin-top: 1.5rem;
  }

  thead td:first-child {
    border-top-left-radius: 12px;
  }

  thead td:last-child {
    border-top-right-radius: 12px;
  }

  tbody tr:last-child td:last-child {
    border-bottom-right-radius: 12px;
  }

  tbody tr:last-child td:first-child {
    border-bottom-left-radius: 12px;
  }

  tr:nth-child(odd) {
    background-color: #be123c;
  }

  tr:nth-child(even) {
    background-color: #172554;
  }

  thead tr {
    background-color: #172554 !important;
  }

  td {
    padding: 0.8em 6em 0.8em 0.5em;
  }
`;
