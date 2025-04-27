const container = document.getElementById('profile-container');

const profileHeader = document.createElement('div');
profileHeader.className = 'profile-header';

const imgBlock = document.createElement('div');
imgBlock.className = 'profile-image';
imgBlock.innerHTML = '<img src="../img/user.png" width="100" alt="Profile Picture">';
profileHeader.appendChild(imgBlock);

const profileInfo = document.createElement('div');
profileInfo.className = 'profile-info';

const name = document.createElement('h2');
name.textContent = user.name;

const cityState = document.createElement('p');
cityState.textContent = `${user.address.city}, ${user.address.street}`;

const editButton = document.createElement('button');
editButton.className = 'edit-button';
editButton.textContent = 'EDIT';

profileInfo.appendChild(name);
profileInfo.appendChild(cityState);

profileHeader.appendChild(profileInfo);
profileHeader.appendChild(editButton);

const profileDetails = document.createElement('div');
profileDetails.className = 'profile-details';

const fields = [
  ['Email', user.email],
  ['City', user.address.city],
  ['State', user.address.suite],
  ['Country', user.address.zipcode],
  ['Phone', user.phone]
];

fields.forEach(([label, value]) => {
  const item = document.createElement('div');
  item.className = 'detail-item';

  const labelSpan = document.createElement('span');
  labelSpan.textContent = label;

  const valueSpan = document.createElement('span');

  if (label === 'Email') {
    const emailLink = document.createElement('a');
    emailLink.href = `mailto:${value}`;
    emailLink.textContent = value;
    valueSpan.appendChild(emailLink);
  } else {
    valueSpan.textContent = value;
  }

  item.appendChild(labelSpan);
  item.appendChild(valueSpan);
  profileDetails.appendChild(item);
});

const progressBars = document.createElement('div');
progressBars.className = 'progress-bars';

const labels = document.createElement('div');
labels.className = 'progress-labels';

const ratingLabel = document.createElement('span');
ratingLabel.textContent = 'YOUR RATING';

const activityLabel = document.createElement('span');
activityLabel.textContent = 'ACTIVITY';

labels.appendChild(ratingLabel);
labels.appendChild(activityLabel);

const ratingBar = document.createElement('div');
ratingBar.className = 'progress-bar';

const ratingInner = document.createElement('div');
ratingInner.className = 'progress-bar-inner rating';
ratingInner.style.width = '75%';  // это я сделал как пример пимерно ка на картинке на видео как вы показывали (Амаль)

ratingBar.appendChild(ratingInner);

const activityBar = document.createElement('div');
activityBar.className = 'progress-bar';

const activityInner = document.createElement('div');
activityInner.className = 'progress-bar-inner activity';
activityInner.style.width = '60%';  //это тоже пример чтоб красиво было

activityBar.appendChild(activityInner);

progressBars.appendChild(labels);
progressBars.appendChild(ratingBar);
progressBars.appendChild(activityBar);

container.appendChild(profileHeader);
container.appendChild(profileDetails);
container.appendChild(progressBars);

const homeButton = document.createElement('button');
homeButton.className = 'home-button';
homeButton.textContent = 'Home';
homeButton.addEventListener('click', function() {
  window.location.href = './index.html'; 
});

container.appendChild(homeButton);