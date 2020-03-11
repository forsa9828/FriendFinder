// A GET Route to `/survey` which should display the survey page.
//A default, catch-all route that leads to `home.html` which displays the home page.

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// Display survey
app.get("/api/survey", function(req, res) {
  return res.json(survey);
});

// Displays survey, or returns false
app.get("/api/survey/:survey", function(req, res) {
  var chosen = req.params.survey;

  console.log(chosen);

  for (var i = 0; i < survey.length; i++) {
    if (chosen === survey[i].routeName) {
      return res.json(survey[i]);
    }
  }

  return res.json(false);
});
