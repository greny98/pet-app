import medicalHistoryModel from '@models/medicalHistory.model';
import { MedicalHistory } from '@interfaces/medicalHistory.interface';
import mongoose from 'mongoose';
import { isEmpty } from '@utils/util';
import { HttpException } from '@exceptions/HttpException';

class MedicalHistoriesService {
  public medicalHistoryModel = medicalHistoryModel;

  public async getAll(userId: string) {
    return this.medicalHistoryModel
      .find({ user: userId })
      .populate([
        { path: 'user' },
        {
          path: 'pet',
          populate: {
            path: 'customer',
          },
        },
      ])
      .exec();
  }

  public async getByPetId(userId: string, petId: string) {
    console.log(userId, petId);
    return this.medicalHistoryModel
      .find({ user: userId, pet: new mongoose.Types.ObjectId(petId) })
      .populate([
        { path: 'user' },
        {
          path: 'pet',
          populate: {
            path: 'customer',
          },
        },
      ])
      .exec();
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

  public async createMedicalHistory(medData) {
    if (isEmpty(medData)) throw new HttpException(400, 'Data cannot be empty');

    return await this.medicalHistoryModel.create({ ...medData });
  }
}
export default MedicalHistoriesService;
