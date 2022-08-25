// https://calculator.swiftutors.com/potential-energy-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const potentialEnergyRadio = document.getElementById('potentialEnergyRadio');
const massRadio = document.getElementById('massRadio');
const heightfromEarthsSurfaceRadio = document.getElementById('heightfromEarthsSurfaceRadio');

let potentialEnergy;
const g = 9.80665;
let mass = v1;
let heightfromEarthsSurface = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

potentialEnergyRadio.addEventListener('click', function() {
  variable1.textContent = '(m) Mass (kg)';
  variable2.textContent = '(h) Height from Earth\'s Surface (m)';
  mass = v1;
  heightfromEarthsSurface = v2;
  result.textContent = '';
});

massRadio.addEventListener('click', function() {
  variable1.textContent = '(P.E) Potential Energy (J)';
  variable2.textContent = '(h) Height from Earth\'s Surface (m)';
  potentialEnergy = v1;
  heightfromEarthsSurface = v2;
  result.textContent = '';
});

heightfromEarthsSurfaceRadio.addEventListener('click', function() {
  variable1.textContent = '(P.E) Potential Energy (J)';
  variable2.textContent = '(m) Mass (kg)';
  potentialEnergy = v1;
  mass = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(potentialEnergyRadio.checked)
    result.textContent = `Potential Energy = ${computePotentialEnergy().toFixed(2)} J`;

  else if(massRadio.checked)
    result.textContent = `Mass = ${computeMass().toFixed(2)} kg`;

  else if(heightfromEarthsSurfaceRadio.checked)
    result.textContent = `Height from Earth's Surface = ${computeHeightfromEarthsSurface().toFixed(2)} m`;
})

// calculation

function computePotentialEnergy() {
  return Number(mass.value) * g * Number(heightfromEarthsSurface.value);
}

function computeMass() {
  return Number(potentialEnergy.value) / (g * Number(heightfromEarthsSurface.value));
}

function computeHeightfromEarthsSurface() {
  return Number(potentialEnergy.value) / (g * Number(mass.value));
}