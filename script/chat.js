
document.querySelector('#send').addEventListener('click', function () {
    var template = `<div class="line">
          <span class="chat-box mine">${document.querySelector('#input').value}</span>
        </div>`
    document.querySelector('.chat-content').insertAdjacentHTML('beforeend', template);
})
