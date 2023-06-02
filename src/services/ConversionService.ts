import { injectable } from '@loopback/core';

@injectable()
export class ConversionService {
  convertVarbinaryToJson(varbinaryData: Buffer): any {
    const jsonString = varbinaryData.toString('utf-8');
    console.log(jsonString);
    return JSON.parse(jsonString);
  }

  convertJsonToVarbinary(jsonData: any): Buffer {
    const jsonString = JSON.stringify(jsonData);
    console.log(jsonString);
    return Buffer.from(jsonString, 'utf-8');
  }
}
