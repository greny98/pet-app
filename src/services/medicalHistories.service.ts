import medicalHistoryModel from '@models/medicalHistory.model';
import { MedicalHistory } from '@interfaces/medicalHistory.interface';

class MedicalHistoriesService {
  public medicalHistory = medicalHistoryModel;

  /**
   * TODO: Get pagination of user
   */
  public async getPagination(userId: string, page = 0, limit = 10) {
    // code here
  }

  /**
   * TODO: Get pagination of user
   */
  public async create(medicalHistory: MedicalHistory) {
    // code here
  }

  /**
   * TODO: Get pagination of user
   */
  public async update(medicalHistory: MedicalHistory) {
    // code here
  }

  /**
   * TODO: Remove of user
   */
  public async remove(medicalHistory: MedicalHistory) {
    // code here
  }
}
