const getTheTitles = function (array) {
  let titles = [];
  let i = 0;
  array.forEach(item => {
    titles[i++] = item['title'];
  });
  return titles;

  //⬇️ Better way to do this ⬇️
  //return (array.map(item => item.title));
};

// Do not edit below this line
module.exports = getTheTitles;
