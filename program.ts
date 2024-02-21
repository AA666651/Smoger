import { API } from "./api";
import { Config } from "./config";
import { Printer } from "./printer";

const api = new API();
const printer = new Printer();
const config = new Config();

async function main() {
  try {
    const station = await api.FindStationByCity(config.loadConfig().cityName);
    if (!station) {
      console.error("Nie znaleziono miasta o podanej nazwie.");
      return;
    }
    const city = station.find(c => c.stationName?.includes(config.loadConfig().street));
    
    if (!city) {
      console.error("Nie znaleziono ulicy o podanej nazwie.");
      return;
    }
    
    printer.ShowData(city.stationName as string);
    const sensorId = city.id as number;
    let quality = await api.GetQuality(sensorId);
    printer.ShowQuality(quality);
  } catch (error) {
    console.error("Wystąpił błąd:", error);
  }
}

main();
