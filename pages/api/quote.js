export default function handler(req, res) {
    res.status(400).json([
      {
        "id":'1',
        "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas Edison"
      },
      {
        "id":'2',
        "text": "You can observe a lot just by watching.",
        "author": "Yogi Berra"
      },
      {
        "id":'3',
        "text": "A house divided against itself cannot stand.",
        "author": "Abraham Lincoln"
      },
      {
        "id":'4',
        "text": "Difficulties increase the nearer we get to the goal.",
        "author": "Johann Wolfgang von Goethe"
      }
    ])}
