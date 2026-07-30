"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "../../components/click-pick/Hero";
import ProgressBar from "../../components/click-pick/ProgressBar";
import QuestionCard from "../../components/click-pick/QuestionCard";
import Navigation from "../../components/click-pick/Navigation";
import Results from "../../components/click-pick/Results";
import { questions } from "../../lib/questions";
import type { AnswerMap } from "../../types/click-pick";
import { Header } from "../../components/Header";
import CourseCards from "../../components/click-pick/CourseCards";

export default function ClickPickPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});

  const totalSteps = questions.length;

  const currentQuestion = questions[step];

  const isCompleted = step >= totalSteps;

  const progress = useMemo(() => {
    return (Math.min(step, totalSteps) / totalSteps) * 100;
  }, [step, totalSteps]);

  function handleSelect(option: string) {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: option,
    }));
  }

  function nextStep() {
    if (!answers[currentQuestion.id]) return;

    if (step === totalSteps - 1) {
      setStep(totalSteps);
    } else {
      setStep((prev) => prev + 1);
    }
  }

  function previousStep() {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  }

  function restart() {
    setAnswers({});
    setStep(0);
  }

  return (
    <>
    <Header/>
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-orange-50">
      {/* Hero */}
      <Hero />

      <section className="mx-auto max-w-6xl px-5 pb-20">
        {!isCompleted && (
          <>
            <ProgressBar
              current={step + 1}
              total={totalSteps}
              progress={progress}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{
                  duration: 0.35,
                }}
              >
                <QuestionCard
                  question={currentQuestion}
                  selected={answers[currentQuestion.id]}
                  onSelect={handleSelect}
                />
              </motion.div>
            </AnimatePresence>

            <Navigation
              current={step}
              total={totalSteps}
              canContinue={!!answers[currentQuestion.id]}
              onBack={previousStep}
              onNext={nextStep}
            />
          </>
        )}
        <CourseCards/>

        {isCompleted && (
          <AnimatePresence>
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
              }}
            >
              <Results
                answers={answers}
                onRestart={restart}
              />
            </motion.div>
          </AnimatePresence>
        )}
      </section>
    </main>
    </>
  );
}