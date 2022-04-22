import React from "react";
import Creator from "../../assets/creator.jpg";
import { AboutCreatorWrapper } from "../../styles";
export default function AboutCreator() {
  return (
    <div className="row text-white mt-5 px-5">
      <div className="col-xl-10 offset-1 col-lg-10 col-md-8 col-12">
        <AboutCreatorWrapper>
          <h3 data-aos="fade-down" data-aos-duration="500" className="fw-bold">
            Приветственное слово руководителя компании
          </h3>
          {/* <hr /> */}
          <p className="mt-5" data-aos="fade-right" data-aos-duration="900">
            <img data-aos="zoom-in" data-aos-duration="900" className="w-50" align="right" src={Creator} alt="creator" />
            Уважаемый посетитель! Добро пожаловать на нашу виртуальную
            территорию!
          </p>

          <p data-aos="fade-right" data-aos-duration="1100">
            Здесь Вы сможете ознакомиться с нашей компанией, а также с миссией и
            ценностями, по которым мы живём. Изначально наша компания выбрала
            путь откровенности и прозрачности во всех наших делах, и это наш
            приоритет - всегда оставаться в тесных отношениях с нашими гостями,
            клиентами и партнерами.
          </p>

          <p data-aos="fade-right" data-aos-duration="1300">
            Мы строим счастье, и это выражается в нашем желании сделать всё,
            чтобы потребитель нашей недвижимости оставался довольным и
            благодарным за то, что мы смогли помочь ему сделать лучший выбор и
            предложить достойные решения, максимально отвечающие изъявленным
            запросам и пожеланиям.
          </p>
          <p data-aos="fade-right" data-aos-duration="1500">
            Мы будем благодарны, если Вы сообщите нам о возможных ошибках или
            поделитесь своими рекомендациями по улучшению нашей деятельности по
            всем направлениям. Пишите нам, звоните, ну и, конечно, заезжайте к
            нам в офис, а мы, в свою очередь, обещаем чистосердечный сервис,
            чашку настоящего кофе и самую искреннюю консультацию по приобретению
            недвижимости!
          </p>

          <p className="mb-5" data-aos="fade-right" data-aos-duration="1700">
            С большим уважением и улыбкой на лице, Мурад Назаров, основатель и
            руководитель <b> KARKAS JBI TRADE </b>
          </p>
        </AboutCreatorWrapper>
      </div>
    </div>
  );
}
