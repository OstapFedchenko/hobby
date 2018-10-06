import React, { Component } from "react";

import { SHOW_VIEW_COUNT_DEFAULT } from "./constants";
import { friendHobbiesMoc } from "./mock";

import Header from "./components/header";
import Input from "./components/input";
import ModalComplain from "./components/modalComplain";
import MyHobby from "./components/hobby";
import FriendHobby from "./components/hobby/friend";
import More from "./components/more";

import "./App.scss";

class App extends Component {
  state = {
    myHobbies: [],
    friendHobbies: friendHobbiesMoc,
    showedMyHobbiesCount: SHOW_VIEW_COUNT_DEFAULT,
    showedFriendHobbiesCount: SHOW_VIEW_COUNT_DEFAULT,
    isComplain: false,
    complainedHobby: null
  };

  onInputSubmit = value => {
    if (value) {
      this.setState({
        myHobbies: [...this.state.myHobbies, { id: Math.random(), name: value }]
      });
    }
  };

  onDeleteMyHobby = id => () => {
    const { myHobbies, showedMyHobbiesCount } = this.state;

    const updatedHobbies = myHobbies.filter(item => item.id !== id);
    const updatedMyShowedHobbiesCount =
      (showedMyHobbiesCount === SHOW_VIEW_COUNT_DEFAULT &&
        showedMyHobbiesCount) ||
      updatedHobbies.length;

    this.setState({
      myHobbies: updatedHobbies,
      showedMyHobbiesCount: updatedMyShowedHobbiesCount
    });
  };

  onMyHobbiesMoreClick = () =>
    this.setState({ showedMyHobbiesCount: this.state.myHobbies.length });

  onFriendHobbiesMoreClick = () =>
    this.setState({
      showedFriendHobbiesCount: this.state.friendHobbies.length
    });

  addFriendHobby = hobby => () => {
    const { myHobbies } = this.state;

    if (!myHobbies.includes(hobby)) {
      this.setState({ myHobbies: [...myHobbies, hobby] });
    }
  };

  onComplainClick = hobby => () => {
    if (hobby) {
      this.setState({ isComplain: true, complainedHobby: hobby });
    }
  };

  onCloseComplain = () =>
    this.setState({ isComplain: false, complainedHobby: null });

  render() {
    const {
      myHobbies,
      friendHobbies,
      showedMyHobbiesCount,
      showedFriendHobbiesCount,
      isComplain,
      complainedHobby
    } = this.state;

    const hidedMyHobbiesCount = myHobbies.length - showedMyHobbiesCount;
    const hidedFriendHobbiesCount =
      friendHobbies.length - showedFriendHobbiesCount;

    return (
      <div className="app">
        <div className="hobbies-my">
          <Header title="О Себе" subTitle="Хобби" />

          <div className="hobbies-list">
            <div className="hobbies-list__add">
              <Input submit={this.onInputSubmit} />
            </div>

            {myHobbies.map(
              (item, index) =>
                index < showedMyHobbiesCount && (
                  <MyHobby
                    key={item.id}
                    name={item.name}
                    onDeleteMyHobby={this.onDeleteMyHobby(item.id)}
                  />
                )
            )}

            {hidedMyHobbiesCount > 0 ? (
              <More
                count={hidedMyHobbiesCount}
                onClick={this.onMyHobbiesMoreClick}
              />
            ) : null}
          </div>
        </div>

        <div className="hobbies-friend">
          <Header title="Интересы друга" subTitle="Хобби" />

          <div className="hobbies-list">
            {friendHobbies.map(
              (item, index) =>
                index < showedFriendHobbiesCount && (
                  <FriendHobby
                    key={item.id}
                    name={item.name}
                    isAdded={myHobbies.includes(item)}
                    addFriendHobby={this.addFriendHobby(item)}
                    onComplainClick={this.onComplainClick(item)}
                  />
                )
            )}

            {hidedFriendHobbiesCount > 0 ? (
              <More
                count={hidedFriendHobbiesCount}
                onClick={this.onFriendHobbiesMoreClick}
              />
            ) : null}
          </div>
        </div>

        {isComplain && (
          <ModalComplain
            content={complainedHobby.name}
            onClose={this.onCloseComplain}
          />
        )}
      </div>
    );
  }
}

export default App;
