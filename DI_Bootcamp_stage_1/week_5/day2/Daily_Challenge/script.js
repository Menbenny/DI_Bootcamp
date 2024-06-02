document.getElementById('libform').addEventListener('submit', function(event) {
    event.preventDefault();
    generateStory();
  });

  document.getElementById('shuffle-button').addEventListener('click', function() {
    generateStory(true);
  });

  const stories = [
    (noun, adjective, person, verb, place) => `${person} went to the ${place} to ${verb} with a ${adjective} ${noun}.`,
    (noun, adjective, person, verb, place) => `In the ${adjective} ${place}, ${person} decided to ${verb} the ${noun}.`,
    (noun, adjective, person, verb, place) => `${person} loves to ${verb} in the ${adjective} ${place} with their favorite ${noun}.`,
    (noun, adjective, person, verb, place) => `Once upon a time in ${place}, a ${adjective} ${noun} was found by ${person} who wanted to ${verb}.`
  ];

  function generateStory(isShuffle = false) {
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const person = document.getElementById('person').value;
    const verb = document.getElementById('verb').value;
    const place = document.getElementById('place').value;

    if (!noun || !adjective || !person || !verb || !place) {
      alert('Please fill in all fields!');
      return;
    }

    const randomIndex = isShuffle ? Math.floor(Math.random() * stories.length) : 0;
    const story = stories[randomIndex](noun, adjective, person, verb, place);
    document.getElementById('story').textContent = story;
  }