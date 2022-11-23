document.getElementById('submit-btn').addEventListener('click', function() {
    const userEmail = document.getElementById('user-email').value;
    const userPass = document.getElementById('user-password').value;

    if ((userEmail == "daya2018ctg@gmail.com") && (userPass == "12345") || (userEmail == "Asmaulhusnasonia752004@gmail.com" && (userPass == "asmajunaith")) || (userEmail == "mizan221@gmail.com") && (userPass == "Mizan221#")) {
        window.location.href = "bank-page.html";
    }
    else {alert("Wrong Email Or Password")}
})