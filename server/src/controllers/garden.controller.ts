import { Controller, Get } from 'routing-controllers';
import fs from 'fs';
import logger from '@/utils/logger';

@Controller()
export class GardenController {
  @Get('/gardens')
  async gardens() {
    const gardenFileNames = await fs.readdirSync('./gardenFiles/');
    const gardenDatas = [];
    return await new Promise(resolve => {
      gardenFileNames.forEach(async fileName => {
        const data = await fs.promises.readFile(`./gardenFiles/${fileName}`, 'utf8');
        gardenDatas.push(JSON.parse(data));
        if (gardenDatas.length === gardenFileNames.length) {
          resolve(gardenDatas);
        }
      });
    })
      .then(gardenArray => {
        return gardenArray;
      })
      .catch(error => {
        logger.error('gardens', error);
      });
  }
}
