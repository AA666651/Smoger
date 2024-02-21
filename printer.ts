import { Quality } from "./model/Quality";

export class Printer{
    ShowData(name: string){
        console.log(name);
    }
    ShowQuality(quality: Quality){
        console.log("Data pomiaru", quality.stCalcDate);
        console.log("Ogólna wartość(najniższa):", quality.stIndexLevel?.indexLevelName);
        console.log("---");
        if(quality.so2IndexLevel?.id !== null && quality.so2IndexLevel?.id !== undefined){
            console.log("SO2");
            console.log("Data pomiaru:", quality.so2CalcDate);
            console.log("Jakość powietrza:", quality.so2IndexLevel?.indexLevelName);
            console.log("---");
        }
        if(quality.no2IndexLevel?.id !== null && quality.no2IndexLevel?.id !== undefined){
            console.log("NO2");
            console.log("Data pomiaru:", quality.no2CalcDate);
            console.log("Jakość powietrza:", quality.no2IndexLevel?.indexLevelName);
            console.log("---");
        }
        if(quality.pm10IndexLevel?.id !== null && quality.pm10IndexLevel?.id !== undefined){
            console.log("PM10");
            console.log("Data pomiaru:", quality.pm10CalcDate);
            console.log("Jakość powietrza:", quality.pm10IndexLevel?.indexLevelName);
            console.log("---");
        }
        if(quality.pm25IndexLevel !== null && quality.pm25IndexLevel !== undefined){
            console.log("PM2.5");
            console.log("Data pomiaru:", quality.pm25CalcDate);
            console.log("Jakość powietrza:", quality.pm25IndexLevel?.indexLevelName);
            console.log("---");
        }
    }
}