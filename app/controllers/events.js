import Ember from 'ember';

export default Ember.Controller.extend({
  interests: [
    {name: 'Studying', iid: 0},
    {name: 'Partying', iid: 1},
    {name: 'Laser Tag', iid: 2},
    {name: 'Eating', iid: 3},
    {name: 'Learning', iid: 4},
    {name: 'Movies', iid: 5},
    {name: 'Coding', iid: 6},
    {name: 'Designing', iid: 7},
    {name: 'Playing', iid: 8},
    {name: 'Frisbee', iid: 9},
    {name: 'Not Studying', iid: 10},
    {name: 'Group Work', iid: 11},
    {name: 'Learning', iid: 12},
    {name: 'Sports', iid: 13},
    {name: 'Not Sleeping', iid: 14}
  ],
  events: [
    {
      name: 'HackCMU',
      description: 'HackCMU is a 24-hour event where students from across campus come together to make something awesome — like an app, website or hardware hack. “Don’t let your dreams be memes”',
      time: 'Friday, September 16 at 5:00pm - Saturday, September 17 at 7:30pm',
      location: 'Rashid Auditorium, 4th Floor, Gates, Carnegie Mellon University',
      id: 0,
      interests: [6, 7, 8, 10, 14, 3],
      attendees: [5, 7, 8],
      owner: 5,
      going: 200
    },
    {
      name: '15-151 Office Hours',
      description: '',
      time: 'All day, every day',
      location: 'Wean 7130',
      id: 1,
      interests: [1, 5, 12, 14],
      attendees: [0, 5, 7, 8],
      owner: 0,
      going: 300
    },

    {
      name: 'Party at UPitt',
      description: '',
      time: 'Saturday, September 17 at 10:00pm - 11:59pm',
      location: 'Meet at Cathy',
      id: 2,
      interests: [1, 3],
      attendees: [5, 7, 8],
      owner: 5,
      going: 70
    },

    {
      name: 'James Bond Laser Tag',
      description: '',
      time: 'Saturday, September 17 at 10pm',
      location: 'Meet at the UC atrium',
      id: 3,
      interests: [2, 1, 8, 10, 13],
      attendees: [4, 7, 9],
      owner: 5,
      going: 60
    },

    {
      name: 'Visit the Point and get Milkshakes',
      description: '',
      time: 'Saturday, September 24 at 6pm',
      location: 'Bus stop on Forbes',
      id: 4,
      interests: [1, 3, 9, 8, 10],
      attendees: [4, 7, 9],
      owner: 5,
      going: 21
    },

    {
      name: 'Duo Security Workshop',
      description: '',
      time: 'Monday, September 19 at 6:30pm',
      location: 'UC, McConomy Auditorium',
      id: 5,
      interests: [1, 6, 12],
      attendees: [1, 4, 7, 9],
      owner: 1,
      going: 110
    },

    {
      name: 'Google “The Internship” Movie',
      description: '',
      time: 'Sunday, September 25 at 8pm',
      location: 'Loews Theater Waterfront',
      id: 6,
      interests: [1, 6, 12],
      attendees: [4, 7, 9],
      owner: 5,
      going: 103
    },

    {
      name: '15-112 (Save me) hacking homework group',
      description: '',
      time: 'Saturday, September 17 at 12am',
      location: 'Hunt Library, Basement Computer Cluster',
      id: 7,
      interests: [1, 4, 6, 11, 12],
      attendees: [4, 7, 9],
      owner: 5,
      going: 10
    },

    {
      name: 'Ultimate Frisbee Pickup on the Cut',
      description: '',
      time: 'Sunday, September 18 at 1pm',
      location: 'Meet at the fence',
      id: 8,
      interests: [9, 8, 10, 13],
      attendees: [4, 7, 9],
      owner: 5,
      going: 14
    }
  ],
});
