import * as datefns from "date-fns";

function volume() {
  const total = parseFloat(process.argv[2]);
  const increment = total / 26;
  const start_time = datefns.set(new Date(), { hours: 9, minutes: 30 });
  const start_vol = 0;
  let results = "";

  for (let i = 0; i < 26; i++) {
    const time = datefns.add(start_time, { minutes: 15 * i });
    const vol = start_vol + increment * i;
    results =
      results + `${datefns.format(time, "h:mmaa")}: ${vol.toFixed(2)}\n`;
  }
  console.log(results);
}

volume();
