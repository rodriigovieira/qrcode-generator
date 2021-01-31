import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import { Seed } from '../models/Seed';
import SeedsRepository from '../repositories/SeedsRepository';
import { generateSeed } from '../utils/GenerateSeed';

const seedRoutes = Router();

seedRoutes.get('/:seed', async (request, response) => {
  const { seed } = request.params;
  const seedsRepository = getCustomRepository(SeedsRepository);

  const foundSeed = await seedsRepository.findOne({ where: { seed } });

  if (foundSeed) {
    const nowTimestamp: number = new Date().getTime();
    const seedTimestamp: number = foundSeed.expires_at.getTime();

    const isStillValid = nowTimestamp < seedTimestamp;

    response.send(isStillValid);
  } else {
    throw new AppError('Seed not found', 400);
  }
});

seedRoutes.get('/', async (request, response) => {
  const seed: Seed = new Seed();
  const oldDateObject: Date = new Date();
  const dateOneMinuteAhead: Date = new Date(oldDateObject.getTime() + 60 * 1000);

  seed.seed = generateSeed();
  seed.expires_at = dateOneMinuteAhead;

  const seedsRepository = getCustomRepository(SeedsRepository);

  await seedsRepository.save(seed);

  response.send(seed);
});

export default seedRoutes;
