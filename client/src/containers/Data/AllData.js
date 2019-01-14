import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as wordsActions from "../../redux/actions/wordsActions";
import * as lettersActions from "../../redux/actions/lettersActions";
import * as soundsActions from "../../redux/actions/soundsActions";
import * as authActions from "../../redux/actions/authActions";
import AllDataPage from "../../components/Data/AllDataPage";

class AllData extends React.Component {
  getData(type, user) {
    console.log(type, user);
    if (!type) {
      return <p>loading...</p>;
    }
    if (type === "words") {
      console.log("words!");
      this.props.wordsActions.fetchWords(user);
      this.displayData(this.props.words);
    } else if (type === "letters") {
      this.props.lettersActions.fetchLetters(user);
      this.displayData(this.props.letters);
    } else if (type === "sounds") {
      this.props.soundsActions.fetchSounds(user);
      this.displayData(this.props.sounds);
    }
  }

  displayData(data) {
    if (!data) {
      return <p>loading...</p>;
    }
    if (data === this.props.words) {
      return <AllDataPage data={this.props.words} />;
    } else if (data === this.props.letters) {
      return <AllDataPage data={this.props.letters} />;
    } else if (data === this.props.sounds) {
      return <AllDataPage data={this.props.sounds} />;
    }
  }

  render() {
    // return <div>{this.props.itemType}</div>;
    return this.getData(this.props.itemType, this.props.auth.user.token);
  }
}

function mapStateToProps(state) {
  return {
    words: state.words,
    letters: state.letters,
    sounds: state.sounds,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    lettersActions: bindActionCreators(lettersActions, dispatch),
    wordsActions: bindActionCreators(wordsActions, dispatch),
    soundsActions: bindActionCreators(soundsActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllData);
