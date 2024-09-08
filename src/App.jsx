import './App.css';

function App() {
  return (
    <>
      <div className="container-fluid bg-1 text-center">
        <img
          src="../src/assets/OIP.jpg"
          className="img-circle"
          alt="Bird"
          title="Ваше реальне фото (обов'язково)"
          width="350"
          height="350"
        />
        <h3>Прізвище Ім'я</h3>
        <h3>Назва курсу</h3>
      </div>

      <div className="container-fluid bg-2 text-center">
        <h4>Спеціальність: Інженерія програмного забезпечення</h4>
        <h4>Курс: 3</h4>
        <h4>Номер групи: 6.1212-1</h4>
        <h4>Номер у журналі академічної групи: 14</h4>
      </div>

      <div className="container-fluid bg-3 text-center">
        <h3>Мої роботи</h3>
        <div className="row gx-5">
          <div className="col-sm-4">
            <article className="well">
              <h4>Лабораторна робота №1</h4>
              <p>Короткий опис завдання</p>
              <p>
                <a href="#">Посилання на репозиторій</a>
              </p>
            </article>
          </div>
          <div className="col-sm-4">
            <article className="well">
              <h4>Лабораторна робота №2</h4>
              <p>Короткий опис завдання</p>
              <p>
                <a href="#">Посилання на репозиторій</a>
              </p>
            </article>
          </div>
          <div className="col-sm-4">
            <article className="well">
              <h4>Лабораторна робота №3</h4>
              <p>Короткий опис завдання</p>
              <p>
                <a href="#">Посилання на репозиторій</a>
              </p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
