// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  const lcDrivers = drivers.map(function(name) {
    return name.toLowerCase();
  });
  return lcDrivers;
}

function nameToAttributes(drivers) {
  const nameObjectDrivers = drivers.map(function(name) {
    const driver = {
      firstName: name.split(" ")[0],
      lastName: name.split(" ")[1]
    };
    return driver
  })
}
