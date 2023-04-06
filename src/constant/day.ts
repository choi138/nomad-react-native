export interface DayItem {
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
