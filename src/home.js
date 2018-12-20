import React from "react";
//import Card from "@material-ui/core/Card";
//import "./component/W3.css";
import axios from "axios";
//import header from "./header";
import { Link ,Redirect } from 'react-router-dom'

class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.age,
      name: props.name,
      homeLink: "Change Link",
      items: [],
      error: ""
    };

    this.onTitleClick = this.onTitleClick.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount", this.props);
    const auth =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDM0NzgyMDcsInNlc3Npb25fa2V5IjoiOGUyNWNjNDItN2Q5MS00NzVhLTk5MDgtZDcyYTA0NGE1MjVhIiwiZXhwIjoxNTQzNTY0NjA3fQ.HPO4_6J-8xFVeHSTk_hYAw_14mOyPPCmgq4dPuktpZk";
    console.log(auth);
    let self = this;
    let url = "http://192.168.8.105:4000/apps";
    var headers = {
      "Content-Type": "application/json",
      Authorization: auth
    };
    axios
      .get(url, { headers: headers })
      .then(function(response) {
        // handle success
        console.log("do we have data?", response.data.data.list);
        self.setState({
          items: response.data.data.list
        });
      })
      .catch(function(error) {
        // handle error

        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log("Request =" + error.message);
        } else {
          console.log("Error", error);
        }
      });
  }

  componentWillMount() {
    console.log("componentWillMount", this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      repos: nextProps.repos,
      inputSearchValue: nextProps.inputSearchValue
    });
    console.log("componentWillReceiveProps", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate(preProps, prvState) {
    console.log("componentDidUpdate", preProps, prvState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount", this.props);
  }

  clickToIncrese() {
    this.setState({
      age: this.state.age + 3
    });
  }

  changeNameOfHeader() {
    this.props.changeLink(this.state.homeLink);
  }

  onInputChange(event) {
    this.setState({
      homeLink: event.target.value
    });
  }

  onTitleClick(app) {
    console.log("onTitleClick", app);
    //this.props.history.push('/details');
    this.props.history.push({
        pathname: `/details`,
        search: `?appId=${app.appId}`,
        state: { data: app }
      })
  }

  render() {
    // console.log("State", this.state.items);
    const items = this.state.data;

    const textStyle = {
      width: "46px",
      height: "38px",
      fontFamily: "Lato",
      fontSize: "30px",
      fontWeight: "normal",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: "1.2",
      letterSpacing: "normal",
      color: "#9013fe"
    };

    const values = [1, 2, 3, 4];

    const descriptionStyle = {
      width: "58px",
      height: "19px",
      fontFamily: "Lato",
      fontSize: "16px",
      fontWeight: "normal",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: "1.19",
      letterSpacing: "normal",
      textAlign: "left",
      color: "#646464"
    };

    const titleStyle = {
      fontFamily: "Lato",
      fontSize: "24px",
      color: "#333333",
      fontWeight: "bold",
      marginTop: "20px",
      marginBottom: "24px"
    };

    const MediaCard = key => {
      // console.log(key, this.state.items);
      return (
        <div style={{marginBottom:'12px',marginLeft:'60px',marginRight:'60px'}}>
          <div
            style={{
              width: "100%",
              borderRadius: "6px",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 2px 6px 0 rgba(0, 0, 0, 0.44)",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              outline: 'none'
            }}
            onClick={() => this.onTitleClick(key)}
            onKeyPress={console.log("on Key pressed")}
            role="button"
            tabIndex="0"
          >
            <div
              className="container"
              style={{
                width: "100%",
                display: "flex",
                height: "290px"
              }}
            >
              <div
                style={{
                  width: "80%",
                  height: "0px"
                }}
              >
                <div>
                  <img
                    style={{
                      height: "48px",
                      width: "48px",
                      float: "left",
                      marginTop: "12px",
                      borderTopRightRadius: "4px",
                      borderBottomLeftRadius: "4px",
                      borderBottomRightRadius: "4px",
                      borderTopLeftRadius: "4px",
                      border: "solid 1px beige"
                    }}
                    alt="App Icon"
                    src={key.customData.icon}
                  />

                  <div style={{ display: "grid", flexWrap: "wrap" }}>
                    <label
                      style={{
                        marginTop: "12px",
                        marginLeft: "20px",
                        fontFamily: "Lato",
                        fontWeight: "bold",
                        fontSize: "20px",
                        color: "#4a4a4a",
                        textAlign: "left"
                      }}
                    >
                      {key.name}
                    </label>
                    {/* <label
                      style={{
                        marginLeft: "20px"
                      }}
                    >
                     
                    </label> */}
                  </div>
                </div>

                <div
                  className="container"
                  style={{
                    textAlign: "left",
                    display: "flex",
                    flexWrap: "wrap"
                  }}
                >
                  <div
                    style={{
                      marginRight: "206px",
                      textAlign: "-webkit-left",
                      display: "grid",
                      marginTop: "38px",
                      flexWrap: "wrap"
                    }}
                  >
                    <label style={textStyle}>
                      {key.statistics.views.total}
                    </label>
                    <label style={descriptionStyle}>Views</label>
                  </div>
                  <div
                    style={{
                      textAlign: "-webkit-left",
                      display: "grid",
                      justifyContent: "space-between",
                      marginTop: "38px",
                      flexWrap: "wrap",
                      marginRight: "206px"
                    }}
                  >
                    <label style={textStyle}>
                      {key.statistics.downloads.total}
                    </label>
                    <label style={descriptionStyle}>Installs</label>
                  </div>
                  <div
                    style={{
                      textAlign: "-webkit-left",
                      display: "grid",
                      justifyContent: "space-between",
                      marginTop: "38px",
                      flexWrap: "wrap"
                    }}
                  >
                    <label style={textStyle}>
                      {key.statistics.reviews.total}
                    </label>
                    <label style={descriptionStyle}>Reviews</label>
                  </div>
                </div>
              </div>

              <div
                className="container"
                style={{
                  width: "20%",
                  float: "right",
                  backgroundColor: "#81b71a",
                  color: "#FFFFFF",
                  height: "-webkit-fill-available",
                  flexWrap: "wrap",
                  textAlign: "center"
                }}
              >
                <div
                  style={{
                    textAlign: "-webkit-match-parent",
                    display: "flex",
                    justifyContent: "space-evenly",
                    height: "70px",
                    marginTop: "10px",
                    marginLeft: "20px",
                    alignContent: "center"
                  }}
                >
                  <label
                    style={{
                      position: "static",
                      marginLeft: "20px",
                      fontFamily: "latobold",
                      fontSize: "24px",
                      alignContent: "center",
                      height: "48px"
                    }}
                  >
                    Average Rating:
                  </label>
                  <label
                    style={{
                      height: "56px",
                      fontSize: "46px"
                    }}
                  >
                    {Math.round(key.rating / 100)}
                  </label>
                </div>
                <div
                  style={{
                    height: "fit-content",
                    display: "grid",
                    flexWrap: "wrap",
                    marginTop: "53px"
                  }}
                >
                  <label>Last Created On</label>
                  <label>{getDate(key.created)}</label>
                </div>
                <div
                  style={{
                    height: "fit-content",
                    display: "grid",
                    marginTop: "53px"
                  }}
                >
                  <label>Last Updated On</label>
                  <label>{getDate(key.submittedDate)}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    const getDate = stamp => {
      var d = new Date(stamp);
      return d.toDateString();
    };

    const listView = () => {
      return (
        <div>
          <label style={{ style }}> List View </label>
        </div>
      );
    };

    var style = {
      fontSize: "20px",
      textAlign: "right",
      float: "right",
      color: "#FFFFFF"
    };
    var letterStyle = {
      padding: 10,
      margin: 10,
      backgroundColor: "#ffde00",
      color: "#333",
      display: "inline-block",
      fontFamily: "monospace",
      fontSize: 32,
      textAlign: "center",
      float: "left",
      width: "30%",
      borderRadius: "50px"
    };

    var buttonStyle = {
      aligncontent: "inherit",
      justifyitems: "legacy",
      placeitems: "auto",
      columnspan: "all",
      whitespace: "pre-line",
      boxShadow: "0 2px 6px 0 rgba(0, 0, 0, 0.04)"
    };

    const topCardStyle = {
      width: "228px",
      lineHeight: "104px",
      borderRadius: "6px",
      backgroundColor: "#FFFFFF",
      boxShadow: "0 2px 6px 0 rgba(0, 0, 0, 0.44)",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      marginLeft: "20px",
      marginRight: "20px"
    };

    const numberStyle = {
      width: "89px",
      fontFamily: "Lato",
      fontSize: "51px",
      fontWeight: "normal",
      fontStyle: "normal",
      fontStretch: "normal",
      letterSpacing: "normal",
      textAlign: "left",
      color: "#9013fe",
      verticalAlign: "middle"
    };
    const topTextStyle = {
      width: "89px",
      fontFamily: "Lato",
      fontSize: "24px",
      fontWeight: "normal",
      fontStyle: "normal",
      fontStretch: "normal",
      letterSpacing: "normal",
      textAlign: "left",
      color: "#9b9b9b",
      verticalAlign: "middle",
      marginLeft: "20px"
    };

    var emp = [
      {
        name: "suraj",
        age: "10"
      },
      {
        name: "sam",
        age: "20"
      }
    ];

    const topList = [1, 2, 3, 4];

    const getTopCardView = (textString, value) => {
      return (
        <div>
          <label style={numberStyle}>{value}</label>
          <label style={topTextStyle}>{textString}</label>
        </div>
      );
    };

    console.log("List Of Apps=", this.state.items);
    return (
      <div>
        {/* <div class="w3-panel w3-card">
          <p>w3-card</p>
        </div> */}

        <div>
          <label style={titleStyle}>Analytics for all Apps</label>

          <div style={{ display: "flex" ,display:'none'}}>
            <div style={topCardStyle}>{getTopCardView("views", 132)}</div>
            <div style={topCardStyle}>{getTopCardView("installs", 567)}</div>
            <div style={topCardStyle}>{getTopCardView("reviews", 123)}</div>
            <div style={topCardStyle}>{getTopCardView("ratings", 3.5)}</div>
          </div>
        </div>

        <div style={{ width: "100%" }}>
          {this.state.items ? (
            <ul>
              <li style={{  display: "block" }}>
                {this.state.items.map(key => MediaCard(key))}
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}

export default home;
