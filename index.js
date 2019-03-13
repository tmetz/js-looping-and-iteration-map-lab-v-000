// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  const lcDrivers = drivers.map(function(name) {
    return name.toLowerCase();
  });
  return lcDrivers;
}
