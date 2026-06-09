import { useState, useRef } from "react";

const COLORS = {
  bg: "#0F1117",
  surface: "#1A1D27",
  card: "#21253A",
  accent: "#6C63FF",
  accentLight: "#8B85FF",
  accentGlow: "rgba(108,99,255,0.15)",
  text: "#E8E9F3",
  textMuted: "#8A8FA8",
  border: "#2E3350",
  success: "#4ECDC4",
  warning: "#FFB347",
};

const styles = {
  app: {
    minHeight: "100vh",
    background: COLORS.bg,
    color: COLORS.text,
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    direction: "rtl",
  },
  header: {
    padding: "24px 32px",
    borderBottom: `1px solid ${COLORS.border}`,
    background: COLORS.surface,
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  logo: {
    width: 40,
    height: 40,
    background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentLight})`,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 700,
    margin: 0,
    background: `linear-gradient(135deg, ${COLORS.text}, ${COLORS.accentLight})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: { fontSize: 13, color: COLORS.textMuted, margin: 0 },
  main: { maxWidth: 900, margin: "0 auto", padding: "32px 24px" },
  uploadZone: {
    border: `2px dashed ${COLORS.border}`,
    borderRadius: 16,
    padding: "48px 32px",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.2s",
    background: COLORS.surface,
  },
  uploadZoneActive: {
    border: `2px dashed ${COLORS.accent}`,
    background: COLORS.accentGlow,
  },
  uploadIcon: { fontSize: 48, marginBottom: 16 },
  uploadTitle: { fontSize: 18, fontWeight: 600, marginBottom: 8 },
  uploadSub: { fontSize: 14, color: COLORS.textMuted },
  btn: {
    padding: "12px 24px",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 14,
    transition: "all 0.2s",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
  },
  btnPrimary: {
    background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentLight})`,
    color: "#fff",
    boxShadow: `0 4px 16px ${COLORS.accentGlow}`,
  },
  btnSecondary: {
    background: COLORS.card,
    color: COLORS.text,
    border: `1px solid ${COLORS.border}`,
  },
  btnGroup: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 },
  card: {
    background: COLORS.surface,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 16,
    padding: 24,
    marginTop: 24,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 16,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  textBlock: {
    background: COLORS.card,
    borderRadius: 10,
    padding: 16,
    fontSize: 14,
    lineHeight: 1.8,
    color: COLORS.text,
    whiteSpace: "pre-wrap",
  },
  loader: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    color: COLORS.textMuted,
    fontSize: 14,
    padding: 16,
  },
  spinner: {
    width: 20,
    height: 20,
    border: `2px solid ${COLORS.border}`,
    borderTop: `2px solid ${COLORS.accent}`,
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },
  tabBar: { display: "flex", gap: 8, marginBottom: 20 },
  tab: {
    padding: "8px 18px",
    borderRadius: 8,
    border: `1px solid ${COLORS.border}`,
    background: "transparent",
    color: COLORS.textMuted,
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 600,
    transition: "all 0.15s",
  },
  tabActive: {
    background: COLORS.accent,
    color: "#fff",
    border: `1px solid ${COLORS.accent}`,
  },
  quizQuestion: {
    background: COLORS.card,
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  quizQ: { fontWeight: 600, marginBottom: 12, fontSize: 15 },
  quizOption: {
    padding: "10px 16px",
    borderRadius: 8,
    border: `1px solid ${COLORS.border}`,
    background: COLORS.surface,
    color: COLORS.text,
    cursor: "pointer",
    marginBottom: 8,
    fontSize: 14,
    textAlign: "right",
    transition: "all 0.15s",
    width: "100%",
  },
  quizOptionCorrect: {
    border: `1px solid ${COLORS.success}`,
    background: "rgba(78,205,196,0.1)",
    color: COLORS.success,
  },
  quizOptionWrong: {
    border: `1px solid #FF6B6B`,
    background: "rgba(255,107,107,0.1)",
    color: "#FF6B6B",
  },
  flashcard: {
    perspective: 1000,
    height: 220,
    cursor: "pointer",
    marginBottom: 16,
  },
  flashcardInner: {
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "transform 0.5s",
    transformStyle: "preserve-3d",
  },
  flashcardFace: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: 14,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    textAlign: "center",
    boxSizing: "border-box",
  },
  flashcardFront: {
    background: `linear-gradient(135deg, ${COLORS.card}, #1E2340)`,
    border: `1px solid ${COLORS.border}`,
  },
  flashcardBack: {
    background: `linear-gradient(135deg, ${COLORS.accent}22, ${COLORS.accentLight}11)`,
    border: `1px solid ${COLORS.accent}`,
    transform: "rotateY(180deg)",
  },
  fileInfo: {
    background: COLORS.card,
    borderRadius: 10,
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
    fontSize: 13,
  },
  progress: {
    height: 4,
    background: COLORS.border,
    borderRadius: 2,
    overflow: "hidden",
    marginTop: 8,
  },
  progressBar: {
    height: "100%",
    background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.accentLight})`,
    borderRadius: 2,
    transition: "width 0.3s",
  },
  badge: {
    display: "inline-block",
    padding: "2px 10px",
    borderRadius: 20,
    fontSize: 11,
    fontWeight: 700,
    background: COLORS.accentGlow,
    color: COLORS.accentLight,
    border: `1px solid ${COLORS.accent}33`,
  },
  scoreBox: {
    textAlign: "center",
    padding: 20,
    background: COLORS.card,
    borderRadius: 12,
    marginTop: 16,
  },
};

// ---- Flashcard Component ----
function Flashcard({ card, index }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div style={styles.flashcard} onClick={() => setFlipped(!flipped)}>
      <div
        style={{
          ...styles.flashcardInner,
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div style={{ ...styles.flashcardFace, ...styles.flashcardFront }}>
          <div style={{ fontSize: 12, color: COLORS.textMuted, marginBottom: 8 }}>
            کارت {index + 1} — سوال
          </div>
          <div style={{ fontSize: 16, fontWeight: 600 }}>{card.front}</div>
          <div style={{ fontSize: 11, color: COLORS.textMuted, marginTop: 12 }}>
            برای دیدن جواب کلیک کنید 👆
          </div>
        </div>
        <div style={{ ...styles.flashcardFace, ...styles.flashcardBack }}>
          <div style={{ fontSize: 12, color: COLORS.accentLight, marginBottom: 8 }}>
            جواب ✓
          </div>
          <div style={{ fontSize: 15, lineHeight: 1.7 }}>{card.back}</div>
        </div>
      </div>
    </div>
  );
}

// ---- Quiz Component ----
function Quiz({ questions }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (qIndex, oIndex) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIndex]: oIndex }));
  };

  const score = submitted
    ? questions.filter((q, i) => answers[i] === q.correct).length
    : 0;

  return (
    <div>
      {questions.map((q, qi) => (
        <div key={qi} style={styles.quizQuestion}>
          <div style={styles.quizQ}>
            {qi + 1}. {q.question}
          </div>
          {q.options.map((opt, oi) => {
            let optStyle = { ...styles.quizOption };
            if (submitted) {
              if (oi === q.correct) optStyle = { ...optStyle, ...styles.quizOptionCorrect };
              else if (answers[qi] === oi) optStyle = { ...optStyle, ...styles.quizOptionWrong };
            } else if (answers[qi] === oi) {
              optStyle = { ...optStyle, background: COLORS.accentGlow, borderColor: COLORS.accent };
            }
            return (
              <button key={oi} style={optStyle} onClick={() => handleAnswer(qi, oi)}>
                {opt}
              </button>
            );
          })}
          {submitted && q.explanation && (
            <div style={{ fontSize: 12, color: COLORS.textMuted, marginTop: 8, padding: "8px 12px", background: COLORS.bg, borderRadius: 6 }}>
              💡 {q.explanation}
            </div>
          )}
        </div>
      ))}
      {!submitted ? (
        <button
          style={{ ...styles.btn, ...styles.btnPrimary }}
          onClick={() => setSubmitted(true)}
          disabled={Object.keys(answers).length < questions.length}
        >
          ✅ ثبت پاسخ‌ها
        </button>
      ) : (
        <div style={styles.scoreBox}>
          <div style={{ fontSize: 32, fontWeight: 800, color: score >= questions.length * 0.6 ? COLORS.success : COLORS.warning }}>
            {score}/{questions.length}
          </div>
          <div style={{ color: COLORS.textMuted, marginTop: 4 }}>
            {score >= questions.length * 0.8 ? "🎉 عالی!" : score >= questions.length * 0.6 ? "👍 خوب بود!" : "📚 بیشتر مطالعه کن"}
          </div>
          <button style={{ ...styles.btn, ...styles.btnSecondary, marginTop: 12 }} onClick={() => { setAnswers({}); setSubmitted(false); }}>
            🔄 دوباره امتحان
          </button>
        </div>
      )}
    </div>
  );
}

// ---- Main App ----
export default function StudyAssistant() {
  const [pdfText, setPdfText] = useState("");
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("");
  const [summary, setSummary] = useState("");
  const [questions, setQuestions] = useState([]);
  const [flashcards, setFlashcards] = useState([]);
  const [activeTab, setActiveTab] = useState("summary");
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef();

  const readPDF = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const base64 = e.target.result.split(",")[1];
          resolve(base64);
        } catch (err) { reject(err); }
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const callClaude = async (systemPrompt, userContent) => {
    const body = {
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      system: systemPrompt,
      messages: [{ role: "user", content: userContent }],
    };
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data.content.map(i => i.text || "").join("");
  };

  const callClaudeWithPDF = async (base64, systemPrompt, instruction) => {
    const body = {
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      system: systemPrompt,
      messages: [{
        role: "user",
        content: [
          { type: "document", source: { type: "base64", media_type: "application/pdf", data: base64 } },
          { type: "text", text: instruction }
        ]
      }],
    };
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data.content.map(i => i.text || "").join("");
  };

  const processFile = async (file) => {
    if (!file || file.type !== "application/pdf") {
      setError("لطفاً یک فایل PDF آپلود کنید.");
      return;
    }
    setError("");
    setLoading(true);
    setFileName(file.name);
    setSummary(""); setQuestions([]); setFlashcards([]);

    try {
      setLoadingMsg("در حال خواندن فایل PDF...");
      const base64 = await readPDF(file);
      setPdfText(base64);

      // Summary
      setLoadingMsg("در حال خلاصه‌سازی...");
      const sumResult = await callClaudeWithPDF(
        base64,
        "تو یک دستیار آموزشی هستی. همیشه به فارسی پاسخ بده.",
        "این PDF را به فارسی خلاصه کن. یک خلاصه جامع و ساختاریافته با نقاط کلیدی بنویس. از عنوان‌ها و بولت‌پوینت استفاده کن."
      );
      setSummary(sumResult);

      // Quiz
      setLoadingMsg("در حال تولید سوالات امتحانی...");
      const quizResult = await callClaudeWithPDF(
        base64,
        "تو یک دستیار آموزشی هستی. فقط JSON خالص برگردان، بدون هیچ توضیح یا backtick.",
        `از محتوای این PDF، دقیقاً ۵ سوال چندگزینه‌ای به فارسی بساز.
