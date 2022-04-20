import immunizationModel from '@/models/immunizations.model';
import { createImmunizationDto } from '@dtos/immunization.dto';
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';

class ImmunizationService {
  public immunizationModel = immunizationModel;

  public async getAll() {
    return this.immunizationModel.find({}).populate(['pet']).exec();
  }
  public async getByPetId(petId: string) {
    return this.immunizationModel.find({ pet: petId }).populate(['pet']).exec();
  }
  public async createImmunization(immunizationData: createImmunizationDto) {
    if (isEmpty(immunizationData)) throw new HttpException(400, 'Please fill in the immunization data');

    // //sao khong kiem tra xem minh dang lam viec voi con pet nao?
    // const checkPet = await this.immunizationModel.find({ pet: immunizationData.pet });
    //
    // const findImmunization: Immunization = await this.immunizationModel.findOne({ vaccine: immunizationData.vaccine });
    // if (findImmunization && checkPet) throw new HttpException(400, 'It is already injected with this vaccine');

    return await this.immunizationModel.create({ ...immunizationData });
  }
}

export default ImmunizationService;
