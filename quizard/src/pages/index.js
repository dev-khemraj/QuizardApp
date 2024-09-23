import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import QuizCategory from "../components/QuizCategory";
import Footer from "../components/Footer";

const quizzes = {
  mathematics: [
    {
      name: "Real Number Quiz first ", plays: 1300, image: "Images/Quizimage.webp", questions: 15, id: 1
    },
    { name: "Polynomials Quiz 1 two", plays: 500, image: "Images/Quizimage.webp", questions: 15, id: 2 },
    { name: "Real Number Quiz 1 three", plays: 1300, image: "Images/Quizimage.webp", questions: 15, id: 3 },
    { name: "Polynomials Quiz 1", plays: 500, image: "Images/Quizimage.webp", questions: 15, id: 4 },
    { name: "Real Number Quiz 1", plays: 1300, image: "Images/Quizimage.webp", questions: 15, id: 5 },
    { name: "Polynomials Quiz 1", plays: 500, image: "Images/Quizimage.webp", questions: 15, id: 6 },
    { name: "Real Number Quiz 1", plays: 1300, image: "Images/Quizimage.webp", questions: 15, id: 7 },
    { name: "Polynomials Quiz 1", plays: 500, image: "Images/Quizimage.webp", questions: 15, id: 8 },
  ],
  science: [
    { name: "Life Processes Quiz 1", plays: 2300, image: "Images/Quizimage.webp", questions: 15, id: 1 },
    { name: "Chemical Reactions Quiz 1", plays: 1300, image: "Images/Quizimage.webp", questions: 15, id: 2 },
    { name: "Life Processes Quiz 1", plays: 2300, image: "Images/Quizimage.webp", questions: 15, id: 3 },
    { name: "Chemical Reactions Quiz 1", plays: 1300, image: "Images/Quizimage.webp", questions: 15, id: 4 },
    { name: "Life Processes Quiz 1", plays: 2300, image: "Images/Quizimage.webp", questions: 15, id: 5 },
    { name: "Chemical Reactions Quiz 1", plays: 1300, image: "Images/Quizimage.webp", questions: 15, id: 6 },
  ],
};

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <main className="max-w-7xl mx-auto px-4">
        <QuizCategory title="Mathematics" quizzes={quizzes.mathematics} />
        <QuizCategory title="Science" quizzes={quizzes.science} />
      </main>
      <Footer />
    </div>
  );
}
