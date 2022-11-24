function show_menu() {
  var popup_menu = document.getElementById('popup_menu')
  popup_menu.style.display = 'block'
}

function close_menu() {
  var popup_menu = document.getElementById('popup_menu')
  popup_menu.style.display = 'none'
}

function create_feature(vehicle) {
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
        <a onclick="show_feature_popup(${vehicle.id})" href="#featured_content">More details</a>
      </info>
    </feature>`
  const parent = document.getElementById('featured_content');
  parent.innerHTML += feature;
}

function load_feature() {
  const vehicles = list_vehicles()
  for (let x = 0; x < vehicles.length; x++) {
    create_feature(vehicles[x])
  }
}

function create_feature_popup(vehicle) {
  const popup = `
    <popup-feature id="feature_popup">
      <a onclick="close_feature_popup()" id="close_feature_popup" href="#featured_content"><img src="images/popup/close_window.png" alt="close"></a>
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
    </popup-feature>`
  const parent = document.getElementById('featured_content');
  parent.innerHTML += popup;
}

function show_feature_popup(vehicleId) {
  const vehicles = list_vehicles();
  const vehicleIndex = vehicles.findIndex((object) => object.id === vehicleId);
  const vehicle = vehicles[vehicleIndex];
  create_feature_popup(vehicle)
  var feature_popup = document.getElementById('feature_popup')
  feature_popup.style.display = 'block'
}

function close_feature_popup() {
  var feature_popup = document.getElementById('feature_popup')
  feature_popup.style.display = 'none'
}

function list_vehicles() {
  const vehicle1 = {
    id: 1,
    name: 'AudiR8',
    year: 2022,
    engine: '5.2L V10',
    horsepower: '562',
    transmission: 'manual',
    image: 'images/about_page/featured/audiR8_featured.png',
    dealer: 'Extreme auto dealers',
    country: 'Kenya'
  }
  const vehicle2 = {
    id: 2,
    name: 'Ford Mustang Roush',
    year: 2018,
    engine: '5.0L V8',
    horsepower: '710',
    transmission: 'manual',
    image: 'images/about_page/featured/ford-mustang-roush.png',
    dealer: 'Cranes auto',
    country: 'Uganda'
  }
  const vehicle3 = {
    id: 3,
    name: 'Rolls-Royce Phantom',
    year: 2003,
    engine: '6.75L V12',
    horsepower: '453',
    transmission: 'automatic',
    image: 'images/about_page/featured/rolls-royce-phanton.png',
    dealer: 'Kigali auto dealers',
    country: 'Rwanda'
  }
  const vehicle4 = {
    id: 4,
    name: 'Bentley Continental',
    year: 2022,
    engine: '4.0L V8',
    horsepower: '542',
    transmission: 'manual',
    image: 'images/about_page/featured/bentley_continental.png',
    dealer: 'Habesha Automotives',
    country: 'Ethiopia'
  }
  return [vehicle1, vehicle2, vehicle3, vehicle4]
}