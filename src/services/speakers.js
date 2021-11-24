import { mainApi } from "./api";

class SpeakersService {
  async getAllSpeakers() {
    return await mainApi.get("/Speakers/allspeakers");
  }
}

export const speakersService = new SpeakersService();
