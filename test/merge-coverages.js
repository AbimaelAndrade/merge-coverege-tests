/* eslint-disable @typescript-eslint/no-var-requires */
const istanbulCoverage = require('istanbul-lib-coverage');
const istanbulReport = require('istanbul-lib-report');
const istanbulReports = require('istanbul-reports');

const coverageProduct = require('../report/product-coverage/coverage-final.json');
const coverageUser = require('../report/user-coverage/coverage-final.json');

const map = istanbulCoverage.createCoverageMap();

const mapFileCoverage = (fileCoverage) => {
  fileCoverage.path = fileCoverage.path.replace(
    /(.*packages\/.*\/)(build)(\/.*)/,
    '$1src$3',
  );
  return fileCoverage;
};

[coverageProduct, coverageUser].forEach((coverage) => {
  Object.keys(coverage).forEach((filename) =>
    map.addFileCoverage(mapFileCoverage(coverage[filename])),
  );
});

const context = istanbulReport.createContext({
  coverageMap: map,
  dir: './report',
});

['json', 'lcov', 'text'].forEach((reporter) =>
  istanbulReports.create(reporter, {}).execute(context),
);
