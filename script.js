document.addEventListener('DOMContentLoaded', () => {
    const emotionForm = document.getElementById('emotionForm');
    const historyList = document.getElementById('historyList');
    const settingsForm = document.getElementById('settingsForm');
    const themeSelect = document.getElementById('theme');

    emotionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emotion = document.getElementById('emotion').value;
        const note = document.getElementById('note').value;

        if (emotion === '') {
            alert('Please select an emotion.');
            return;
        }

        const entry = document.createElement('div');
        entry.classList.add('history-entry');
        entry.innerHTML = `<strong>Emotion:</strong> ${emotion} <br><strong>Note:</strong> ${note}`;
        historyList.appendChild(entry);
        emotionForm.reset();
    });

    settingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        document.body.className = themeSelect.value;
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = savedTheme;
        themeSelect.value = savedTheme;
    }

    themeSelect.addEventListener('change', () => {
        localStorage.setItem('theme', themeSelect.value);
    });
});
