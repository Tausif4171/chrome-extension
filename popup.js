// popup.js

document.getElementById('enterButton').addEventListener('click', processInput);
document.getElementById('sendButton').addEventListener('click', sendEmail);

async function processInput() {
    const subject = document.getElementById('subject').value;
    const body = document.getElementById('body').value;
    const from = document.getElementById('from').value;

    // Call GPT-4 API with user input
    // const gpt4Response = await callGPT4API({ subject, body, from });
    const gpt4Response = 'Heres the response which is generated and it is this which is displayed!!! ';

    // Display the GPT-4 response
    document.getElementById('response').innerText = gpt4Response;
    document.getElementById('response-container').style.display = 'block';
}

function sendEmail() {
    // Implement your logic to send the email with the generated content
    alert('Email sent!');
}

// async function callGPT4API(data) {
//     const response = await fetch('https://api.openai.com/v1/chat/completions', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer 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', // Replace with your actual OpenAI API key
//         },
//         body: JSON.stringify({
//             model: 'gpt-4',
//             max_tokens: 200,
//             temperature: 0.9,
//             messages: [{ role: 'user', content: `Subject: ${data.subject}\nBody: ${data.body}\nFrom: ${data.from}` }],
//         }),
//     });

//     const result = await response.json();
//     return result.choices[0].message.content;
// }