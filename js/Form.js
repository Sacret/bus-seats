import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="bus-seats-form">
        Seat #:
        <input type="text" name="seatNum" disabled value={this.props.seat.id} />
        First Name:
        <input type="text" name="firstName" />
        Last Name:
        <input type="text" name="lastName" />
        Passport:
        <input type="text" name="passport" />
      </form>    
    );
  }
}

export default Form;