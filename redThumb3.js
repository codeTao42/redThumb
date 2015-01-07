var postings = [
  {
    image_source: "http://aplusanimalhospital.com/wp-content/uploads/2013/08/projectcat.jpg",
    title: "Mah cats",
    social: {
      reddit: "#reddit",
      twitter: "#twitter",
      etc: "#etc"
    }
  },
  {
    image_source: "http://aplusanimalhospital.com/wp-content/uploads/2013/08/projectcat.jpg",
    title: "Mah dawgz",
    social: {
      reddit: "#reddit",
      twitter: "#twitter",
      etc: "#etc"
    }
  },
  {
    image_source: "http://aplusanimalhospital.com/wp-content/uploads/2013/08/projectcat.jpg",
    title: "So reddit",
    social: {
      reddit: "#reddit",
      twitter: "#twitter",
      etc: "#etc"
    }
  },
  {
    image_source: "http://aplusanimalhospital.com/wp-content/uploads/2013/08/projectcat.jpg",
    title: "much benji",
    social: {
      reddit: "#reddit",
      twitter: "#twitter",
      etc: "#etc"
    }
  },
  {
    image_source: "http://aplusanimalhospital.com/wp-content/uploads/2013/08/projectcat.jpg",
    title: "Mah cats",
    social: {
      reddit: "#reddit",
      twitter: "#twitter",
      etc: "#etc"
    }
  },
  {
    image_source: "http://aplusanimalhospital.com/wp-content/uploads/2013/08/projectcat.jpg",
    title: "Mah cats",
    social: {
      reddit: "#reddit",
      twitter: "#twitter",
      etc: "#etc"
    }
  },
  {
    image_source: "http://aplusanimalhospital.com/wp-content/uploads/2013/08/projectcat.jpg",
    title: "Mah cats",
    social: {
      reddit: "#reddit",
      twitter: "#twitter",
      etc: "#etc"
    }
  },
  {
    image_source: "http://aplusanimalhospital.com/wp-content/uploads/2013/08/projectcat.jpg",
    title: "Mah cats",
    social: {
      reddit: "#reddit",
      twitter: "#twitter",
      etc: "#etc"
    }
  },
  {
    image_source: "http://aplusanimalhospital.com/wp-content/uploads/2013/08/projectcat.jpg",
    title: "Mah cats",
    social: {
      reddit: "#reddit",
      twitter: "#twitter",
      etc: "#etc"
    }
  },
  {
    image_source: "http://aplusanimalhospital.com/wp-content/uploads/2013/08/projectcat.jpg",
    title: "Mah cats",
    social: {
      reddit: "#reddit",
      twitter: "#twitter",
      etc: "#etc"
    }
  },
  {
    image_source: "http://aplusanimalhospital.com/wp-content/uploads/2013/08/projectcat.jpg",
    title: "Mah cats",
    social: {
      reddit: "#reddit",
      twitter: "#twitter",
      etc: "#etc"
    }
  },
  {
    image_source: "http://aplusanimalhospital.com/wp-content/uploads/2013/08/projectcat.jpg",
    title: "Mah cats",
    social: {
      reddit: "#reddit",
      twitter: "#twitter",
      etc: "#etc"
    }
  },
  {
    image_source: "http://aplusanimalhospital.com/wp-content/uploads/2013/08/projectcat.jpg",
    title: "Mah cats",
    social: {
      reddit: "#reddit",
      twitter: "#twitter",
      etc: "#etc"
    }
  },
  {
    image_source: "http://aplusanimalhospital.com/wp-content/uploads/2013/08/projectcat.jpg",
    title: "Mah cats",
    social: {
      reddit: "#reddit",
      twitter: "#twitter",
      etc: "#etc"
    }
  },
  {
    image_source: "http://aplusanimalhospital.com/wp-content/uploads/2013/08/projectcat.jpg",
    title: "Mah cats",
    social: {
      reddit: "#reddit",
      twitter: "#twitter",
      etc: "#etc"
    }
  },
  {
    image_source: "http://aplusanimalhospital.com/wp-content/uploads/2013/08/projectcat.jpg",
    title: "Mah cats",
    social: {
      reddit: "#reddit",
      twitter: "#twitter",
      etc: "#etc"
    }
  },
  {
    image_source: "http://aplusanimalhospital.com/wp-content/uploads/2013/08/projectcat.jpg",
    title: "Mah cats",
    social: {
      reddit: "#reddit",
      twitter: "#twitter",
      etc: "#etc"
    }
  }
];


var template = '\
<div class="post col-sm-4 col-md-3 col-lg-2"> \
  <h2>#{title}</h2> \
  <img src="#{image_source}"> \
  <ul class="list-inline"> \
    <li><a href="#{reddit}">Reddit</a></li> \
    <li><a href="#{twitter}">Twitter</a></li> \
    <li><a href="#{etc}">etc</a></li> \
  </ul> \
</div>';

var renderPosting = function (posting, template) {
  var html = template.replace('#{title}', posting.title);
  html = html.replace('#{image_source}',  posting.image_source);
  html = html.replace('#{reddit}',        posting.social.reddit);
  html = html.replace('#{twitter}',       posting.social.twitter);
  html = html.replace('#{etc}',           posting.social.etc);

  return html;
};

var renderPostings = function() {
  for (var i = 0; i < postings.length; i++) {
    var posting = postings[i];
    postHtml = renderPosting(posting, template);
    $('.posts').append(postHtml); 
  }
};

$(function() {
  renderPostings();
});
