let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('<strong>Desarrolladora</strong> Front-end JR')
  .pauseFor(300)
  .deleteAll()
  .typeString('<strong> Diseñadora <span style="color: #ffff;">UX</span></strong>')
  .pauseFor(1000)
  .start();