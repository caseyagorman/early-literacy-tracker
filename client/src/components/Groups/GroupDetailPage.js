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
      </Row>
      <Row>
        <div
          style={{
            float: "left",
            marginBottom: 100,
            marginRight: -150,
            marginLeft: 40,
            marginTop: -45,
            fontSize: 24
          }}
        >
          <Col>
            <h4 style={{ marginLeft: 40, textDecoration: "underline" }}>
              <b>Members</b>
            </h4>
            <ul>
              {Object.entries(props.group.readingLevels).map(student => (
                <li style={{ fontColor: "black", fontSize: 26 }}>
                  {student[0]}, level: {student[1]}
                </li>
              ))}
            </ul>
          </Col>
        </div>
        <Col>
          <div style={{ float: "right", marginRight: 25, marginTop: -30 }}>
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
