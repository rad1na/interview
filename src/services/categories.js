import { mainApi } from "./api";

class CategoriesService {
  async getAllCategories(speakerId) {
    return await mainApi.get(`/Categories/catfilter?SpeakerID=+${speakerId}`);
  }
  async getAllSubCategories(speakerId, categoryId) {
    return await mainApi.get(
      `/Categories/subfilter?CategoryID=+${categoryId}+&SpeakerID=+${speakerId}`
    );
  }
}

export const categoriesService = new CategoriesService();
