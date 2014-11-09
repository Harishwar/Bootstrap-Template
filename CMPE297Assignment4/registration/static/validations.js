function Registration(first_name,last_name,user_name,email,phone,ssn,password,dob,dob_time,cc_number,url)
{
	this.first_name=first_name;
	this.last_name=last_name;
	this.user_name= user_name;
	this.email=email;
	this.phone=phone;
	this.ssn=ssn;
	this.password=password;
	this.dob=dob;
	this.dob_time=dob_time;
	this.cc_number=cc_number;
	this.url=url;
};

Registration.prototype.toJsonString=function(reg_obj)
{
	jsonObj=JSON.stringify(reg_obj);
	return jsonObj;
}

Registration.prototype.readFromJSONString=function(reg_obj)
{
	return toJsonString(reg_obj);
}
Registration.prototype.isPhoneNumberFormatValid=function(phone)
{
	//alert("checking" + /\d\d\d-\d\d\d-\d\d\d\d/.test(phone));
	if(/^\d\d\d-\d\d\d-\d\d\d\d$/.test(phone))
	{
		return true;
	}
	else
	{
		return false;
	}
	
	
//	var ph=phone.replace(/-/gi,'');
/*if((!isNaN(ph)) && phone.length==12 && phone.lastIndexOf('-')===7 && parseInt(phone.indexOf('-'))===3)
{
	//var count=phone.length;
	//var c=;
	alert("valid"+""+ph);
}*/

}
Registration.prototype.isValidEmail=function(email)
{
	if((/^[a-zA-Z0-9]+.*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).test(email))
	{
		return true;
	}
	else
	{
		return false;
	}
}
/*function registerObject()
{
	var RegistrationObj={
	first_name,
	data.LastName.value,
	user_name: function(){ return this.first_name+" "+data.LastName.value},
	email:data.email.value,
	phone:data.phone.value,
	ssn:data.ssn.value,
	password:data.password.value,
	dob:data.dob.value,
	dob_time:data.dob_time.value,
	cc_number:data.credit_Card.value,
	toJsonString:function()
	{
		return JSON.stringify(RegistrationObj);
	}
	};
	alert();
}*/
var uniqueId=0;
var uniqueId1=0;
/*function createObjectFormData(data)
{
	alert("hii");
	var RegistrationObj={
	first_name:data.FirstName.value,
	last_name:data.LastName.value,
	user_name: function(){ return this.first_name+" "+data.LastName.value},
	email:data.email.value,
	phone:data.phone.value,
	ssn:data.ssn.value,
	password:data.password.value,
	dob:data.dob.value,
	dob_time:data.dob_time.value,
	cc_number:data.credit_Card.value,
	toJsonString:function()
	{
		return JSON.stringify(RegistrationObj);
	},
	readFromJSONString:function()
	{
		//alert("");
	},
	isPhoneNumberFormatValid:function()
	{
		
	},
	isValidEmail:function()
	{
	}
	
	};
	
	alert("last strp");
	 saveToLocalStorage();
}*/
	
function saveToLocalStorage(jsonObj)
{
	//alert("saver");
	localStorage.setItem("object",jsonObj);
	//return uniqueId;
}
function saveToSessionStorage(jsonObj)
{
	sessionStorage.setItem("object",jsonObj);
}
function readFromLocalStorage(identifier)
{
	return localStorage.getItem("object");
}
function readFromSessionStorage(identifier)
{
	return sessionStorage.getItem("object");
}

function strengthCheck(container,passcode,index)
{
	//var pattern =new RegExp("/[a-z]/g");
	//If password contains 3 Uppercase letters, 2 Lowercase letters and greater than 5 special characters, then Password 				    //strength is Strong
	//var pattern= /(?=.*[a-z]{2})(?=.*[A-Z]{3})/;
	console.log(container);

	var pattern=/(?=([a-z]+)([A-Z]+))/;
	var pattern=/(?=(?=.*[a-z]{2,})(?=.*[A-Z]{3,})(?=.*[!@#$%]{5,}))/ 
	passCode=passcode.id;
	console.log(document.getElementById(passCode).value);
	testString=document.getElementById(passCode).value;
	passwordMeter=(document.getElementById(container.id).getElementsByTagName("progress"));
	console.log("Entered Password"+testString);
	console.log(passwordMeter);
	
	if((/(?=((?=(.*[a-z]){2,}))((?=(.*[A-Z]){3,}))((?=(.*[!@#$%]){5,})))/).test(testString))
	{
		passwordMeter[index].value=120;
		console.log("Strong");
	}
	else if((/(?=((?=(.*[a-z]){2,}))((?=(.*[A-Z]){3,}))((?=(.*[!@#$%]){3,4})))/).test(testString))
	{
		passwordMeter[index].value=80;
		console.log("Medium");		
	}
	else if((/(?=((?=(.*[a-z]){2,}))((?=(.*[A-Z]){3,}))((?=(.*[!@#$%]){2})))/).test(testString))
	{
		passwordMeter[index].value=40;
		console.log("Normal");
	}
	else
	{
		passwordMeter[index].value=0;
		console.log("Weak");
	}
}
function comparePass()
{
	pass=document.getElementById("password").value;
	cpass=document.getElementById("c_password").value;
	console.log(pass);
	console.log(cpass);
	if(pass==cpass)
	{
		console.log("Identical");
		document.getElementById("strength").innerHTML="Identical!!!!"
	}
	else
	{
		console.log("Not");
		document.getElementById("strength").innerHTML="Non Identical!!!!"
	}
	
}

function netOfflineOrOnLine()
{
var a=navigator.onLine;
 if(a){
  console.log('online');
 }
 else{
  alert('Offline!!!!Please check your Internet connection');
 }
}