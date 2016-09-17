export default function(){
  this.transition(
    this.fromRoute('events.index'),
    this.toRoute('events.new'),
    this.use('fade'),
    this.reverse('fade')
  );

  this.transition(
    this.fromRoute('events.index'),
    this.toRoute('events.event'),
    this.use('fade'),
    this.reverse('fade')
  );
};
