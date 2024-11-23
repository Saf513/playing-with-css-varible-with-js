const inputs=document.querySelectorAll('.container input');

//declaration de la fonction handleupdate
function handleUpdate(){
    const suffixe =this.dataset.sizing || "";
    console.log(suffixe);
 document.documentElement.style.setProperty(`--${this.name}`,this.value+suffixe)
}

inputs.forEach(input => {
    // input.addEventListener('change',handleUpdate);
    input.addEventListener('input',handleUpdate);
});

