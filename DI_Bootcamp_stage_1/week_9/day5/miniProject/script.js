const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

class Robot {
    constructor (id, name, username, email, image) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.image = image;
    }
};

const containerDiv = document.getElementById('robotContainer');

function displayRobots(robotList) {

  containerDiv.innerHTML = '';
  robotList.forEach((robot) => {
    const robotCard = document.createElement('div');
    robotCard.classList.add('robotCard')

    // HTML template string injection 
    robotCard.innerHTML = `
    <img src="${robot.image}"/>
    
    <h4>${robot.name}</h4>
    <p>${robot.email}</p>
    `;
    containerDiv.appendChild(robotCard)
  });
}

const robotInstances = robots.map(
  (robot) =>
    new Robot(robot.id, robot.name, robot.username, robot.email, robot.image)
)

displayRobots(robotInstances)

const searchBox = document.getElementById('searchBox')

searchBox.addEventListener("input", (event) => {
  const searchWord = event.target.value.toLowerCase();
  const filteredRobots = robotInstances.filter((robot) => robot.name.toLowerCase().includes(searchWord)
  );
  displayRobots(filteredRobots)
})






