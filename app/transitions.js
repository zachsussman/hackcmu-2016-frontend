export default function(){
  // this.transition(
  //   this.fromRoute('events.index'),
  //   this.toRoute('events.new'),
  //   this.use('fade'),
  //   this.reverse('fade')
  // );
  //
  // this.transition(
  //   this.fromRoute('events.index'),
  //   this.toRoute('events.event'),
  //   this.use('fade'),
  //   this.reverse('fade')
  // );
  //
  // this.transition(
  //   this.fromRoute('events.me'),
  //   this.toRoute('events.event'),
  //   this.use('fade'),
  //   this.reverse('fade');
  // );

  let fade = (r1, r2) => (this.transition(this.fromRoute(r1), this.toRoute(r2), this.use('fade'),this.reverse('fade')));

  let fadeall = (...routes) => {
    for (let i = 0; i < routes.length; i++) {
      for (let j = i+1; j < routes.length; j++) {
        fade(routes[i], routes[j]);
      }
    }
  }

  fadeall('events.index', 'events.new', 'events.event', 'events', 'events.me', 'login');
};
