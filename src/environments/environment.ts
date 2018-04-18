export const environment = {
  production: false,
  apiServer: 'https://southcentralus.api.cognitive.microsoft.com',
  apiKeys: {
    computerVision: '<insert your computer vision API key here>',
    face: '3e57664bb9054b33ab4c452f758768bd',
    textAnalytics: '6ef51acf0c8441828ac54f95c90de700'
  },
  faceImageUrls: [
    'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-1.jpg',
    'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-2.jpg',
    'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-3.jpg',
    'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-4.jpg',
    'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-5.jpg',
    'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-6.jpg'
  ],
  faceImagePairs: [
    {
      image1:
        'https://ia.media-imdb.com/images/M/MV5BMjIyMDI4MzY0OV5BMl5BanBnXkFtZTgwMDYyODgxMzE@._V1_SY1000_CR0,0,1480,1000_AL_.jpg',
      image2: 'https://ia.media-imdb.com/images/M/MV5BMTkxNzAwODEzN15BMl5BanBnXkFtZTYwMDIzODM2._V1_.jpg'
    },
    {
      image1:
        'https://ia.media-imdb.com/images/M/MV5BYzcxZDliNzgtYjQ0NS00MDI0LTkzMDctMjUwMDhhODg4YTFiXkEyXkFqcGdeQXVyMjE5MzM3MjA@._V1_.jpg',
      image2: 'https://ia.media-imdb.com/images/M/MV5BMjA5ODgwNzA1NV5BMl5BanBnXkFtZTcwNDA0MzYyNw@@._V1_.jpg'
    },
    {
      image1: 'https://ia.media-imdb.com/images/M/MV5BMjA1NDM0MDc3NF5BMl5BanBnXkFtZTYwOTA4MDU2._V1_.jpg',
      image2: 'https://ia.media-imdb.com/images/M/MV5BMTI4ODEzNzkzM15BMl5BanBnXkFtZTYwMjczMTQ2._V1_.jpg'
    }
  ],
  eightiesBabies: [
    {
      name: "Madonna",
      url: "https://i.pinimg.com/736x/b2/fa/2f/b2fa2f6ddace77eb2a014e103f0ca15c--madonna-albums-madonna-s.jpg",
      context: "Singer"
    },
    {
      name: "Mr. T",
      url: "http://www.manic-expression.com/wp-content/uploads/2014/08/mr-t-thumb-400xauto-10209.jpg",
      context: "Actor - A Team"
    },
    {
      name: "Max Headroom",
      url: "http://www.manic-expression.com/wp-content/uploads/2014/08/maxheadroom3.jpg",
      context: "TV Personality"
    },
    {
      name: "Richard Simmons",
      url: "http://2.bp.blogspot.com/_iNFMxWIeDVI/TUu-76sCIkI/AAAAAAAAAOA/8Hs05nD2otc/s1600/RichardSimmons.jpg",
      context: "Fitness Personality"
    },
    {
      name: "Hulk Hogan",
      url: "http://www.manic-expression.com/wp-content/uploads/2014/08/Hulk-Hogan.jpg",
      context: "Wrestling Personality"
    },
    {
      name: "Boy George",
      url: "http://3.bp.blogspot.com/_u58i4qSO0Zk/TNLezJWFE_I/AAAAAAAADIQ/spHnx6YimvA/s1600/Boy-George_l.jpeg",
      context: "Singer"
    },
    {
      name: "Michael J. Fox",
      url: "https://img.buzzfeed.com/buzzfeed-static/static/2015-07/17/18/campaign_images/webdr11/whats-your-80s-movie-persona-based-on-these-three-2-11968-1437171121-5_dblbig.jpg",
      context: "Actor - Back to the Future"
    },
    {
      name: "Peewee Herman",
      url: "http://static.tvtropes.org/pmwiki/pub/images/pee-wee-herman_1978.jpg",
      context: "TV Personality"
    },
    {
      name: "Will Smith",
      url: "https://metrouk2.files.wordpress.com/2015/01/fresh-prince.png",
      context: "Actor/Singer - Fresh Prince"
    },
    {
      name: "Matthew Broderick",
      url: "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1492112271/articles/2016/06/11/happy-30th-ferris-bueller-30-things-you-didn-t-know-about-ferris-bueller-s-day-off/160610-zimmerman-bueller-tease_c2of7p",
      context: "Actor - Ferris Bueller's Day Off"
    },
    {
      name: "Molly Ringwald",
      url: "https://www.independent.ie/incoming/article31567501.ece/ALTERNATES/h342/molly-ringwald-1.jpg",
      context: "Actress - Breakfast Club"
    }
  ],
  emotionImageUrls: [
    'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-1.jpg',
    'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-2.jpg',
    'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-3.jpg',
    'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-4.jpg',
    'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-5.jpg',
    'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-6.jpg'
  ],
  textImageUrls: [
    'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-1.jpg',
    'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-2.jpg',
    'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-3.jpg',
    'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-4.jpg',
    'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-5.jpg',
    'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-6.jpg'
  ],
  objectImageUrls: [
    'https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-3.jpg',
    'https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-5.jpg',
    'https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-6.jpg',
    'https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-7.jpg',
    'https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-8.jpg',
    'https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-9.jpg',
    'https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-10.jpg',
    'https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-11.jpg',
    'https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-12.jpg'
  ]
};
