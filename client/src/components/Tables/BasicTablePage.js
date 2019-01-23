import React from "react";
import { Link } from "react-router-dom";
const BasicTablePage = props => (
  <div>
    {console.log("props", props)}
    <thead id="student-letter-table-head">{props.itemType}</thead>
    <tbody>
      {props.items.map(function(item) {
        return (
          <tr>
            <td>
              <Link to={`/${props.route}/${props.item_id}`} className="link" />
            </td>
            {item.item}
            <td>
              <ul>
                {item.items.map(item => (
                  <p>{item.name}</p>
                ))}
              </ul>
            </td>
          </tr>
        );
      })}
    </tbody>
  </div>
);

export default BasicTablePage;
