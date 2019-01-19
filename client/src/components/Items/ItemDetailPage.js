import React from "react";
import MainButton from "../Buttons/MainButton";
// import StudentSnapshot from "./StudentSnapshot";
// import AssignStudents from "../containers/Forms/AssignStudents";
import BasicTablePage from "../Tables/BasicTablePage";
// import DeleteItem from "../../containers/Forms/DeleteItem";
const ItemDetailPage = props => (
  <div className="student-detail-page">
    {console.log("Item detail PROPS!", props)}
    <div className="display-student-name">
      {props.item.item}
      <span />

      {/* <DeleteItem item={props.item} /> */}
    </div>

    <MainButton id="view-student-word-data-button" text={"View Word Data"} />

    <BasicTablePage
      //   itemType={"words"}
      items={props.item}
    />

    {/* <AssignStudents student={props.student} itemType={"words"} /> */}
  </div>
);

export default ItemDetailPage;
