import React from 'react';

function BestResult({image, name, price}) {
  return (
    <div>
      Name: {name}<br/>
      Price: {price}<br/>
      Image: <img src={image} />
    </div>
  );
}

BestResult.propTypes = {
  image: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired
};

export default BestResult;
