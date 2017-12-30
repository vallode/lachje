let links = {
    'social': {
        'facebook': 'https://www.facebook.com/',
        'instagram': 'https://www.instagram.com/'
    },

    'papes': {
        '/wg/': 'https://boards.4chan.org/wg/',
        'unsplash': 'https://unsplash.com/'
    },

    'work': {
        'MDN': 'https://developer.mozilla.org/en-US/',
        'Trello': 'https://trello.com/'
    },

    'misc.': {
        '127': '127.0.0.1',
        'Mixtape': 'https://mixtape.moe/'
    }
};

let lines = [
    'How are you?',
    'Have a good day!',
    'Kiss :3',
    '... HUG!',
    'I want food',
    'Get a snack!',
    'Love you!'
];

function init() {
    let link_container = document.getElementsByClassName('links')[0];

    for(let category in links) {
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let ul = document.createElement('ul');
        div.className = 'column';
        h2.innerHTML = category;

        link_container.appendChild(div);
        div.appendChild(h2);
        div.appendChild(ul);

        for(let website in links[category]) {
            let li = document.createElement('li');
            let a = document.createElement('a');

            a.href = links[category][website];
            a.innerHTML = website;

            ul.appendChild(li).appendChild(a);
        }
    }

    headline();
}

function headline() {
    let x = Math.floor(Math.random() * lines.length);

    document.querySelector('.header h1').innerHTML = lines[x];
}

document.addEventListener('DOMContentLoaded', init() );