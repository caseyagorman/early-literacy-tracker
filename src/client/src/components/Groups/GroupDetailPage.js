import React from "react";
import GroupTable from "../Tables/GroupTable";
import AddNoteForm from "../../containers/Forms/AddNoteForm";
import NotesPage from "../Notes/NotesPage";
import { Grid, Col, Row } from "react-bootstrap";
const GroupDetailPage = props => (
  <div className="container" style={{ fontFamily: "krub" }}>
    <Grid>
      <Row style={{ textAlign: "center", marginBottom: 50 }}>
        <h1 style={{ marginLeft: -150, fontSize: 50 }}>{props.group.name}</h1>

        <ul style={{ marginLeft: 400, fontSize: 14 }}>
          {Object.entries(props.group.readingLevels).map(student => (
            <li
              style={{ fontColor: "black", fontSize: 14, textAlign: "justify" }}
            >
              {student[0]}, level: {student[1]}
            </li>
          ))}
        </ul>
      </Row>
      <Row>
        <div style={{ marginRight: 25, marginTop: -30 }}>
          <NotesPage group={props.group} />
          <AddNoteForm group={props.group} />
        </div>
      </Row>
      <Row>
        <br />
        <h4>Shared words, letters, and sounds</h4>
        <br />

        <GroupTable group={props.group} />
      </Row>
    </Grid>
  </div>
);
export default GroupDetailPage;
