// export async function GET(request) {
//   return new Response("Hello world");
// }

import { google } from "googleapis";

export async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const calendarId =
        "classroom104963338479341417186@group.calendar.google.com";
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_id:
            "648513882167-2uer0musi377he0l09nhoctif0k2a6bf.apps.googleusercontent.com",
          client_secret: "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",
          redirect_uris: ["http://localhost:3001"],
        },
        scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
      });
      const calendar = google.calendar({ version: "v3", auth });

      const response = await calendar.events.list({
        calendarId,
      });
      const events = response.data.items;
      res.status(200).json(events);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).end("Error fetching events");
    }
  } else {
    console.log("Not working");
  }
}
