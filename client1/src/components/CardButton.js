import React from "react";

class CardButton extends React.Component {
  render() {
    return (
      <div
        className={`w-full ${
          this.props.textClassname ? this.props.textClassname : "text-black"
        } ${
          this.props.bgClassname ? this.props.bgClassname : "bg-white"
        } text-center text-2xl font-semibold p-2 rounded-lg shadow-md`}
      >
        {this.props.title}
      </div>
    );
  }
}

export default CardButton;
