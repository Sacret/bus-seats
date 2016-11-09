import React from 'react';
import _ from 'lodash';

import Seat from './Seat';
import Card from './Card';
import Description from './Description';
import Form from './Form';

class Bus extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      passenger: null,
      selectedSeats: []
    };

    // This binding is necessary to make `this` work in the callback
    this.showCard = this.showCard.bind(this);
    this.selectSeat = this.selectSeat.bind(this);
  }

  showCard(passenger, seatNumber) {
    this.setState({
      passenger: passenger,
      seatNumber: seatNumber
    });
  }

  selectSeat(seat) {
    this.setState(prevState => ({
      selectedSeats: _.xor(prevState.selectedSeats, [seat])
    }));
  }

  render() {
    return (
      <div>
        <h1 className="bus-seats-title">Bus Seats Scheme</h1>
        <div className="bus-seats">
          { this.props.data.map((column, key) => {
              return (
                <div className="bus-seats-column" key={key}>
                  { column.map((seat) => {
                      return (<Seat
                        seat={seat}
                        key={seat.id}
                        showCard={this.showCard}
                        selectSeat={this.selectSeat} />
                      );
                    })
                  }
                </div>
              );
            })
          }
        </div>
        { this.state.passenger && <Card
          passenger={this.state.passenger}
          seatNumber={this.state.seatNumber}
        /> }
        <Description />
        { this.state.selectedSeats && this.state.selectedSeats.map((seat) => {
            return <Form seat={seat} key={seat.id} />;
        })}
      </div>    
    );
  }
}

export default Bus;