
export class Quality {
    id?: number
    stCalcDate?: string
    stIndexLevel?: StIndexLevel
    stSourceDataDate?: string
    so2CalcDate?: string
    so2IndexLevel?: So2IndexLevel
    so2SourceDataDate?: string
    no2CalcDate?: string
    no2IndexLevel?: No2IndexLevel
    no2SourceDataDate?: string
    pm10CalcDate?: string
    pm10IndexLevel?: Pm10IndexLevel
    pm10SourceDataDate?: string
    pm25CalcDate?: string
    pm25IndexLevel?: any
    pm25SourceDataDate?: any
    o3CalcDate?: string
    o3IndexLevel?: O3IndexLevel
    o3SourceDataDate?: string
    stIndexStatus?: boolean
    stIndexCrParam?: string
  }
  
  export class StIndexLevel {
    id?: number
    indexLevelName?: string
  }
  
  export class So2IndexLevel {
    id?: number
    indexLevelName?: string
  }
  
  export class No2IndexLevel {
    id?: number
    indexLevelName?: string
  }
  
  export class Pm10IndexLevel {
    id?: number
    indexLevelName?: string
  }
  
  export class O3IndexLevel {
    id?: number
    indexLevelName?: string
  }
  