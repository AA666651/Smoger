import * as fs from 'fs';

interface IAppConfig {
    cityName: string;
    street: string;
}
  
export class Config{
loadConfig(): IAppConfig{
    try 
    {
        const configFile = fs.readFileSync('config.json', 'utf-8');
        const configData = JSON.parse(configFile);
        return configData as IAppConfig;
    } catch (error) {
        console.error('Błąd wczytywania pliku konfiguracyjnego:', error);
        process.exit(1); 
    }
}

};