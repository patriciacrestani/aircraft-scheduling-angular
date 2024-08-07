# Aircraft Scheduling

This is a web page project that aims to manually schedule the use of aircrafts on an airline's routes for the next day. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.10.

## About

The app shows a list of all our aircrafts to choose from and a list of all the flights the airline plan to operate that day.
The purpose of the app is to allow the user to view and edit the daily rotation for each aircraft.

The app lets the user edit the rotation freely but enforces the following rules:

- All aircrafts must be on the ground by midnight.
- The minimum time between the end of a flight and the beginning of the next one is 20 minutes.
- Aircrafts cannot "teleport" and cannot move without operating a flight.

As per aviation practice, all times are UTC (GMT), the app makes no use of local time.

The app must display for each aircraft its utilisation in percent.

For the selected aircraft, a horizontal bar shows the aircraft timeline in a period of 24 hours, scheduled service in green, turnaround time in purple, idle time in grey.

## Features

Some features were added for better navigation:

- Save schedule in local storage
- Restart schedule
- Delete last flight from rotation

However, there are still aspects in which the application can improve, such as:

- Make it responsive for mobile
- Add option to filter flights
- Improve aircraft timeline visualization

## Usage

1. Clone this repository
2. Run `npm install` to install all packages for this application
3. Run `ng serve` for a dev server of this application
4. Navigate to `http://localhost:4200/` on yout browser to open the dev server
