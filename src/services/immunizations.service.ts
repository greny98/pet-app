import immunizationModel from '@/models/immunizations.model';

class ImmunizationService {
  public immunizationModel = immunizationModel;

  public async getAll() {
    return this.immunizationModel.find({}).populate(['pet']).exec();
  }
  public async getByPetId(petId: string) {
    return this.immunizationModel.find({ pet: petId }).populate(['pet']).exec();
  }
}

export default ImmunizationService;
