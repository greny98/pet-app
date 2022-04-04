import petModel from '@models/pets.model';
import { Pet } from '@interfaces/pets.interface';
import { HttpException } from '@exceptions/HttpException';

class PetService {
  public petModel = petModel;

  /**
   * TODO: Get all pets from user
   */
  public getByUser(userId: string, page = 0, limit = 10) {
    // Code here
    const skip = page * limit;
    return this.petModel.find({ user: userId }, null, { sort: { _id: -1 }, skip, limit }).populate('customer');
  }

  /**
   * TODO: Get by pet id
   */
  public async getById(petId: string) {
    // Code here
    const pet = await this.petModel.findById(petId).populate('customer');
    if (!pet) throw new HttpException(400, 'Pet không tồn tại');
    return pet;
  }

  /**
   * TODO: Create pet info
   */
  public async create(info: Pet) {
    // Code here
    const existed = await petModel.exists({ customer: info.customer, name: info.name });
    if (existed) throw new HttpException(400, 'Pet đã tồn tại');
    return petModel.create(info);
  }

  /**
   * TODO: Update pet info
   */
  public async update(info: Pet) {
    // Code here
  }
}

export default PetService;
