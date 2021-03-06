'use strict';

module.exports = Franz => {
  const getMessages = function getMessages() {
    const directMessages = document.querySelectorAll('.hc-mention').length;
    const allMessages = document.querySelectorAll('.aui-badge:not(.hc-mention)').length - directMessages;

    // set Franz badge
    Franz.setBadge(directMessages, allMessages);
  };
  Franz.loop(getMessages);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpcGNoYXQvd2Vidmlldy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiRnJhbnoiLCJnZXRNZXNzYWdlcyIsImRpcmVjdE1lc3NhZ2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiYWxsTWVzc2FnZXMiLCJzZXRCYWRnZSIsImxvb3AiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLE9BQVAsR0FBa0JDLEtBQUQsSUFBVztBQUMxQixRQUFNQyxjQUFjLFNBQVNBLFdBQVQsR0FBdUI7QUFDekMsVUFBTUMsaUJBQWlCQyxTQUFTQyxnQkFBVCxDQUEwQixhQUExQixFQUF5Q0MsTUFBaEU7QUFDQSxVQUFNQyxjQUFjSCxTQUFTQyxnQkFBVCxDQUEwQiw2QkFBMUIsRUFBeURDLE1BQXpELEdBQWtFSCxjQUF0Rjs7QUFFQTtBQUNBRixVQUFNTyxRQUFOLENBQWVMLGNBQWYsRUFBK0JJLFdBQS9CO0FBQ0QsR0FORDtBQU9BTixRQUFNUSxJQUFOLENBQVdQLFdBQVg7QUFDRCxDQVREIiwiZmlsZSI6ImhpcGNoYXQvd2Vidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKEZyYW56KSA9PiB7XG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gZnVuY3Rpb24gZ2V0TWVzc2FnZXMoKSB7XG4gICAgY29uc3QgZGlyZWN0TWVzc2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGMtbWVudGlvbicpLmxlbmd0aDtcbiAgICBjb25zdCBhbGxNZXNzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hdWktYmFkZ2U6bm90KC5oYy1tZW50aW9uKScpLmxlbmd0aCAtIGRpcmVjdE1lc3NhZ2VzO1xuXG4gICAgLy8gc2V0IEZyYW56IGJhZGdlXG4gICAgRnJhbnouc2V0QmFkZ2UoZGlyZWN0TWVzc2FnZXMsIGFsbE1lc3NhZ2VzKTtcbiAgfTtcbiAgRnJhbnoubG9vcChnZXRNZXNzYWdlcyk7XG59O1xuIl19