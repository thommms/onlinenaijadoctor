function myFunction() {
    document.getElementById("pay")= href="tel:+2348182026281";
  }


function makePayment() {
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
      tx_ref: "hooli-tx-1920bbtyt",
      amount: 1000,
      currency: "NGN",
      payment_options: "card, mobilemoneyghana, ussd",
      redirect_url: // specified redirect URL
        "https://callbacks.piedpiper.com/flutterwave.aspx?ismobile=34",
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: "onlinenaijadoctor@gmail.com",
        phone_number: "08102909304",
        name: "Femi Akinmuda",
      },
      callback: function (data) {
        console.log(data);
      },
      onclose: function() {
        // close modal
      },
      customizations: {
        title: "Online Naija Doctor",
        description: "Talk to a doctor now",
        logo: "images/logo.png",
      },
    });
  }





// function payWithPaystack() {

//     var handler = PaystackPop.setup({ 
//         key: 'your_public_key', //put your public key here
//         email: 'customer@email.com', //put your customer's email here
//         amount: 1000, //amount the customer is supposed to pay
//         metadata: {
//             custom_fields: [
//                 {
//                     display_name: "Mobile Number",
//                     variable_name: "mobile_number",
//                     value: "+2348012345678" //customer's mobile number
//                 }
//             ]
//         },
//         callback: function (response) {
//             //after the transaction have been completed
//             //make post call  to the server with to verify payment 
//             //using transaction reference as post data
//             $.post("verify.php", {reference:response.reference}, function(status){
//                 if(status == "success")
//                     //successful transaction
//                     alert('Transaction was successful');
//                 else
//                     //transaction failed
//                     alert(response);
//             });
//         },
//         onClose: function () {
//             //when the user close the payment modal
//             alert('Transaction cancelled');
//         }
//     });
//     handler.openIframe(); //open the paystack's payment modal
// }