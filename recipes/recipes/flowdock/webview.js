'use strict';

module.exports = Franz => {
  const getMessages = function getMessages() {
    const directMessages = document.querySelectorAll('.activity-indicator-mentions').length;
    const indirectMessages = document.querySelectorAll('.activity-indicator-chat').length;

    // set Franz badge
    Franz.setBadge(directMessages, indirectMessages);
  };

  Franz.loop(getMessages);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsb3dkb2NrL3dlYnZpZXcuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIkZyYW56IiwiZ2V0TWVzc2FnZXMiLCJkaXJlY3RNZXNzYWdlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImluZGlyZWN0TWVzc2FnZXMiLCJzZXRCYWRnZSIsImxvb3AiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLE9BQVAsR0FBa0JDLEtBQUQsSUFBVztBQUMxQixRQUFNQyxjQUFjLFNBQVNBLFdBQVQsR0FBdUI7QUFDekMsVUFBTUMsaUJBQWlCQyxTQUFTQyxnQkFBVCxDQUEwQiw4QkFBMUIsRUFBMERDLE1BQWpGO0FBQ0EsVUFBTUMsbUJBQW1CSCxTQUFTQyxnQkFBVCxDQUEwQiwwQkFBMUIsRUFBc0RDLE1BQS9FOztBQUVBO0FBQ0FMLFVBQU1PLFFBQU4sQ0FBZUwsY0FBZixFQUErQkksZ0JBQS9CO0FBQ0QsR0FORDs7QUFRQU4sUUFBTVEsSUFBTixDQUFXUCxXQUFYO0FBQ0QsQ0FWRCIsImZpbGUiOiJmbG93ZG9jay93ZWJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoRnJhbnopID0+IHtcbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSBmdW5jdGlvbiBnZXRNZXNzYWdlcygpIHtcbiAgICBjb25zdCBkaXJlY3RNZXNzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3Rpdml0eS1pbmRpY2F0b3ItbWVudGlvbnMnKS5sZW5ndGg7XG4gICAgY29uc3QgaW5kaXJlY3RNZXNzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3Rpdml0eS1pbmRpY2F0b3ItY2hhdCcpLmxlbmd0aDtcblxuICAgIC8vIHNldCBGcmFueiBiYWRnZVxuICAgIEZyYW56LnNldEJhZGdlKGRpcmVjdE1lc3NhZ2VzLCBpbmRpcmVjdE1lc3NhZ2VzKTtcbiAgfTtcblxuICBGcmFuei5sb29wKGdldE1lc3NhZ2VzKTtcbn07XG4iXX0=