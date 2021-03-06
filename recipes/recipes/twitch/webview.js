'use strict';

module.exports = (Franz, options) => {
  const getMessages = () => {
    // Get the number of mentions
    const mentions = document.querySelectorAll('.chat-line .mentioned').length;

    Franz.setBadge(mentions, 0);
  };
  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3aXRjaC93ZWJ2aWV3LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJGcmFueiIsIm9wdGlvbnMiLCJnZXRNZXNzYWdlcyIsIm1lbnRpb25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwic2V0QmFkZ2UiLCJsb29wIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPQyxPQUFQLEdBQWlCLENBQUNDLEtBQUQsRUFBUUMsT0FBUixLQUFvQjtBQUNuQyxRQUFNQyxjQUFjLE1BQU07QUFDeEI7QUFDQSxVQUFNQyxXQUFXQyxTQUFTQyxnQkFBVCxDQUEwQix1QkFBMUIsRUFBbURDLE1BQXBFOztBQUVBTixVQUFNTyxRQUFOLENBQWVKLFFBQWYsRUFBeUIsQ0FBekI7QUFDRCxHQUxEO0FBTUE7QUFDQUgsUUFBTVEsSUFBTixDQUFXTixXQUFYO0FBQ0QsQ0FURCIsImZpbGUiOiJ0d2l0Y2gvd2Vidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKEZyYW56LCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gKCkgPT4ge1xuICAgIC8vIEdldCB0aGUgbnVtYmVyIG9mIG1lbnRpb25zXG4gICAgY29uc3QgbWVudGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhdC1saW5lIC5tZW50aW9uZWQnKS5sZW5ndGg7XG5cbiAgICBGcmFuei5zZXRCYWRnZShtZW50aW9ucywgMCk7XG4gIH07XG4gIC8vIGNoZWNrIGZvciBuZXcgbWVzc2FnZXMgZXZlcnkgc2Vjb25kIGFuZCB1cGRhdGUgRnJhbnogYmFkZ2VcbiAgRnJhbnoubG9vcChnZXRNZXNzYWdlcyk7XG59O1xuIl19