import instantsearch from 'instantsearch.js';
import bestResult from '../index.js';

let search = instantsearch({
  appId: 'latency',
  apiKey: '6be0576ff61c053d5f9a3225e2a90f76',
  indexName: 'instant_search'
});

// add a searchBox
search.addWidget(
  instantsearch.widgets.searchBox({
    container: document.querySelector('#search-box'),
    placeholder: 'iphone...'
  })
);

// add a bestResult widget
search.addWidget(
  bestResult({
    container: document.querySelector('#best-result')
  })
);

search.start();
