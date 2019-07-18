function validateName() {
    var x = document.myForm.name1.value;
    var regex=(/^[A-Za-z]{3,20}$/);
    if (!regex.test(x)) {
     document.getElementById("name2").style.display="inline";
    }
    else{
        document.getElementById("name2").style.display="none";
    }
}
function validateDob() {
    var x = document.myForm.dob.value;
    var regex=(/^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\\d\\d$/);
    if (!regex.test(x)) {
     document.getElementById("dob2").style.display="inline";
    }
    else{
        document.getElementById("dob2").style.display="none";
    }
}