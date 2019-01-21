import React from "react";

const StudentSnapshot = props => (
  <div>
    <h3>
      {props.student.student.fname}
      <span />
      's Snapshot
    </h3>
    {props.student.student.fname} knows {props.student.wordCount}/
    {props.student.totalWordCount} words, {props.student.letterCount}/
    {props.student.totalLetterCount} letters, and {props.student.soundCount}/
    {props.student.totalSoundCount} sounds. {props.student.student.fname}'s last
    word test was {props.student.lastWordTest} and they scored ///.{" "}
    {props.student.student.fname}'s last word test was{" "}
    {props.student.lastLetterTest} and they scored ///.{" "}
    {props.student.student.fname}'s last word test was{" "}
    {props.student.lastSoundTest} and they scored ///. <br />
    <br />
    <br />
    {props.student.student.fname} sabe {props.student.wordCount}/
    {props.student.totalWordCount} palabras, {props.student.letterCount}/
    {props.student.totalLetterCount} letras, y {props.student.soundCount}/
    {props.student.totalSoundCount} sonidos. La prueba ultima de{" "}
    {props.student.student.fname} fue word test was {props.student.lastWordTest}{" "}
    y el/ella recibio ///. La prueba ultima de {props.student.student.fname} fue{" "}
    {props.student.lastLetterTest} y el/ella recibio ///. La prueba ultima de{" "}
    {props.student.student.fname} fue {props.student.lastSoundTest} y el/ella
    recibio ///.{" "}
  </div>
);

export default StudentSnapshot;
