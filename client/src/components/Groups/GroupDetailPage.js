import React from "react";
import GroupTable from "../Tables/GroupTable";
import AddNoteForm from "../../containers/Forms/AddNoteForm";
import NotesPage from "../Notes/NotesPage";
import { Grid, Col, Row } from "react-bootstrap";
const GroupDetailPage = props => (
  <div className="container" style={{ fontFamily: "krub" }}>
    <Grid>
      <Row>
        <h1>{props.group.name}</h1>
      </Row>
      <Row>
        <div style={{ float: "left", marginBottom: 100 }}>
          <Col>
            <ul>
              {Object.entries(props.group.readingLevels).map(student => (
                <li style={{ fontColor: "black", fontSize: 24 }}>
                  {student[0]}, level: {student[1]}
                </li>
              ))}
            </ul>
          </Col>
        </div>
        <Col>
          <div style={{ float: "right", marginRight: 200, marginTop: -40 }}>
            <NotesPage group={props.group} />
            <AddNoteForm group={props.group} />
          </div>
        </Col>
      </Row>
      <br />
      <h4>Shared words, letters, and sounds</h4>
      <br />

      <GroupTable group={props.group} />
    </Grid>
  </div>
);
export default GroupDetailPage;
