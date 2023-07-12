function sendEmail(){
    Email.send({
        SecureToken : "1dc3b14a-4c36-4c4e-9e04-115ff7afd5d5",
        
        To : 'cityinn.bmt@gmail.com',
        From : 'adii.dg.2021@gmail.com',
        Subject : "New Enquiry from : "+document.getElementById("mail").value,
        Body : "Name : "+document.getElementById("name").value
                +"<br> Email : "+document.getElementById("mail").value
                +"<br> Phone No."+document.getElementById("phone").value
                +"<br> Message : "+document.getElementById("message").value
    }).then(
      message => alert("Thank You for Contacting Us, We will get back to you soon")
    );
}