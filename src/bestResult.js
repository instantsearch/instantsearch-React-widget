import React from 'react';
import ReactDOM from 'react-dom';

import BestResult from './components/BestResult';
import NoResults from './components/NoResults';

// instantsearch.js custom widget with React
function bestResult({container}) {
  // See more details in our documentation:
  // https://community.algolia.com/instantsearch.js/documentation/#custom-widgets
  //
  // You can use any existing React component you want.
  //
  // This is the custom widget interface (just an object). You need to implement
  // at least render OR init.
  return {
    getConfiguration: () => ({
      // Here we only want one hit in the results, so we configure `hitsPerPage`.
      //
      // This parameter is one of Algolia's REST API: https://www.algolia.com/doc/rest#pagination-parameters
      //
      // See all the parameters here: https://www.algolia.com/doc/rest
      //
      // In the end, the underlying JS object being configured is the JavaScript helper of Algolia.
      // See http://algolia.github.io/algoliasearch-helper-js/docs/SearchParameters.html
      hitsPerPage: 1
    }),

    init(/* {state, helper} */) {
      // Nothing to do here, only present for documentation
    },

    render({results/* , helper, state */}) {
      if (results.hits.length === 0) {
        ReactDOM.render(
          <NoResults message="No results, try another search." />,
          container
        );

        return;
      }

      let result = results.hits[0];
      ReactDOM.render(
        <BestResult
          image={result.image}
          name={result.name}
          price={result.price}
        />,
        container
      );
    }
  };
}

export default bestResult;
