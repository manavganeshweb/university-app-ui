import type { LucideIcon } from "lucide-react";


/**
 * Single option inside a question
 */
export interface ClickPickOption {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
}


/**
 * Question structure
 */
export interface ClickPickQuestion {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  options: ClickPickOption[];
}


/**
 * User selected answers
 *
 * Example:
 * {
 *   education: "ug",
 *   field: "technology",
 *   mode: "online"
 * }
 */
export interface AnswerMap {
  [key: string]: string;
}


/**
 * University recommendation result
 */
export interface Recommendation {
  id: string;

  university: string;

  course: string;

  slug: string;

  image: string;

  match: number;

  duration: string;

  fees: string;

  mode: string;

  location: string;

  highlights: string[];
}


/**
 * Results component props
 */
export interface ResultsProps {
  answers: AnswerMap;
  onRestart: () => void;
}