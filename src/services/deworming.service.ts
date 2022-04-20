import dewormingModel from '@/models/dewormings.models';
import { DewormingDto } from '@dtos/deworming.dto';
import { isEmpty } from '@utils/util';
import { HttpException } from '@exceptions/HttpException';

class DewormingService {
  public dewormingModel = dewormingModel;

  public async getAll() {
    return this.dewormingModel.find({}).populate(['pet']).exec();
  }
  public async getByPetId(petId: string) {
    return this.dewormingModel.find({ pet: petId }).populate(['pet']).exec();
  }
  public async createDeworm(dewormData: DewormingDto) {
    if (isEmpty(dewormData)) throw new HttpException(400, "Data can't be empty");

    return await this.dewormingModel.create({ ...dewormData });
  }
}

export default DewormingService;
