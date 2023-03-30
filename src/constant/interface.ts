export interface weatherItem {
    weather: [{
        description: string;
        main: string;
    }];
}

export interface DAY_LIST {
    length: number;
    weather: [{
        description: string;
        main: string;
    }]
    temp: {
        day: number
    }
}