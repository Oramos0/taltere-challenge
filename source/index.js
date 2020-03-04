const invertDate = userDate => {
  userDate = new Date(userDate);
  year = userDate.getFullYear().toString();
  month = (userDate.getMonth() + 1).toString();
  day = userDate.getDate().toString();
  if (month.length === 1) month = '0' + month;
  if (day.length === 1) day = '0' + dy;
  document.getElementById('invertData').innerHTML = `${year}/${month}/${day}`;
};

const getData = () => {
  invertDate(
    `${document.getElementById('month').value}/${
      document.getElementById('day').value
    }/${document.getElementById('year').value}`
  );
};
