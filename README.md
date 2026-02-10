# React Quiz App

A **React-based quiz application** that consumes questions from the **Open Trivia Database (OpenTDB API)**.  
This project was built as a **personal project / technical test** to demonstrate frontend development skills using React.

---

## 🚀 Features

- 🔐 Simple login using usernmae feature
- 📡 Quiz questions fetched from **OpenTDB API**
- ❓ Dynamic question types and total number of questions
- 📊 Display total questions and answered questions
- ⏱️ Countdown timer for quiz session
- 👉 One question per page
- ⚡ Automatically moves to the next question after selecting an answer
- ⛔ Automatically ends the quiz when the timer runs out
- 📈 Result summary:
  - Total correct answers
  - Total wrong answers
  - Total answered questions
- 💾 Quiz progress persistence using **LocalStorage** (resume quiz after browser close)
- 🌐 Responsive user interface

---

## 🛠️ Tech Stack

- **React**
- **React Router DOM**
- **JavaScript (ES6+)**
- **OpenTDB API**
- **LocalStorage**
- **CSS / Tailwind CSS (based on implementation)**

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/habialtx3/QuizApp.git
```

### 2. Navigate to the project directory

```bash
cd react-quiz-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the application

```bash
npm run dev
# or
npm start
```

### 5. Open in browser

```
http://localhost:5173
```

---

## 📌 Notes

- Quiz state (answers, score, and timer) is stored in **LocalStorage** to support quiz resume functionality
- Questions are fetched dynamically from **OpenTDB API**
- This project is intended for **learning and portfolio purposes**

---

## 👤 Author

**Muhammad Reza Pahlevi**  
Junior Software / Web Developer

- GitHub: https://github.com/habialtx3
- LinkedIn: https://linkedin.com/in/fhrezap

---

## ⭐ Acknowledgment

If you find this project helpful, feel free to give it a ⭐ on GitHub.  
Thank you for checking it out 🙌
