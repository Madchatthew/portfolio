const events = document.querySelectorAll('.event');

events.forEach( event => {
    const date = dayjs(event.dataset.date).format('MMM D, YYYY');
    const dateElement = event.querySelector('.date');

    dateElement.innerText = `Updated: ` + date;
})

