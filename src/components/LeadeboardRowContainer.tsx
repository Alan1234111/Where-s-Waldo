type LeadeboardRowContainer = {
  place: number;
  username: string;
  time: string;
  date: string;
};

export const LeadeboardRowContainer = ({
  place,
  username,
  time,
  date,
}: LeadeboardRowContainer) => {
  return (
    <tr>
      <td>{place}</td>
      <td>{username}</td>
      <td>{time}</td>
      <td>{date}</td>
    </tr>
  );
};