فرمت JSON:
[{"question":"متن سوال","options":["گزینه الف","گزینه ب","گزینه ج","گزینه د"],"correct":0,"explanation":"توضیح کوتاه"}]
correct یعنی index گزینه درست (0-3). فقط JSON برگردان.`
      );
      try {
        const clean = quizResult.replace(/```json|```/g, "").trim();
        setQuestions(JSON.parse(clean));
      } catch { setQuestions([]); }

      // Flashcards
      setLoadingMsg("در حال تولید فلش‌کارت...");
      const flashResult = await callClaudeWithPDF(
        base64,
        "تو یک دستیار آموزشی هستی. فقط JSON خالص برگردان، بدون هیچ توضیح یا backtick.",
        `از این PDF، دقیقاً ۶ فلش‌کارت آموزشی به فارسی بساز.
فرمت JSON:
[{"front":"سوال یا مفهوم","back":"جواب یا توضیح"}]
فقط JSON برگردان.`
      );
      try {
        const clean2 = flashResult.replace(/```json|```/g, "").trim();
        setFlashcards(JSON.parse(clean2));
      } catch { setFlashcards([]); }

      setActiveTab("summary");
    } catch (err) {
      setError("خطا در پردازش فایل. لطفاً دوباره تلاش کنید.");
    } finally {
      setLoading(false);
      setLoadingMsg("");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault(); setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) processFile(file);
  };

  const hasData = summary || questions.length > 0 || flashcards.length > 0;

  return (
    <>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        button:hover { opacity: 0.88; transform: translateY(-1px); }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${COLORS.bg}; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.border}; border-radius: 3px; }
      `}</style>
      <div style={styles.app}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.logo}>🎓</div>
          <div>
            <h1 style={styles.title}>دستیار مطالعه هوشمند</h1>
            <p style={styles.subtitle}>خلاصه‌سازی · سوال امتحانی · فلش‌کارت</p>
          </div>
        </div>

        <div style={styles.main}>
          {/* Upload */}
          {!hasData && !loading && (
            <div
              style={{ ...styles.uploadZone, ...(dragging ? styles.uploadZoneActive : {}) }}
              onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileRef.current.click()}
            >
              <div style={styles.uploadIcon}>📄</div>
              <div style={styles.uploadTitle}>فایل PDF خود را اینجا بکشید</div>
              <div style={styles.uploadSub}>یا کلیک کنید تا فایل انتخاب کنید</div>
              <input ref={fileRef} type="file" accept=".pdf" style={{ display: "none" }} onChange={(e) => processFile(e.target.files[0])} />
              <div style={{ marginTop: 20 }}>
                <span style={styles.badge}>PDF فقط</span>
              </div>
            </div>
          )}

          {error && (
            <div style={{ background: "rgba(255,107,107,0.1)", border: "1px solid #FF6B6B", borderRadius: 10, padding: "12px 16px", color: "#FF6B6B", fontSize: 14, marginTop: 16 }}>
              ⚠️ {error}
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div style={styles.card}>
              <div style={styles.fileInfo}>
                <span>📄</span>
                <span style={{ fontWeight: 600 }}>{fileName}</span>
              </div>
              <div style={styles.loader}>
                <div style={styles.spinner} />
                <span>{loadingMsg}</span>
              </div>
              <div style={styles.progress}>
                <div style={{ ...styles.progressBar, width: summary ? "90%" : loadingMsg.includes("سوال") ? "60%" : loadingMsg.includes("فلش") ? "80%" : "30%" }} />
              </div>
            </div>
          )}

          {/* Results */}
          {hasData && !loading && (
            <div>
              <div style={styles.fileInfo}>
                <span>📄</span>
                <span style={{ fontWeight: 600, flex: 1 }}>{fileName}</span>
                <button style={{ ...styles.btn, ...styles.btnSecondary, padding: "6px 14px", fontSize: 12 }} onClick={() => { setPdfText(""); setFileName(""); setSummary(""); setQuestions([]); setFlashcards([]); setError(""); }}>
                  🔄 فایل جدید
                </button>
              </div>

              {/* Tabs */}
              <div style={styles.tabBar}>
                <button style={{ ...styles.tab, ...(activeTab === "summary" ? styles.tabActive : {}) }} onClick={() => setActiveTab("summary")}>
                  📝 خلاصه
                </button>
                <button style={{ ...styles.tab, ...(activeTab === "quiz" ? styles.tabActive : {}) }} onClick={() => setActiveTab("quiz")} disabled={!questions.length}>
                  ❓ آزمون ({questions.length})
                </button>
                <button style={{ ...styles.tab, ...(activeTab === "flash" ? styles.tabActive : {}) }} onClick={() => setActiveTab("flash")} disabled={!flashcards.length}>
                  🃏 فلش‌کارت ({flashcards.length})
                </button>
              </div>

              {activeTab === "summary" && summary && (
                <div style={styles.card}>
                  <div style={styles.cardTitle}>📝 خلاصه مطالب</div>
                  <div style={styles.textBlock}>{summary}</div>
                </div>
              )}

              {activeTab === "quiz" && questions.length > 0 && (
                <div style={styles.card}>
                  <div style={styles.cardTitle}>❓ سوالات امتحانی <span style={styles.badge}>{questions.length} سوال</span></div>
                  <Quiz questions={questions} />
                </div>
              )}

              {activeTab === "flash" && flashcards.length > 0 && (
                <div style={styles.card}>
                  <div style={styles.cardTitle}>🃏 فلش‌کارت‌ها <span style={{ ...styles.badge, color: COLORS.textMuted, fontSize: 11, marginRight: 8 }}>کلیک کنید تا برگردد</span></div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                    {flashcards.map((card, i) => (
                      <Flashcard key={i} card={card} index={i} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
