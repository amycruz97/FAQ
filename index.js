// const myFunc = () => {
//     let x = document.getElementsByClassName('pFaq')
//     if (x.style.display === 'none') {
//         x.style.display = 'block'
//     } else {
//         x.style.display = 'none'

//     }

// }




// function myFunc() {
//     var x = document.getElementsByTagName('p');
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

// const list = document.querySelector('#palFaq')

// const searchBar = document.forms['search-books'].querySelector('input');
// searchBar.addEventListener('keyup', function(e) {
//     const term = e.target.value.toLowerCase();
//     const books = list.getElementsByTagName('h');
//     Array.from(books).forEach(function(book) {
//         const title = book.textContent;

//         if (title.includes(term)) {
//             book.style.display = 'block ';

//         } else {
//             book.style.display = 'none'
//         }

//     });
// });


// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//         } else {
//             panel.style.display = "block";
//         }
//     });
// }






































// // FAQ: Arrays of Question and Answer Object
// const faq = [{
//         "questions": "What's Your Name?",
//         "answers": `
//         <p>Amycruz</p>`,

//     },
//     {
//         "question": "How do I make payment?",
//         "answer": `
//         <p>Send money to my account.</p>
//     `
//     },
//     {
//         "question": "What's Your Phone Number?",
//         "answer": `
//         <p>0812829021</p>
//     `
//     },
//     {
//         "question": "When do I get back my payment?",
//         "answer": `
//         <p>At the end of the month</p>
//     `
//     }
// ]



// //INITIATE ACCORDION


// const initiateAccordion = (name) => {
//     let acc = document.getElementsByClassName(name);
//     let i;


//     for (i = 0; i < acc.length; i++) {
//         acc[i].addEventListener('click', function() {
//             this.classList.toggle("active");
//             let panel = this.nextElementSibling;
//             if (panel.style.maxHeight) {
//                 panel.style.maxHeight = null;
//             } else {
//                 panel.style.maxHeight = panel.scrollHeight + "px";
//             }
//         });
//     }

// }



// const accordionFaq = document.getElementById('accordionFaq ');
// var accordionHTML = " ";
// // Loop through each FAQ question 
// // Create an html string from the question in the accordion template
// faq.forEach((question) => {
//     accordionHTML += `
//     <button class="accordion"> 
//      ${question.question}
//      </button
//     <div class="panel">
//             ${question.answer}
//         </div>

//     `
// })

// // append the html string to the accordion wrapper

// accordionFaq.innerHTML = accordionHTML;

// // Call the function to turn all element with such class name to accordion and its siblings 
// initiateAccordion("accordion")


