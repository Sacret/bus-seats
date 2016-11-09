import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="bus-seats-card">
        <h2 className="bus-seats-card-title">
          #{this.props.seatNumber} {this.props.passenger.firstName} {this.props.passenger.lastName}
        </h2>
        <p>Passport: {this.props.passenger.passport}</p>
      </div>    
    );
  }
}

export default Card;