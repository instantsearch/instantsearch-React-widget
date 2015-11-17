import React from 'react';

function NoResults({message}) {
  return <div>{message}</div>;
}

NoResults.propTypes = {
  message: React.PropTypes.string.isRequired
};

export default NoResults;
