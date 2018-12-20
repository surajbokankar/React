import React from "react";
import Card from "@material-ui/core/Card";
// import { connect } from "react-redux";

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
  console.log(key, this.state.data);
  return (
    <div>
      <Card style={{ width: "100%" }} onClick={() => this.onTitleClick(key)}>
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
                src="https://d3grfap2l5ikgv.cloudfront.net/5b7676c83e9b1a0d38b5a11f.jpg"
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
                  Flipkart Lite
                </label>
                <label
                  style={{
                    marginLeft: "20px"
                  }}
                >
                  Sub Header
                </label>
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
                <label style={textStyle}>174</label>
                <label style={descriptionStyle}>Installs</label>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "grid",
                  justifyContent: "space-between",
                  marginTop: "38px",
                  flexWrap: "wrap",
                  marginRight: "206px"
                }}
              >
                <label style={textStyle}>174</label>
                <label style={descriptionStyle}>Installs</label>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "grid",
                  justifyContent: "space-between",
                  marginTop: "38px",
                  flexWrap: "wrap"
                }}
              >
                <label style={textStyle}>174</label>
                <label>Installs</label>
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
                3.5
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
              <label>1990</label>
            </div>
            <div
              style={{
                height: "fit-content",
                display: "grid",
                marginTop: "53px"
              }}
            >
              <label>Last Updated On</label>
              <label>2018</label>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

function AppList(props) {
  return (
    <div style={{ width: "100%" }}>
      {this.state.data ? (
        <ul>
          {/* <li style={{ paddingTop: "16px", display: "block" }}>
                {values.map(key => MediaCard(key))}
              </li> */}
        </ul>
      ) : null}
    </div>
  );
}
const mapStateToProps = state => {
  console.log("mapStateToProps", state);

  return {
    data: state.data
  };
};

const mapStateToDispatch = dispatch => {
  return;
};

export default AppList;
