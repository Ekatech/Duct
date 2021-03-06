'use strict';

const path = require('path');

module.exports = Franz => {
  const getMessages = function getMessages() {
    const count = document.querySelectorAll('.unconsumed-badge').length;

    // set Franz badge
    Franz.setBadge(count);
  };

  // inject franz.css stylesheet
  Franz.injectCSS(path.join(__dirname, 'service.css'));

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZveGVyL3dlYnZpZXcuanMiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiRnJhbnoiLCJnZXRNZXNzYWdlcyIsImNvdW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwic2V0QmFkZ2UiLCJpbmplY3RDU1MiLCJqb2luIiwiX19kaXJuYW1lIiwibG9vcCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7QUFFQUMsT0FBT0MsT0FBUCxHQUFrQkMsS0FBRCxJQUFXO0FBQzFCLFFBQU1DLGNBQWMsU0FBU0EsV0FBVCxHQUF1QjtBQUN6QyxVQUFNQyxRQUFRQyxTQUFTQyxnQkFBVCxDQUEwQixtQkFBMUIsRUFBK0NDLE1BQTdEOztBQUVBO0FBQ0FMLFVBQU1NLFFBQU4sQ0FBZUosS0FBZjtBQUNELEdBTEQ7O0FBT0E7QUFDQUYsUUFBTU8sU0FBTixDQUFnQlgsS0FBS1ksSUFBTCxDQUFVQyxTQUFWLEVBQXFCLGFBQXJCLENBQWhCOztBQUVBO0FBQ0FULFFBQU1VLElBQU4sQ0FBV1QsV0FBWDtBQUNELENBYkQiLCJmaWxlIjoidm94ZXIvd2Vidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKEZyYW56KSA9PiB7XG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gZnVuY3Rpb24gZ2V0TWVzc2FnZXMoKSB7XG4gICAgY29uc3QgY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5jb25zdW1lZC1iYWRnZScpLmxlbmd0aDtcblxuICAgIC8vIHNldCBGcmFueiBiYWRnZVxuICAgIEZyYW56LnNldEJhZGdlKGNvdW50KTtcbiAgfTtcblxuICAvLyBpbmplY3QgZnJhbnouY3NzIHN0eWxlc2hlZXRcbiAgRnJhbnouaW5qZWN0Q1NTKHBhdGguam9pbihfX2Rpcm5hbWUsICdzZXJ2aWNlLmNzcycpKTtcblxuICAvLyBjaGVjayBmb3IgbmV3IG1lc3NhZ2VzIGV2ZXJ5IHNlY29uZCBhbmQgdXBkYXRlIEZyYW56IGJhZGdlXG4gIEZyYW56Lmxvb3AoZ2V0TWVzc2FnZXMpO1xufTtcbiJdfQ==