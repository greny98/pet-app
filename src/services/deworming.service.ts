import dewormingModel from '@/models/dewormings.models';

class DewormingService {
  public dewormingModel = dewormingModel;

  public async getAll() {
    return this.dewormingModel.find({}).populate(['pet']).exec();
  }
  public async getByPetId(petId: string) {
    return this.dewormingModel.find({ pet: petId }).populate(['pet']).exec();
  }
}

export default DewormingService;
