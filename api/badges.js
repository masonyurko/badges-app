/* eslint-disable no-var */
export default async function handler(req, res) {
  const search = req.query.search || '';
  var badges = [
    {
      badgeImg: 'editor:mode-edit',
      badgeTitle: 'Technology & Information',
      badgeDesc: 'APA Style Citations: Introduction',
      author: 'Victoria Raish',
      color: 'blue',
    },
    {
      badgeImg: 'hardware:computer',
      badgeTitle: 'Education',
      badgeDesc: 'IST Career Resources',
      author: 'Cassie Rosas-Carson',
      color: 'blue',
    },
    {
      badgeImg: 'assignment-turned-in',
      badgeTitle: 'Professional Skills',
      badgeDesc: 'IST Careers - Meet a Coach - level 2',
      author: 'Rita Griffith',
      color: 'blue',
    },
    {
      badgeImg: 'cloud',
      badgeTitle: 'Agriculture and Natural Resources',
      badgeDesc: 'Treat Yourself',
      author: 'Allain Daigle',
      color: 'blue',
    },
    {
      badgeImg: 'hardware:keyboard',
      badgeTitle: 'Information Science and Technology',
      badgeDesc: 'How to Code Stuff',
      author: 'Bryan Ollendyke',
      color: 'blue',
    },
    {
      badgeImg: 'motorcycle',
      badgeTitle: 'Sports and Entertainment',
      badgeDesc: 'How to Ride a Motorcycle',
      author: 'Harley Davidson',
      color: 'blue',
    },
    {
      badgeImg: 'places:fitness-center',
      badgeTitle: 'Gym and Fitness',
      badgeDesc: 'How to Become Strong',
      author: 'Arnold Schwarzenegger',
      color: 'blue',
    },
    {
      badgeImg: 'image:music-note',
      badgeTitle: 'Music',
      badgeDesc: 'How to Compose a Symphony',
      author: 'Beethoven',
      color: 'blue',
    },
    {
      badgeImg: 'image:palette',
      badgeTitle: 'Art',
      badgeDesc: 'How to Draw a Portrait',
      author: 'Bob Ross',
      color: 'blue',
    },
    {
      badgeImg: 'image:photo-camera',
      badgeTitle: 'Photography',
      badgeDesc: 'How to Take a Good Photo',
      author: 'Ansel Adams',
      color: 'blue',
    },
  ];
  // eslint-disable-next-line array-callback-return
  badges.map(badge => {
    // eslint-disable-next-line prefer-template, no-param-reassign
    badge.index =
      // eslint-disable-next-line prefer-template
      badge.badgeTitle.toLowerCase() +
      ' ' +
      badge.badgeDesc.toLowerCase() +
      ' ' +
      badge.author.toLowerCase();
  });

  badges = badges.filter(
    badge => badge.index.indexOf(search.toLowerCase()) > -1
  );
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  res.json(badges);
}
