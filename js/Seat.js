import React from 'react';

class Seat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isBooked: props.seat.isBooked,
      defaultClass: props.seat.isBooked ? 'bus-seat-cell--booked' : 'bus-seat-cell--notbooked'
    };

    // This binding is necessary to make `this` work in the callback
    this.selectSeat = this.selectSeat.bind(this);
    this.showCard = this.showCard.bind(this);
    this.hideCard = this.hideCard.bind(this);
  }

  selectSeat() {
    if (!this.props.seat.isBooked) {
      this.setState(prevState => ({
        isBooked: !prevState.isBooked,
        currentClass: !prevState.isBooked ? 'bus-seat-cell--selected' : ''
      }));
      this.props.selectSeat(this.props.seat);
    }
  }

  showCard() {
    this.props.showCard(this.props.seat.passenger, this.props.seat.id);
  }

  hideCard() {
    this.props.showCard(null, null);
  }

  render() {
    const seat = this.props.seat;

    return (
      <div
        className={`bus-seat-cell ${this.state.defaultClass} ${this.state.currentClass}`}
        onClick={this.selectSeat}
        onMouseEnter={this.showCard}
        onMouseLeave={this.hideCard}
      >
        {seat.id}
      </div>    
    );
  }
}

export default Seat;