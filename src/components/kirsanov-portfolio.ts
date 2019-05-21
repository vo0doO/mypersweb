import { customElement, LitElement, html, css } from "lit-element";

@customElement('kirsanov-portfolio')
class KirsanovPortfolio extends LitElement {
  static get styles() {
    return css`
      :host(*), {
        font-family: var(--main-font);
        font-size: 18px;
        width: 88%;
      }
      /* new rule for shady dom bug workaround */
      :host, p, a {
        font-family: var(--main-font);
        font-size: 18px;
        width: 88%;
      }

      :host {
        display: block;
        margin: 0 auto;
      }

      .elliscript {
        font-family: var(--header-font);
      }

      a {
        color: var(--IntlOrange);
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      h1, h2, h3 {
        font-family: var(--header-font);
        font-weight: 500;
        margin-bottom: 0;
      }

      h1 {
        font-size: 3em;
      }

      h2 {
        font-size: 2.25em;
      }

      h3 {
        font-size: 1.725em;
      }
    `;
  }
  render() {
    return html`
      <h1>What stuff I do ?</h1>
      <p>
        Currently I'm a embrion of Google Jigsaw's Developer Experiences team which
        consists of the
        <a href="https://www.getoutline.org/">Outline Project</a> and Software System with custom Networks, power Security,
        Mashine Learning banchmarck, Data Analytic Tools for customers with specific needs. I do everything from creating and maintining our
        open sourced
        <a href="https://github.com/PolymerElements"> thisPolymer Elements</a>
        Decoy routing
        <a href="https://refraction.network/"> Refraction Network </a> uTLS ! 🐦
      </p>
      <h2>Network Analysis</h2>
      <a href="https://github.com/Jigsaw-Code/net-analysis">Observalble everyone domains in networks</a>
      <p>
      This project contains tools, libraries and applications to analyze network measurements.
      Analyze DNS Queries describes how to fetch data from OONI and check for interference.
      Fetch Google or any server Traffic Data for analysis. Get information about an IP address.
      Check if an IP is valid for a domain</p>
      <h2>GSuite</h2>
      <p>
        For a long time I helped integrate <a href="https://russianit.ru/">PAU</a>
        from their legacy framework to google apps platpform and have worked extensively in
        helping them migrate to typescript and also in fixing
        various component-level bugs across their frontend properties.
      </p>
      <p>(Hello dark mode 🌚)</p>
      <h2>Polymon</h2>
      <p>
        For <a href="https://events.google.com/io2017/">Google I/O '17</a> I
        worked with others making everyone's favorite
        <a href="https://google.github.io/physical-web/">physical web</a>
        creature-battling game
        <a href="https://polymon.polymer-project.org">Polymon</a>! It was a social
        game where we hid physical web beacons around the I/O grounds that each
        contained a Polymon. Once you collected several polymon, you could fight
        each other in a turn-based MTG-like / Pokemon-like battle.
      </p>
      <p>
        The game was a PWA, used QR codes to communicate between players, natively
        supported deep-linking and sharing via android-beam.
        <a href="https://github.com/PolymerLabs/polymon">repo</a>
      </p>
      <h2>MERI</h2>
      <p>
        For <a href="http://www.niime.ru/">Molecular Electronic Research Institute</a> I
        worked with others  of this work was to develop a reactor for deep silicon etching on plates
        with diameter of up to 200 mm, similar in their     characteristics with import and development of technology deep silicon etching for its use        in the manufacture of three-dimensional TSV assembly.
        <a href="https://google.github.io/physical-web/">crawler's web</a>
        And at parting, I wrote deamon for NII to collect and update an email address database.
        <a href="https://github.com/vo0doo/python-email-crawler">PEC</a>
      </p>
      <h2>Gdocs to worldpress converter</h2>
      <p>Plugin for Google Docs and API WorldPress. Him convert custom style google document to 5-10 nice and stylish post in worldpress blog</p>
      <h2>Later</h2><p>Im work 6 year at leader computer's club, 3 year at director 8 sportbet's clubs, 4 year's clean's credits from 10+ people and LLC in role at bancropyt manager. Open contract govement administration from sponsered 6-year my kyber-sport champ's in Leningradskaya oblast.<p>
    `;
  }
}
