{screen === "cards" && (
        <div>
          <h2>📘 Выбери перевод слова</h2>
          <p><strong>{quizWord}</strong></p>
          <div className="buttons">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                style={{
                  backgroundColor: showResult
                    ? option === "Привет"
                      ? "lightgreen"
                      : isCorrect
                      ? ""
                      : "salmon"
                    : "",
                }}
              >
                {option}
              </button>
            ))}
          </div>
          {showResult && (
            <div style={{ marginTop: "10px" }}>
              {isCorrect ? (
                <>
                  <p style={{ color: "green" }}>✅ Верно!</p>
                  <button onClick={() => { setScreen("sentence"); setShowResult(false); }}>➡️ Далее</button>
                </>
              ) : (
                <p style={{ color: "red" }}>❌ Неверно</p>
              )}
            </div>
          )}
        </div>
      )}

      {screen === "sentence" && (
        <div>
          <h2>📌 Составь предложение</h2>
          <p><strong>{sentenceKaz}</strong></p>
          <div className="buttons">
            {sentenceWords.map((word) => (
              <button
                key={word}
                onClick={() => handleSentenceSelect(word)}
                disabled={sentenceAnswer.includes(word)}
              >
                {word}
              </button>
            ))}
          </div>
          <div style={{ marginTop: "10px" }}>
            <p><strong>Ваш ответ:</strong> {sentenceAnswer.join(" ")}</p>
          </div>
          {sentenceAnswer.length === correctSentence.length && (
            <div>
              {sentenceAnswer.join(" ") === correctSentence.join(" ") ? (
                <>
                  <p style={{ color: "green" }}>✅ Молодец! Всё правильно.</p>
                  <button onClick={() => setScreen("home")}>🏠 В меню</button>
                </>
              ) : (
                <>
                  <p style={{ color: "red" }}>❌ Ошибка! Попробуй снова.</p>
                  <button onClick={resetSentence}>🔁 Повторить</button>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;


