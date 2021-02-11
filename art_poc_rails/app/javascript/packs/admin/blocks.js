const deleteBlock = (id) => {
  fetch(`/admin/blocks/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    window.location.reload();
  })
}

document.addEventListener('click', (event) => {
  return {
    'delete': deleteBlock.bind(null, event.target.dataset.blockId),
    '': () => {}
  }[event.target.dataset.blockAction || '']()
})
