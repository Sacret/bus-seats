import React from 'react';

class Description extends React.Component {

  render() {

    return (
      <div className="bus-seats-description">
        <div className="bus-seat-cell-description">
          <div className="bus-seat-cell bus-seat-cell--booked">N</div> is for booked seat
        </div>
        <div className="bus-seat-cell-description">
          <div className="bus-seat-cell bus-seat-cell--notbooked">M</div> is for not booked seat
        </div>
        <div className="bus-seat-cell-description">
          <div className="bus-seat-cell bus-seat-cell--selected">S</div> is for selected seat
        </div>
        <div className="bus-seat-cell-description">
          <p>Hover on booked seat to see the detailed info</p>
          <p>Click on not booked seat to book it</p>
        </div>
      </div>    
    );
  }
}

export default Description;