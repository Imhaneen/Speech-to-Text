const startButton = document.getElementById('startButton');
const resultDiv = document.getElementById('result');
const languageSelect = document.getElementById('language');

if (!('webkitSpeechRecognition' in window)) {
    alert('Speech recognition not supported. Please use a modern browser.');
} else {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = languageSelect.value;

    recognition.onstart = () => {
        startButton.textContent = 'Listening...';
        startButton.disabled = true;
    };

    recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
                                .map(result => result[0].transcript)
                                .join('');
        resultDiv.textContent = transcript;
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        startButton.textContent = 'Start Listening';
        startButton.disabled = false;
    };

    recognition.onend = () => {
        startButton.textContent = 'Start Listening';
        startButton.disabled = false;
    };

    startButton.addEventListener('click', () => {
        if (recognition.started) {
            recognition.stop();
            recognition.started = false;
        } else {
            recognition.lang = languageSelect.value;
            recognition.start();
            recognition.started = true;
        }
    });

    languageSelect.addEventListener('change', () => {
        if (recognition.started) {
            recognition.stop();
            recognition.lang = languageSelect.value;
            recognition.start();
        } else {
            recognition.lang = languageSelect.value;
        }
    });
}
