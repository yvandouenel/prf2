window.onload = () => {
    console.log('dans convert.js');
    const inputeuro = document.getElementById("euro");
    const inputfch = document.getElementById("fch");
    inputeuro.oninput = function() {
        
        const eurovalue = this.value;
        console.log('dans oninput - eurovalue = ', this.value);
        if(isNaN(eurovalue) ) {
            alert("Entrez un nombre !!!");
            inputeuro.value = "";
        } else {
            inputfch.value = eurovalue * 1.09;
        }
        
    }
    inputfch.oninput = function() {
        const fchvalue = this.value;
        console.log('dans oninput - fchvalue = ', this.value);
        if(isNaN(fchvalue) ) {
            alert("Entrez un nombre !!!");
            inputfch.value = "";
        } else {
            inputeuro.value = fchvalue / 1.09;
        }
        
    }
}