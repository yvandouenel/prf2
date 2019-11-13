(function() {
    let i = 1;
    function a() {
      let j = 2;
      b();
      function b(){
        let l = 4;
        {
            let k = 3;
            console.log(l);
            console.log(i);
          }
      }
    }
    a();
})();