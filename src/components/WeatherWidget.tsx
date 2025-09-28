import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Cloud, Sun, CloudRain, Snowflake, Wind, Thermometer, Droplets } from 'lucide-react';

interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

const WeatherWidget = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [currentWeather, setCurrentWeather] = useState<WeatherData>({
    temperature: 18,
    condition: 'Partly Cloudy',
    humidity: 75,
    windSpeed: 12,
    icon: 'cloud'
  });

  const months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' }
  ];

  // Mock weather data for different months
  const getWeatherForMonth = (month: number): WeatherData => {
    const weatherByMonth: { [key: number]: WeatherData } = {
      1: { temperature: 2, condition: 'Cold & Dry', humidity: 60, windSpeed: 15, icon: 'snowflake' },
      2: { temperature: 5, condition: 'Cold & Sunny', humidity: 55, windSpeed: 12, icon: 'sun' },
      3: { temperature: 12, condition: 'Mild & Pleasant', humidity: 65, windSpeed: 10, icon: 'sun' },
      4: { temperature: 18, condition: 'Warm & Sunny', humidity: 70, windSpeed: 8, icon: 'sun' },
      5: { temperature: 22, condition: 'Warm & Humid', humidity: 80, windSpeed: 6, icon: 'cloud' },
      6: { temperature: 20, condition: 'Monsoon', humidity: 90, windSpeed: 12, icon: 'rain' },
      7: { temperature: 19, condition: 'Heavy Rain', humidity: 95, windSpeed: 15, icon: 'rain' },
      8: { temperature: 20, condition: 'Monsoon', humidity: 90, windSpeed: 14, icon: 'rain' },
      9: { temperature: 18, condition: 'Post Monsoon', humidity: 85, windSpeed: 10, icon: 'cloud' },
      10: { temperature: 15, condition: 'Clear & Dry', humidity: 70, windSpeed: 8, icon: 'sun' },
      11: { temperature: 8, condition: 'Cool & Dry', humidity: 65, windSpeed: 10, icon: 'cloud' },
      12: { temperature: 4, condition: 'Cold & Dry', humidity: 58, windSpeed: 12, icon: 'snowflake' }
    };
    return weatherByMonth[month];
  };

  useEffect(() => {
    setCurrentWeather(getWeatherForMonth(selectedMonth));
  }, [selectedMonth]);

  const getWeatherIcon = (icon: string) => {
    switch (icon) {
      case 'sun':
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'cloud':
        return <Cloud className="w-8 h-8 text-gray-500" />;
      case 'rain':
        return <CloudRain className="w-8 h-8 text-blue-500" />;
      case 'snowflake':
        return <Snowflake className="w-8 h-8 text-blue-300" />;
      default:
        return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Thermometer className="w-5 h-5 text-monastery-red" />
          Weather in Sikkim
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Select Month:</span>
          <Select value={selectedMonth.toString()} onValueChange={(value) => setSelectedMonth(parseInt(value))}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {months.map((month) => (
                <SelectItem key={month.value} value={month.value.toString()}>
                  {month.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            {getWeatherIcon(currentWeather.icon)}
            <div>
              <div className="text-2xl font-bold">{currentWeather.temperature}°C</div>
              <div className="text-sm text-muted-foreground">{currentWeather.condition}</div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Droplets className="w-4 h-4 text-blue-500" />
              <span>Humidity: {currentWeather.humidity}%</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Wind className="w-4 h-4 text-gray-500" />
              <span>Wind: {currentWeather.windSpeed} km/h</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;