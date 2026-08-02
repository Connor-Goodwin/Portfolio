document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.tag-filter');
  var items = document.querySelectorAll('.post-list-item');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var tag = button.getAttribute('data-tag');

      buttons.forEach(function (b) { b.classList.remove('active'); });
      button.classList.add('active');

      items.forEach(function (item) {
        if (tag === 'all') {
          item.style.display = '';
          return;
        }
        var itemTags = (item.getAttribute('data-tags') || '').split(',');
        item.style.display = itemTags.indexOf(tag) !== -1 ? '' : 'none';
      });
    });
  });
});
