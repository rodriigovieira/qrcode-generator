import { EntityRepository, Repository } from 'typeorm';
import { Seed } from '../models/Seed';

@EntityRepository(Seed)
class SeedsRepository extends Repository<Seed> {}

export default SeedsRepository;
