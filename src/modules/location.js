const displayLocHrs = () => {
  const main = document.querySelector('main');

  const locHrsContainer = document.createElement('div');
  locHrsContainer.id = 'lochrs-container';
  // main.append(locHrsContainer);

  const title = document.createElement('h1');
  title.id = 'lochrs-heading';
  title.textContent = 'Location & Hours';
  locHrsContainer.append(title);

  main.append(locHrsContainer);

}

export default displayLocHrs;