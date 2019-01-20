import React from "react";
import MainButton from "../Buttons/MainButton";
// import StudentSnapshot from "./StudentSnapshot";
import AssignStudents from "../../containers/Forms/AssignStudents";
import BasicTablePage from "../Tables/BasicTablePage";
// import DeleteItem from "../../containers/Forms/DeleteItem";
const ItemDetailPage = props => (
  <div>
    <div>{console.log(props.item.item)}</div>
    {console.log("item detail page", props)}
    <div> {props.item.item}</div>
    {/* <MainButton
 id="view-student-word-data-button"
  text={`View${props.item.itemType}Data`}
   /> */}
    <BasicTablePage itemType={props.itemType} items={props.students} />
    <AssignStudents
      id={props.id}
      item={props.item.item}
      itemType={props.itemType}
    />
  </div>
);

export default ItemDetailPage;
