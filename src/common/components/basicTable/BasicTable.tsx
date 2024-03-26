import { ReactNode } from "react";
import "./BasicTable.scss";

interface IBasicTableProps {
  childrenHeader?: ReactNode;
  childrenHeaderContent: ReactNode;
  childrenBody: ReactNode;
}

export const BasicTable = ({
  childrenHeader,
  childrenBody,
  childrenHeaderContent,
}: IBasicTableProps) => {
  return (
    <table className="table">
      <thead className="table__wrapper">
        {childrenHeader}
        <tr className="table__header">{childrenHeaderContent}</tr>
      </thead>
      <tbody className="table__wrapper">{childrenBody}</tbody>
    </table>
  );
};
