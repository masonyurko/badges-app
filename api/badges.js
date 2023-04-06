export default async function handler(request, res) {
  const badges = [
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
      color: 'red',
    },
    {
      badgeImg: 'hardware:router',
      badgeTitle: 'Professional Skills',
      badgeDesc: 'IST Careers - Meet a Coach - level 2',
      author: 'Rita Griffith',
      color: 'yellow',
    },
    {
      badgeImg: 'hardware:computer',
      badgeTitle: 'Agriculture and Natural Resources',
      badgeDesc: '[test] Treat Yourself',
      author: 'Allain Daigle',
      color: 'green',
    },
    {
      badgeImg: 'hardware:keyboard',
      badgeTitle: 'IST Professor',
      badgeDesc: 'How to Code Stuff',
      author: 'Bryan Ollendyke',
      color: 'purple',
    },
  ];

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
