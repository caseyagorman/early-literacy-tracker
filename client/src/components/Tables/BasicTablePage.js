import React from "react";
import { Link } from "react-router-dom";
const BasicTablePage = props => (
  <div>
    {console.log("basic table page", props)}
    <thead id="student-letter-table-head">{props.itemType}</thead>
    <tbody>
      {props.items.map(function(item) {
        return (
          <tr>
            {console.log("item", item.item)}
            <td>
              <Link to={`/${props.route}/${props.item_id}`} className="link" />
            </td>{" "}
            {item.item}
          </tr>
        );
      })}
    </tbody>
  </div>
);

export default BasicTablePage;
