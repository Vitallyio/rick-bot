module.exports = function (robot) {
  robot.respond(/.*schwifty/i, function(msg) {
    msg.send("http://i.imgur.com/dKTpRxa.gif");
  });
};
