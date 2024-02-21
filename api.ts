import axios from 'axios';
import { Convert } from "./convert";
import { Station } from "./model/Station";
import { Position } from "./model/Position";
import { MeasurementData } from './model/MeasurementData';
import { Quality } from './model/Quality';

//https://powietrze.gios.gov.pl/pjp/content/api

export class API {

    private readonly baseUrl = 'https://api.gios.gov.pl/pjp-api/rest';
    private readonly converter: Convert = new Convert();
    //Stacje pomiarowe
    async FindStationByCity(name: string) : Promise<Array<Station>>{
      const allStations: Array<Station> = [];
     
      try {
        var response = await axios.get(this.baseUrl+'/station/findAll');
      
        response.data.forEach((element: any) => {
          var conv = this.converter.ConvertStation(element);
          if (element.city?.name?.includes(name)) {
            allStations.push(conv);
          }
        });
        return allStations;
          
      } catch (response: any) {
        console.log(response);
        throw response;
      }
    };
  
  //Stanowiska pomiarowe
    async GetSensor(sensorId: number) : Promise<Array<Position>>{
      try {
        const findedPositions: Array<Position> = [];
        let response = await axios.get(this.baseUrl+'/station/sensors/'+sensorId);
      
        response.data.forEach((element: any) => {
        var conv = this.converter.ConvertPosition(element);
          findedPositions.push(conv);
        })
        return findedPositions;
      }catch(response: any) {
        console.log(response);
        throw response;
      };
    }


    //Dane pomiarowe
    async GetMeasurementData(sensorId: number) : Promise<Array<MeasurementData>> {
      try {
        const findedMeasurements: Array<MeasurementData> = [];
        let response = await axios.get(this.baseUrl+'/data/getData/'+sensorId);
        let converted = this.converter.ConvertMeasurement(response.data);
        findedMeasurements.push(converted);
        return findedMeasurements;
        
      }catch (response: any) {
        console.log(response);
        throw response;
      }
    }
    //jakość powietrza
    async GetQuality(sensorId: number) : Promise<Quality>{
      try {
        let response = await axios.get(this.baseUrl+'/aqindex/getIndex/'+sensorId);
        let converted = this.converter.ConvertQuality(response.data);
        return converted;
      }catch(response: any) {
        console.log(response);
        throw response;
      };
    }
    
}