import './App.scss';

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const main: any = document.querySelector('main');
    const html = main?.innerHTML;
    const add = document.getElementById('add-content');
    const remove = document.getElementById('remove-content');

    add?.addEventListener('click', (ev) => {
      ev.preventDefault();
      main.innerHTML += html;
    });

    remove?.addEventListener('click', (ev) => {
      ev.preventDefault();
      main?.querySelectorAll('p').forEach((el: any, i: number) => {
        if (i > 3) el.remove();
      });
    });
  }, []);

  return (
    <>
      <header>Header</header>
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          vel cumque quis animi nisi, odit totam laborum quam molestias sed
          quidem, dolorum deleniti quae possimus obcaecati eaque praesentium
          alias! Aperiam.
        </p>
        <p>
          Blanditiis maxime odit expedita modi a itaque? Placeat expedita nam,
          aut ea odit dolores est optio ut odio pariatur! Similique pariatur
          perferendis quaerat sequi. Eligendi qui illo nesciunt voluptates
          facilis!
        </p>
        <p>
          Reiciendis rem inventore asperiores sapiente cupiditate officia
          facilis earum accusantium deserunt, incidunt molestias! Fuga fugiat
          eveniet explicabo. Eveniet soluta voluptates saepe minima veniam illum
          error atque quibusdam, veritatis cupiditate culpa.
        </p>
        <p>
          Voluptatum eligendi totam, beatae ut ea, minus aut voluptate atque
          eaque maiores officiis praesentium aperiam impedit consectetur vero
          quia at nostrum? Similique dolorem cupiditate quis veniam! Soluta
          assumenda voluptatum delectus.
        </p>
      </main>

      <footer>
        <button id="add-content" className="btn btn-primary" type="button">
          ADD CONTENT
        </button>
        {' - '}
        <button id="remove-content" className="btn btn-primary" type="button">
          REMOVE CONTENT
        </button>
      </footer>
    </>
  );
}

export default App;
