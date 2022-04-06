import medicalHistoryModel from '@models/medicalHistory.model';
import { MedicalHistory } from '@interfaces/medicalHistory.interface';

class MedicalHistoriesService {
  public medicalHistoryModel = medicalHistoryModel;

  public async getAll(userId: string) {
    return this.medicalHistoryModel.find({ user: userId }).exec();
  }

  /**
   * TODO: Get pagination of user
   */
  public async getPagination(userId: string) {
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
export default MedicalHistoriesService;
