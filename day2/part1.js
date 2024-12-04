import { inputReports } from "./input.js";

const isReportSafe = (report) => {
  let isIncreasing = null;
  for (let i = 1; i < report.length; i++) {
    const diff = report[i] - report[i - 1];

    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }

    if (isIncreasing === null) {
      if (diff > 0) {
        isIncreasing = true;
      } else if (diff < 0) {
        isIncreasing = false;
      }
    } else {
      if ((isIncreasing && diff < 0) || (!isIncreasing && diff > 0)) {
        return false;
      }
    }
  }

  return true;
};

const countSafeReports = (reports) => {
  let safeReports = 0;
  for (const report of reports) {
    if (isReportSafe(report)) {
      safeReports++;
    }
  }

  return safeReports;
};

countSafeReports(inputReports);

export { isReportSafe };
