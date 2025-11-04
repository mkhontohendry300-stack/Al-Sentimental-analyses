// Mind-Pulse AI — Sentiment Analyzer

const form = document.querySelector("form");
const textarea = document.querySelector("#userInput");
const resultCard = document.querySelector(".result-card");
const sentimentText = document.querySelector(".sentiment");
const polarityText = document.querySelector(".polarity");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = textarea.value.trim();

  if (!text) {
    alert("Please enter some text to analyze!");
    return;
  }

  analyzeSentiment(text);
});

function analyzeSentiment(text) {
  // Simulate AI sentiment analysis
  const positiveWords = ["happy", "good", "love", "great", "amazing", "excellent"];
  const negativeWords = ["sad", "bad", "hate", "terrible", "horrible", "awful"];

  let score = 0;

  positiveWords.forEach((word) => {
    if (text.toLowerCase().includes(word)) score++;
  });

  negativeWords.forEach((word) => {
    if (text.toLowerCase().includes(word)) score--;
  });

  let sentiment;
  if (score > 0) sentiment = "Positive 😊";
  else if (score < 0) sentiment = "Negative 😞";
  else sentiment = "Neutral 😐";

  displayResult(sentiment, score);
}

function displayResult(sentiment, score) {
  sentimentText.textContent = sentiment;
  polarityText.textContent = `Polarity score: ${score}`;

  resultCard.style.display = "block";
  resultCard.classList.add("fadeIn");
}
