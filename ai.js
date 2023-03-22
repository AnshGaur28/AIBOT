// const {Configuration , OpenAIApi} = require('openai');
// const consiguration = new Configuration({
//     apikey : "0P5KLnsprviuIEJGZOZtT3BlbkFJw2Im383FwDd7zYaEG7xz",

// });

// const openai = new OpenAIApi(Configuration);
// async function ask(prompt){
//     const response = await openai.createCompletion({
//         mmodel : "text-davinci-002",
//         prompt,
//         temperature: 0.7,
//         top_p: 1,`
//         frequency_penalty: 0,
//         presence_penalty: 0 ,
//     });
//     const answer = response.data.choices[0].text;
//     console.log(answer);
// }
// ask("What are the names of the planets in the solar system?");

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "<openai gpt-3 token>",
});
const openai = new OpenAIApi(configuration);
async function ask(prompt) {
    const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
const answer = response.data.choices[0].text;
console.log(answer);
return answer;
}
module.exports = {
    ask,
};
//Ask an example question
// ask("Who gave the thoery of relativity ?");