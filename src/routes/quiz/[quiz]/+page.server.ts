import collections from "../../../assets/collections.json";
import type { Quiz } from "../../../types/Quiz";
import type { PageServerLoad } from "./$types";

export const prerender = true;

const quizzes = import.meta.glob("../../../assets/quiz/*.json");

async function getQuiz(name: string) {
  return ((await quizzes[`../../../assets/quiz/${name}.json`]()) as any).default as Quiz;
}

export const load: PageServerLoad = async ({ params: { quiz } }) => {
  if (Object.keys(collections).includes(quiz)) {
    const collection = collections[quiz as keyof typeof collections];
    const data = await Promise.all(collection.include.map((name) => getQuiz(name)));
    return { quizzes: data, collection };
  }

  return { quizzes: [await getQuiz(quiz)] };
};
