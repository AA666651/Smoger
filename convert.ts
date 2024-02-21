import { Station } from "./model/Station";
import { Position } from "./model/Position";
import { MeasurementData } from "./model/MeasurementData";
import { MeasurementSingle } from "./model/MeasurementSingle";
import { Quality } from "./model/Quality";

export class Convert {
    ConvertStation(element: any) {
        const station: Station = {
            id: element.id,
            stationName: element.stationName,
            gegrLat: element.gegrLat,
            gegrLon: element.gegrLon,
            name: element.name,
            city: {
                addressStreet: element.city.addressStreet,
                id: element.city.id,
                name: element.city.name,
                commune: {
                    communeName: element.city.commune.communeName,
                    districtName: element.city.commune.districtName,
                    provinceName: element.city.commune.provinceName
                },
            }
        }
        return station;
    }
    ConvertPosition(element: any){
        const position: Position = {
            id: element.id,
            stationId: element.stationId,
            param: {
                paramName: element.param.paramName,
                paramFormula: element.param.paramFormula,
                paramCode: element.param.paramCode,
                idParam: element.param.idParam
            }
        }
        return position;
    }
    ConvertMeasurement(element: any){
        const measurementData: MeasurementData = {
            key: element.key,
        }
        const measurementValues: Array<MeasurementSingle> = [];

        element.values.forEach((element: any) => {
            const single: MeasurementSingle = new MeasurementSingle();
            single.date = element.date;
            single.value = element.value;
            measurementValues.push(single);
        });
        measurementData.values = measurementValues;
        return measurementData;
    }
    ConvertQuality(element: any){
        const quality: Quality = {
            id: element.id,
            stCalcDate: element.stCalcDate,
            stIndexLevel:{
                id: element.stIndexLevel?.id,
                indexLevelName: element.stIndexLevel?.indexLevelName
            },
            stSourceDataDate: element.stSourceDataDate,
            so2CalcDate: element.so2CalcDate,
            so2IndexLevel:{
                id: element.so2IndexLevel?.id,
                indexLevelName: element.so2IndexLevel?.indexLevelName
            },
            so2SourceDataDate: element.so2SourceDataDate,
            no2CalcDate: element.no2CalcDate,
            no2IndexLevel: {
                id: element.no2IndexLevel?.id,
                indexLevelName: element.no2IndexLevel?.indexLevelName
            },
            no2SourceDataDate: element.no2SourceDataDate,
            pm10CalcDate: element.pm10CalcDate,
            pm10IndexLevel: {
                id: element.pm10IndexLevel?.id,
                indexLevelName: element.pm10IndexLevel?.indexLevelName
            },
            pm10SourceDataDate: element.pm10SourceDataDate,
            pm25CalcDate: element.pm25CalcDate,
            pm25IndexLevel: element.pm25IndexLevel,
            pm25SourceDataDate: element.pm25SourceDataDate,
            o3CalcDate: element.o3CalcDate,
            o3IndexLevel: {
                id: element.o3IndexLevel?.id,
                indexLevelName: element.o3IndexLevel?.indexLevelName,
            },
            o3SourceDataDate: element.o3SourceDataDate,
            stIndexStatus: element.stIndexStatus,
            stIndexCrParam: element.stIndexCrParam,
        }
        return quality;
    }
    

}