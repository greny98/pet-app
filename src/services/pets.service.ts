import petModel from '@models/pets.model';
import { User } from '@interfaces/users.interface';
import { Pet } from '@interfaces/pets.interface';

class PetService {
  public petModel = petModel;

  /**
   * TODO: Get all pets from user
   */
  public async getByUser(user: User) {
    // Code here
  }

  /**
   * TODO: Get by pet id
   */
  public async getById(petId: string) {
    // Code here
  }

  /**
   * TODO: Create pet info
   */
  public async create(info: Pet) {
    // Code here
  }

  /**
   * TODO: Update pet info
   */
  public async update(info: Pet) {
    // Code here
  }
}

export default PetService;
