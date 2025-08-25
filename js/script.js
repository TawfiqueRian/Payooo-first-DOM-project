// console.log("Script is connencted")

document.getElementById('loginBtn').addEventListener('click', function(e){
    e.preventDefault();
    const mobile = '01711529698';
    const pin = '1234';
    const takeMobileNumber = document.getElementById('mobile-number');
    const mobileNumber = takeMobileNumber.value;
    const takePinNumber = document.getElementById('pin-number');
    const pinNumber = takePinNumber.value;
    if(mobileNumber === mobile && pinNumber === pin)
    {
        window.location.href = "./home.html";
    }
    else
    {
        alert('Invalid credentials');
    }
})