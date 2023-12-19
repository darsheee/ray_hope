// import { DISCORD_WEBHOOK_URL } from "$env/static/private";
// import { json } from "@sveltejs/kit";
// import type { Question, Quiz } from "../../../types/Quiz";

// export type FormSubmission =
//   | {
//       errorType: "quiz";
//       selected: Question & { quiz: Exclude<Quiz, "questions"> };
//       details: string;
//       contact: string;
//     }
//   | { errorType: "site"; details: string; contact: string };

// export async function POST({ request, cookies }) {
//   const body: FormSubmission = await request.json();

//   if (!body.details || body.details.trim().length == 0) {
//     return json(
//       { success: false, error: "Please provide some details about the issue." },
//       { status: 400 }
//     );
//   }

//   if (body.details.length > 1024) {
//     return json(
//       { success: false, error: "Details are limited to 1024 characters." },
//       { status: 400 }
//     );
//   }

//   if (body.errorType === "quiz") {
//     await postWebhook({
//       embeds: [
//         {
//           title: "New Quiz Error Report",
//           type: "rich",
//           fields: [
//             {
//               name: "Details",
//               value: body.details,
//             },
//             {
//               name: "Affected Question",
//               value: body.selected.question,
//             },
//             ...body.selected.choices.map((choice, i) => ({
//               name: `Choice ${i + 1}` + (i === body.selected.correct ? " (Correct)" : ""),
//               value: choice,
//             })),
//             {
//               name: "Affected File",
//               value: `https://github.com/FluxCapacitor2/webquiz-svelte/edit/main/src/assets/quiz/${body.selected.quiz.id}.json`,
//             },
//             {
//               name: "Contact",
//               value: body.contact.trim().length > 0 ? body.contact : "*(None)*",
//             },
//           ],
//         },
//       ],
//     });
//   } else if (body.errorType === "site") {
//     await postWebhook({
//       embeds: [
//         {
//           title: "New Website Error Report",
//           type: "rich",
//           fields: [
//             {
//               name: "Details",
//               value: body.details,
//             },
//             {
//               name: "Contact",
//               value: body.contact.trim().length > 0 ? body.contact : "*(None)*",
//             },
//           ],
//         },
//       ],
//     });
//   } else {
//     return json({ success: false, error: "Invalid `errorType`" }, { status: 400 });
//   }

//   return json({ success: true }, { status: 200 });
// }

// async function postWebhook(info: any) {
//   await fetch(DISCORD_WEBHOOK_URL, {
//     method: "POST",
//     body: JSON.stringify({
//       allowedMentions: { parse: [] },
//       ...info,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }
