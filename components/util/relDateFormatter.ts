interface millisUnitMapStructure {
  millis: number;
  unit: Intl.RelativeTimeFormatUnit;
}

class RelativeDateFormatter {
  millisUnitMap: millisUnitMapStructure[] = [
    { millis: 31536000000, unit: "year" },
    { millis: 2628000000, unit: "month" },
    { millis: 86400000, unit: "day" },
    { millis: 3600000, unit: "hour" },
    { millis: 60000, unit: "minute" }
  ];

  formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  getRelTime(time: Date) {
    const deltaTime = time.getTime() - Date.now();
    for (const { millis, unit } of this.millisUnitMap) {
      if (Math.abs(deltaTime) >= millis) {
        return this.formatter.format(Math.round(deltaTime / millis), unit);
      }
    }
    return "Just now"
  }
}

export { RelativeDateFormatter };