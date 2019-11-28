window.onload = () => {
  const url_basis = "http://data.fixer.io/api/";
  const key = "8a82646ef16df5105eed774a0f042149";
  const currencies = "&symbols=USD,CHF,JPY";
  const seven_days_data = [];
  const date = new Date();
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  console.log("Dom chargé");
  //http://data.fixer.io/api/latest?access_key=&format=1
  //   fetch(`${url_basis}latest?access_key=${key}${currencies}&format=1`)
  //     .then(response => {
  //       console.log("data", response);
  //       response.json().then(json => {
  //         // traitement du JSON
  //         console.log("json : ", json);
  //       });
  //     })
  //     .catch(error => console.error(error));
  drawInitial();
  getLastWeekDatas();
  function drawInitial() {
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(0, 0, 2, 350);

    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, 298, 300, 2);
  }
  function drawCurve() {
    console.log("dans drawCurve");

    for (let i = 0; i < seven_days_data.length; i++) {
      //console.log("seven_days_data[" + i + "]", seven_days_data[i].CHF);
      ctx.fillStyle = "rgb(0,0,0)";
      let x = 300 - i * 10;
      let y = 300 - seven_days_data[i].CHF * 10;
      ctx.fillRect(x, y, 10, 2);

      ctx.fillStyle = "rgb(255,0,0)";
      y = 300 - seven_days_data[i].JPY * 1;
      ctx.fillRect(x, y, 10, 2);
    }
  }
  function getLastWeekDatas() {
    //http://data.fixer.io/api/2013-03-16?

    // il faut attendre que toutes les promises soient faites
    Promise.all([
      customFetch(getStringDate(0), 0),
      customFetch(getStringDate(1), 1),
      customFetch(getStringDate(2), 2),
      customFetch(getStringDate(3), 3),
      customFetch(getStringDate(4), 4),
      customFetch(getStringDate(5), 5),
      customFetch(getStringDate(6), 6)
    ]).then(function(values) {
      console.log("seven_days_data : ", seven_days_data);
    });
  }
  function getStringDate(i) {
    return (
      date.getFullYear() + "-" + date.getMonth() + "-" + (date.getDate() - i)
    );
  }

  function customFetch(specific_date, index) {
    fetch(
      `${url_basis}${specific_date}?access_key=${key}${currencies}&format=1`
    )
      .then(response => {
        //console.log("data", response);
        response.json().then(json => {
          // traitement du JSON
          //console.log("json précédent : ", json);
          seven_days_data[index] = json.rates;
          //console.log("json", json.rates);
          drawCurve();
        });
      })
      .catch(error => console.error(error));
  }
};
