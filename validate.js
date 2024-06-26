function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  if (nid.length !== 13 || !/^\d+$/.test(nid)) {
    return false;
  } else {
    return true;
  }
}

function checkTicketNo() {
  let num = (document.getElementById("ticknum").value).trim();
  if (isNaN(num) || num < 1 || num > 5) {
    return false;
  } else {
    return true;
  }
}

function validateForm(){
	if(!checkNID()){
	  alert("Invalid value for National ID!");
	  document.getElementById("nid").focus();
	  return false;
	}else{
		if(!checkTicketNo()){
		  alert("Invalid value for No.of tickets!!");
		  document.getElementById("ticknum").focus();
		  return false;
		}else{
			let total = priceCalculate();
			alert("Total price for this booking is "+total+" USD");
			return false;
		}
	}
}