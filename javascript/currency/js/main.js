window.onload = () => {
  console.log("Dom chargé");
  //http://data.fixer.io/api/latest?access_key=8a82646ef16df5105eed774a0f042149&format=1
  fetch(
    "http://data.fixer.io/api/latest?access_key=8a82646ef16df5105eed774a0f042149&format=1"
  )
    .then(data => {
      console.log("data", data);
    })
    .catch(error => console.error(error));
};