const FAQ = [{

        "question": "Why do we request for your BVN?",
        "answer": `
        <p>
        Your BVN is completely secure and we only need it for identity verification. Your BVN does not give us access to your financial data.
        </p>
        `
    },

    {
        "question": "I did not receive the OTP (one time password) sent to my phone.",
        "answer": `
        <p>

            <ul>
                <li>Please note that OTP can only be delivered to the mobile number tied the BVN.</li>
                <li>You can also verify your account using WhatsApp, this is available only for new customers’</li>
            </ul>
            <br>
            <span style="margin-left:20px"> (This can be achieved by sending VERIFY to 09060003933 on WhatsApp)</span>

        </p>
        `
    },
    {
        "question": "BVN and mobile number mismatch.",
        "answer": `
        <p>
            This means that the number entered is not linked to the BVN. However, this can be resolved by availing us of the following; (BVN print out from the Bank, and the new mobile number).<br>
            Alternatively, The customer can also visit the Bank for a BVN update.
        </p>
        `
    },
    {
        "question": "	How do I reset my Password?",
        "answer": `
        <p>
            Tap on the Forgot password button, a pop-up will display requesting if you would reset using Email of WhatsApp; If you select Email, you will be prompted to enter an email address,<br>
            If you decide to reset with WhatsApp, RESET text will automatically prefill into the text box, all you needed to do is to tap send. <br>
            <span style="font-weight:bold; ">Note </span>- Reset link can only be delivered to the email that is tied to the account. Please check your junk or spam folder of your email for the reset link. <br>
            (ZEE- 09060003933) will only send reset link to the mobile number that tied to the account.
        </p>
        `
    },

    {
        "question": "How do I know that my loan has been approved?",
        "answer": `
        <p>
        If your dashboard displays that “Your loan is currently being processed”, for more than 24hrs, please send an email to help@moneypal.ng.<br>
        <span style="font-weight:bold;">Note</span> - MoneyPal Nano Loan circle( Loan application – Loan approval - Disbursement ) does  not exceed 10 minutes.
    
        </p>
        `
    },
    {
        "question": "Why was my loan rejected?",
        "answer": `
        <p>
        We are using a pool of data sources to determine credit worthiness. However, if your loan was rejected, we advise that you should apply again.
        </p>
        `
    },
    {
        "question": "Does defaulting in loan repayment affect my credit worthiness?",
        "answer": `
        <p>
        Loans not that are not repaid on time or as when due, will affect how much you will access next time.
        </p>
        `
    },
    {
        "question": "How can I be eligible for a higher amount and a longer repayment tenure?",
        "answer": `
        <p>
        Successful loan repayments overtime increases the amount you can access with a possible longer repayment tenure.
        </p>
        `
    },
    {
        "question": "Why we request you to add your card?",
        "answer": `
        <p>
        This is an automated process and in a bid to make repayment process seamless, we request for the customer’s card, and this will enable us charge your bank  the exact amount <br> on the due date instead of going to the bankto pay over the counter or engaging in a bank transfer.<br>
        <span style="font-weight:bold;">Note </span>– We do not store your card details, your card information is stored in a PCI complaint external card vault provided by Flutterwave

        </p>
        `
    },
    {
        "question": "Possible Error while Adding Your Card.",
        "answer": `
        <p>
            <ul>
                <li>OTP has been validated – This simply means that you had earlier used the OTP and cannot be re-used.</li>
                <li>Server error, we cannot connect to the server at the moment – Please check your internet and try again.</li>
                <li>Do not honor- We would advise that you visit your bank if you are seeing this error or try using another bank card.</li>
                <li>Stolen card – We advise that you should visit your bank at this time. </li>
                <li>Card will expire in 3 months or less -  Please be informed that we do not accept cards that will expire in less than 3 months.</li>
                <li>Card not provisioned on token platform – We advise that you visit your bank should you see an error message like this.</li>
                <li>Sorry, we could not connect to your bank at the moment – Please, write us an email at help@moneypal.ng</li>
            </ul>
        
        </p>
        `
    },
    {
        "question": "Why we charge ₦100 for adding your card?",
        "answer": `
        <p>
        This is a non-refundable amount charged for verifying your card details. 
        </p>
        `
    },
    {
        "question": "My bank account was debited but my loan has not been closed.",
        "answer": `
        <p>
        We advise that you should avail us of the following so we can help you further;
        <ul>
            <li>The debit evidence or</li>
            <li>The debit amount and transaction date</li>
            <li>The first 6 and the last 4 digit of the card that was charged.</li>
        </ul>
    
        <span style="font-weight: bold;">Note</span> – We will not and never request for your full card details.
        Please disregard any person or group of people acting on behalf of Zedvance Finance Limited, requesting for your full card details

        </p>
        `
    }




];


console.log(FAQ)

// Initiate accordion


const initiateAccordion = (name) => {
    let acc = document.getElementsByClassName(name);

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function() {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}


const accordionWrapper = document.getElementById("accordion-wrapper")
var accordionHTML = ""


FAQ.forEach((question) => {
    accordionHTML += `
  
  <button class="accordion">${question.question}</button>
    <div class="panel">
        ${question.answer}
    </div>
    `
})

// append the html string to the accordion wrapper
accordionWrapper.innerHTML = accordionHTML
    // Call the function to turn all element with such class name to accordion and its siblings 
initiateAccordion("accordion")




//SEARCH FYNCTIONALITIES



document.getElementById("searchBtn").addEventListener("click", function(e) {
    e.preventDefault();
    const search = document.getElementById("search").value
    let accordionHTML = ""
        // Loop through each FAQ question 
        // Create an html string from the question in the accordion template
    FAQ.forEach((question) => {
            if (question.question.toLowerCase().includes(search.toLowerCase())) {
                accordionHTML += `
        <button class="accordion">${question.question}</button> 
        <div class="panel">
            ${question.answer}
        </div>`
            }
        })
        // append the html string to the accordion wrapper
    accordionWrapper.innerHTML = accordionHTML
        // Call the function to turn all element with such class name to accordion and its siblings 
    initiateAccordion("accordion")
})