module.exports = function (robot) {
  robot.respond(/.*schwifty/i, function(msg) {
    msg.send("http://i.imgur.com/UX6rw8w.gif");
  });
};
