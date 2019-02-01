// import React from "react";
// import AssignReadingLevelForm from "../Forms/AssignReadingLevelForm";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as readingLevelActions from "../../redux/actions/readingLevelActions";
// import "../../components/Forms/static/form.css";
// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isChecked: true
//     };

//     this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
//   }

//   handleCheckboxChange(event) {
//     const target = event.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     return (
//       <div>
//         <form>
//           <label>
//             <input
//               name="isChecked"
//               type="checkbox"
//               checked={this.state.isChecked}
//               onChange={this.handleCheckboxChange}
//             />
//             ONE
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="isChecked"
//               checked={this.state.isChecked}
//               onChange={this.handleCheckboxChange}
//             />
//             TWO
//           </label>
//         </form>
//       </div>
//     );
//   }
// }

import React from "react";
import AssignReadingLevelForm from "../Forms/AssignReadingLevelForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as readingLevelActions from "../../redux/actions/readingLevelActions";
import "../../components/Forms/static/form.css";
class AssignReadingLevel extends React.Component {
  componentDidMount() {
    const user = this.props.auth.user.token;
    this.props.readingLevelActions.fetchReadingLevels(user);
  }

  displayAssignReadingLevelForm(readingLevels) {
    if (readingLevels === null) {
      return <p>loading...</p>;
    }
    return (
      <div className="container">
        {console.log("reading levels", readingLevels)}
        <AssignReadingLevelForm itemList={readingLevels} />
      </div>
    );
  }

  render() {
    return this.displayAssignReadingLevelForm(this.props.readingLevels);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    readingLevelActions: bindActionCreators(readingLevelActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    readingLevels: state.readingLevels,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssignReadingLevel);
