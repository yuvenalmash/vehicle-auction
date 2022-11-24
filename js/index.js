function showMenu() {
  const popupMenu = document.getElementById('popup_menu');
  popupMenu.style.display = 'block';
}

function closeMenu() {
  const popupMenu = document.getElementById('popup_menu');
  popupMenu.style.display = 'none';
}

function createFeature(vehicle) {
  const feature = `
    <feature class="feature">
      <img src="${vehicle.image}" alt="featured_image">
      <info class="feature_info">
        <h2 class="feature_title">${vehicle.name}</h2>
        <p class="feature_subtitle">From ${vehicle.dealer} in ${vehicle.country}</p>
        <hr>
        <ul class="feature_specs">
          <li>year: ${vehicle.year} </li>
          <li>Engine: ${vehicle.engine} </li>
          <li>hp: ${vehicle.horsepower} </li>
        </ul>
        <a onclick="showFeaturePopup(${vehicle.id})" href="#featured_content">More details</a>
      </info>
    </feature>`;
  const parent = document.getElementById('featured_content');
  parent.innerHTML += feature;
}

function listVehicles() {
  const vehicle1 = {
    id: 1,
    name: 'AudiR8',
    year: 2022,
    engine: '5.2L V10',
    horsepower: '562',
    transmission: 'manual',
    image: 'images/featured/audiR8.png',
    dealer: 'Extreme auto dealers',
    country: 'Kenya',
  };
  const vehicle2 = {
    id: 2,
    name: 'Ford Mustang Roush',
    year: 2018,
    engine: '5.0L V8',
    horsepower: '710',
    transmission: 'manual',
    image: 'images/featured/ford-mustang-roush.png',
    dealer: 'Cranes auto',
    country: 'Uganda',
  };
  const vehicle3 = {
    id: 3,
    name: 'Rolls-Royce Phantom',
    year: 2003,
    engine: '6.75L V12',
    horsepower: '453',
    transmission: 'automatic',
    image: 'images/featured/rolls-royce-phanton.png',
    dealer: 'Kigali auto dealers',
    country: 'Rwanda',
  };
  const vehicle4 = {
    id: 4,
    name: 'Bentley Continental',
    year: 2022,
    engine: '4.0L V8',
    horsepower: '542',
    transmission: 'manual',
    image: 'images/featured/bentley_continental.png',
    dealer: 'Habesha Automotives',
    country: 'Ethiopia',
  };
  const vehicle5 = {
    id: 5,
    name: 'Kawasaki KZ 250',
    year: 1980,
    engine: '0.246L V1',
    horsepower: '17',
    transmission: 'manual',
    image: 'images/featured/kawasaki.png',
    dealer: 'Dar Automotives',
    country: 'Tanzania',
  };
  const vehicle6 = {
    id: 6,
    name: 'Ferrari Enzo',
    year: 2003,
    engine: '6.0L V12',
    horsepower: '660',
    transmission: 'Semi-automatic',
    image: 'images/featured/ferrari-enzo.png',
    dealer: 'Mara Auto',
    country: 'Kenya',
  };
  return [vehicle1, vehicle2, vehicle3, vehicle4, vehicle5, vehicle6];
}

function loadFeature() {
  const vehicles = listVehicles();
  for (let x = 0; x < vehicles.length; x += 1) {
    createFeature(vehicles[x]);
  }
}

function createFeaturePopup(vehicle) {
  const popup = `
    <popup-feature id="feature_popup">
      <a onclick="closeFeaturePopup()" id="close_feature_popup" href="#featured_content"><img src="images/popup/close_window.png" alt="close"></a>
      <div class="feature">
        <img src="${vehicle.image}" alt="featured_image">
        <info class="feature_info">
          <h2 class="feature_title">${vehicle.name}</h2>
          <p class="feature_subtitle">From ${vehicle.dealer} in ${vehicle.country}</p>
          <hr>
          <ul class="feature_specs">
            <li>year: ${vehicle.year} </li>
            <li>Engine: ${vehicle.engine} </li>
            <li>hp: ${vehicle.horsepower} </li>
            <li>Transmission: ${vehicle.transmission}</li>
            <li>Dealer: ${vehicle.dealer}</li>
            <li>Country: ${vehicle.country}</li>
          </ul>
        </info>
      </div>
    </popup-feature>`;
  const parent = document.getElementById('featured_content');
  parent.innerHTML += popup;
}

function showFeaturePopup(vehicleId) {
  const vehicles = listVehicles();
  const vehicleIndex = vehicles.findIndex((object) => object.id === vehicleId);
  const vehicle = vehicles[vehicleIndex];
  createFeaturePopup(vehicle);
  const featurePopup = document.getElementById('feature_popup');
  featurePopup.style.display = 'block';
}

function closeFeaturePopup() {
  const featurePopup = document.getElementById('feature_popup');
  featurePopup.style.display = 'none';
}

showMenu();
closeMenu();
loadFeature();
createFeaturePopup();
showFeaturePopup();
closeFeaturePopup();
