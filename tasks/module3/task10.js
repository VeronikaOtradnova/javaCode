const fetchUrl = ( url)=> { console.log(`fetching ${url}`); }

const debounce = (func, ms)=> {
  let timer;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(func, ms)
  }
}

const fetching = debounce(fetchUrl('test-url'), 500)

fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);