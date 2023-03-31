export interface DayList {
  length: number;
  weather: [
    {
      description: string;
      main: string;
    },
  ];
  temp: {
    day: string;
  };
}
