const findId = (url) => {
  let idxV = url.indexOf('v') + 2;
  let id = url.slice(idxV);

  return id;
};

// findId('https://www.youtube.com/watch?v=IO0issT0Rmc');
// findId('https://www.youtube.com/watch?v=8bdmXZ65b_4');
// findId('https://www.youtube.com/watch?v=D2gvhcf6occ');

export default findId;
