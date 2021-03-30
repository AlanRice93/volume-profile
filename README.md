# volume-profile

### Motivation

For buying a security using volume as an indicator, get 15 minute volume intervals of expected volume.

### Usage

```
╭─alan@falcon ~/dev/projects/volume-profile ‹main›
╰─$ yarn run volume 24.66
yarn run v1.22.10
warning package.json: No license field
$ ts-node volume-profile.ts 24.66
9:30AM: 0.00
9:45AM: 0.95
10:00AM: 1.90
10:15AM: 2.85
10:30AM: 3.79
10:45AM: 4.74
11:00AM: 5.69
11:15AM: 6.64
11:30AM: 7.59
11:45AM: 8.54
12:00PM: 9.48
12:15PM: 10.43
12:30PM: 11.38
12:45PM: 12.33
1:00PM: 13.28
1:15PM: 14.23
1:30PM: 15.18
1:45PM: 16.12
2:00PM: 17.07
2:15PM: 18.02
2:30PM: 18.97
2:45PM: 19.92
3:00PM: 20.87
3:15PM: 21.81
3:30PM: 22.76
3:45PM: 23.71
```
