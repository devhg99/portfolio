/**
 * 핵심 구조
 * 1) header.nav : 상단 고정(Sticky) 네비게이션
 * 2) main.main  : 전체 본문 (full width)
 * 3) heroWrap + heroContainer : Hero만 넓게(1280px) 사용 → 큰 화면에서 시원해짐
 * 4) container(1100px) : About/Projects/Contact는 가독성 위해 조금 좁게
 */
import "./App.css";

export default function App() {
  return (
    <div className="app">
      {/* ==============================
          1) 네비게이션 바 (상단 고정)
          - CSS에서 .nav가 sticky로 되어있어 스크롤해도 상단에 남아.
          - 내부 폭은 .container(1100px)로 제한해서 너무 넓게 퍼지지 않게 함.
          - 여기서 로고/메뉴의 위치를 바꾸고 싶으면 nav__inner의 justify-content를 바꾸면 됨.
         ============================== */}
      <header className="nav">
        <div className="container nav__inner">
          {/* 로고 영역 */}
          <div className="brand">
            {/* 브랜드 점 (색상은 CSS에서 brand__dot) */}
            <span className="brand__dot">●</span>
            {/* 텍스트 변경하면 좌측 로고명이 바뀜 */}
            <span className="brand__text">dev kwon portfolio</span>
          </div>

          {/* 메뉴 영역 (anchor 링크로 섹션 이동) */}
          <nav className="menu">
            {/* href="#about" → id="about" 섹션으로 스크롤 이동 */}
            <a className="menu__link" href="#about">About</a>
            <a className="menu__link" href="#projects">Projects</a>
            <a className="menu__link" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* ==============================
          2) 메인 컨텐츠 영역
          - main 자체는 full width여야 함 (CSS에서 max-width 절대 걸지 않음)
          - "전체화면이 안 차는 느낌"은 main이 아니라 내부 container 폭/hero 정렬 이슈였음
         ============================== */}
      <main className="main">
        {/* ==============================
            3) Hero (첫 화면)
            - heroWrap: 전체 폭 배경/여백 담당 (full width)
            - heroContainer: Hero 내용만 넓게(1280px) 중앙 정렬
              → 여기 max-width를 키우면 "더 꽉 차는 느낌"
              → 줄이면 "가운데 카드와 텍스트가 더 모여 보임"
           ============================== */}
        <section className="heroWrap">
          <div className="heroContainer">
            {/* hero: 좌/우 2열 그리드 */}
            <section className="hero">
              {/* ------------------------------
                  3-1) Hero 왼쪽 (카피/버튼/링크)
                  - 여기 텍스트가 전체 인상의 70%를 결정함
                  - 글 줄 길이가 너무 길면 촌스러워 보일 수 있어
                    → CSS에서 hero__left max-width를 조절하면 줄 길이 바뀜
                 ------------------------------ */}
              <div className="hero__left">
                {/* 배지 (작은 설명 문구) */}
                <p className="badge">Frontend · Backend · DevOps · Infra</p>

                {/* 메인 타이틀
                   - title의 폰트 크기는 CSS clamp로 반응형
                   - title__accent는 그라디언트 텍스트 */}
                <h1 className="title">
                  배포까지 되는 서비스, 끝까지 만드는 엔지니어
                  <br />
                  <span className="title__accent">권혁광</span> 입니다.
                </h1>

                {/* 서브 설명
                   - 줄 길이: CSS에서 subtitle max-width로 조절
                   - 문장 길면 더 "소개" 느낌, 짧으면 더 "슬로건" 느낌 */}
                <p className="subtitle">
                  AWS 인프라, CI/CD, Docker 기반 운영부터 FastAPI/DB 연동까지.
                  프로젝트를 “동작하는 제품”으로 만드는 걸 좋아합니다.
                </p>

                {/* CTA 버튼
                   - btn--primary: 강조 버튼(그라디언트)
                   - btn--ghost: 보조 버튼 */}
                <div className="cta">
                  <a className="btn btn--primary" href="#projects">프로젝트 보기</a>
                  <a className="btn btn--ghost" href="#contact">연락하기</a>
                </div>

                {/* 퀵 링크
                   - 링크가 많아지면 지저분해질 수 있음 → 2~3개 추천
                   - 색/밑줄은 CSS quick__item에서 조절 */}
                <div className="quick">
                  <a
                    className="quick__item"
                    href="https://github.com/devhg99"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub →
                  </a>

                  <a
                    className="quick__item"
                    href="https://almond-comfort-a8a.notion.site/2-237fef49d8d5804d9a4dee1101d09a15"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Notion/Blog →
                  </a>

                  {/* Resume는 아직 링크 없어서 preventDefault 처리함
                     - 나중에 PDF 링크 생기면 href에 넣고 onClick 지워도 됨 */}
                  <a
                    className="quick__item"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    Resume(PDF) →
                  </a>
                </div>
              </div>

              {/* ------------------------------
                  3-2) Hero 오른쪽 (Highlights 카드)
                  - 이 카드의 "크기/위치"가 전체 균형을 잡아줌
                  - 카드가 작으면 왼쪽이 무거워 보여서 왼쪽 쏠림 느낌이 강해짐
                    → CSS에서 .card width(min(560px,100%)) 조절하면 해결
                 ------------------------------ */}
              <div className="hero__right">
                {/* 하이라이트 카드 */}
                <div className="card">
                  <div className="card__top">
                    <h3 className="card__title">Highlights</h3>
                    <span className="pill">2026</span>
                  </div>

                  {/* 리스트(체크 항목) */}
                  <ul className="list">
                    <li className="list__item">
                      <span className="list__bullet">✓</span>
                      <div>
                        <b>AWS 기반 아키텍처</b>
                        <div className="muted">VPC / EC2 / RDS / ECR / S3 / IAM</div>
                      </div>
                    </li>

                    <li className="list__item">
                      <span className="list__bullet">✓</span>
                      <div>
                        <b>CI/CD 자동화</b>
                        <div className="muted">GitHub Actions + OIDC + SSM 배포</div>
                      </div>
                    </li>

                    <li className="list__item">
                      <span className="list__bullet">✓</span>
                      <div>
                        <b>Backend 연동</b>
                        <div className="muted">FastAPI / MySQL / Milvus(벡터DB)</div>
                      </div>
                    </li>
                  </ul>

                  {/* 카드 하단(칩 태그들) */}
                  <div className="card__bottom">
                    <div className="mini">
                      <div className="mini__label">Main Stack</div>
                      <div className="chips">
                        <span className="chip">React</span>
                        <span className="chip">AWS</span>
                        <span className="chip">Docker</span>
                        <span className="chip">FastAPI</span>
                      </div>
                    </div>

                    <div className="mini">
                      <div className="mini__label">Focus</div>
                      <div className="chips">
                        <span className="chip chip--dim">Reliability</span>
                        <span className="chip chip--dim">Automation</span>
                        <span className="chip chip--dim">DX</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 배경 블러(장식)
                   - blob 위치/크기 바꾸면 분위기 크게 달라짐
                   - 너무 진하면 촌스러울 수 있으니 opacity/blur 조절 추천 */}
                <div className="blob blob--1" />
                <div className="blob blob--2" />
              </div>
            </section>
          </div>
        </section>

        {/* ==============================
            4) 아래 섹션들 (About/Projects/Contact)
            - 여기는 container(1100px)로 고정해서 가독성 우선
            - 너무 넓으면 글이 길어져서 읽기 불편해짐
           ============================== */}
        <div className="container">
          {/* About */}
          <section id="about" className="section">
            <h2 className="section__title">About</h2>
            <p className="section__desc">
              저는 기능을 만드는 것뿐 아니라, 배포/운영/자동화까지 포함한 전체 흐름을 설계하고
              문제를 끝까지 해결하는 데 강점이 있습니다. 특히 인프라/DevOps 쪽 경험을 프로젝트에
              녹여 “현실적으로 굴러가는” 결과물을 만드는 것을 목표로 합니다.
            </p>
          </section>

          {/* Projects */}
          <section id="projects" className="section">
            <div className="section__head">
              <h2 className="section__title">Projects</h2>
              <p className="section__hint">클릭하면 상세 페이지(다음 단계에서 라우팅으로 분리)</p>
            </div>

            {/* grid: 2열 카드 레이아웃 (모바일은 1열) */}
            <div className="grid">
              <article className="pcard">
                <div className="pcard__top">
                  <h3 className="pcard__title">Teacher AI Chatbot</h3>
                  <span className="pill pill--blue">Infra / DevOps</span>
                </div>

                <p className="pcard__desc">
                  교사 업무(출결/성적/생활기록부)를 보조하는 웹서비스. AWS + Docker + CI/CD 자동화 구축.
                </p>

                <div className="chips">
                  <span className="chip">AWS</span>
                  <span className="chip">ECR</span>
                  <span className="chip">EC2</span>
                  <span className="chip">SSM</span>
                  <span className="chip">FastAPI</span>
                </div>

                <div className="pcard__links">
                  <a className="link" href="#" onClick={(e) => e.preventDefault()}>
                    Read more →
                  </a>
                  <a
                    className="link"
                    href="https://github.com/orgs/DouzonFinal-Project/repositories"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub →
                  </a>
                </div>
              </article>

              <article className="pcard">
                <div className="pcard__top">
                  <h3 className="pcard__title">Portfolio Website</h3>
                  <span className="pill pill--green">Frontend</span>
                </div>

                <p className="pcard__desc">
                  React 기반 포트폴리오. 섹션 구성/프로젝트 카드/배포까지 한 번에 정리.
                </p>

                <div className="chips">
                  <span className="chip">React</span>
                  <span className="chip">Vite</span>
                  <span className="chip">CSS</span>
                </div>

                <div className="pcard__links">
                  <a className="link" href="#" onClick={(e) => e.preventDefault()}>
                    Read more →
                  </a>
                  <a
                    className="link"
                    href="https://github.com/devhg99/portfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub →
                  </a>
                </div>
              </article>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="section">
            <h2 className="section__title">Contact</h2>

            <div className="contact">
              <div className="contact__item">
                <div className="contact__label">Email</div>
                <div className="contact__value">devkwon99@gmail.com</div>
              </div>

              <div className="contact__item">
                <div className="contact__label">GitHub</div>
                <a
                  className="contact__value link"
                  href="https://github.com/devhg99"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/...
                </a>
              </div>

              <div className="contact__item">
                <div className="contact__label">Blog</div>
                <a
                  className="contact__value link"
                  href="https://almond-comfort-a8a.notion.site/2-237fef49d8d5804d9a4dee1101d09a15"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.notion.so/
                </a>
              </div>
            </div>
          </section>

          {/* footer는 가볍게 */}
          <footer className="footer">© {new Date().getFullYear()} dev. Built with React.</footer>
        </div>
      </main>
    </div>
  );
}
