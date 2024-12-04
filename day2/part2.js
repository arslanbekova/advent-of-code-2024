import { inputReports } from "./input.js";
import { isReportSafe } from "./part1.js";

function canBeMadeSafeByRemovingOne(report) {
  for (let i = 0; i < report.length; i++) {
    const modifiedReport = report.slice(0, i).concat(report.slice(i + 1));
    if (isReportSafe(modifiedReport)) {
      return true;
    }
  }
  return false;
}

const countSafeReports = (reports) => {
  let safeReports = 0;
  for (const report of reports) {
    if (isReportSafe(report) || canBeMadeSafeByRemovingOne(report)) {
      safeReports++;
    }
  }

  return safeReports;
};

countSafeReports(inputReports);
