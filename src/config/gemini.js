async function run(prompt) {
    const chatSession = model.startChat({
        generationConfig,
        safetySettings,
        history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text();
}

export default run;