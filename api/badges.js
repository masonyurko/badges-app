/* eslint-disable no-var */
export default async function handler(req, res) {
  const search = req.query.search || '';
  var badges = [
    {
      badgeImg: 'hardware:router',
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
      badgeImg: 'hardware:router',
      badgeTitle: 'Professional Skills',
      badgeDesc: 'IST Careers - Meet a Coach - level 2',
      author: 'Rita Griffith',
      color: 'blue',
    },
    {
      badgeImg: 'hardware:computer',
      badgeTitle: 'Agriculture and Natural Resources',
      badgeDesc: 'Treat Yourself',
      author: 'Allain Daigle',
      color: 'blue',
    },
    {
      badgeImg: 'hardware:keyboard',
      badgeTitle: 'IST Professor',
      badgeDesc: 'How to Code Stuff',
      author: 'Bryan Ollendyke',
      color: 'blue',
    },
    {
      badgeImg: 'motorcycle',
      badgeTitle: 'Extreme Sports',
      badgeDesc: 'How to Ride a Motorcycle',
      author: 'Harley Davidson',
      color: 'blue',
    },
    {
      badgeImg: '',
      badgeTitle: 'Football',
      badgeDesc: 'How to Play Football',
      author: 'Jalen Hurts',
      color: 'blue',
    },
    {
      badgeImg: '',
      badgeTitle: 'Basketball',
      badgeDesc: 'How to Play Basketball',
      author: 'Joel Embiid',
      color: 'blue',
    },
  ];
  // eslint-disable-next-line array-callback-return
  badges.map(badge => {
    // eslint-disable-next-line prefer-template, no-param-reassign
    badge.index =
      badge.badgeTitle.toLowerCase() +
      ' ' +
      badge.badgeDesc.toLowerCase() +
      ' ' +
      badge.author.toLowerCase();
  });

  badges = badges.filter(
    badge => badge.index.indexOf(search.toLowerCase()) > -1
  );

  console.log(badges);
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
