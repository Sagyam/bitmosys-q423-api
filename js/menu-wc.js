'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">bitmosys-q423-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-fad6570214ac423cba6a6d2fdaee1c5056e1ac7e565030ad610ef3c238c42ca16bb10348c6d0c138edfe5e35d16ccabb7e90d06360eb9ba32dc1be38696790fe"' : 'data-bs-target="#xs-controllers-links-module-AppModule-fad6570214ac423cba6a6d2fdaee1c5056e1ac7e565030ad610ef3c238c42ca16bb10348c6d0c138edfe5e35d16ccabb7e90d06360eb9ba32dc1be38696790fe"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-fad6570214ac423cba6a6d2fdaee1c5056e1ac7e565030ad610ef3c238c42ca16bb10348c6d0c138edfe5e35d16ccabb7e90d06360eb9ba32dc1be38696790fe"' :
                                            'id="xs-controllers-links-module-AppModule-fad6570214ac423cba6a6d2fdaee1c5056e1ac7e565030ad610ef3c238c42ca16bb10348c6d0c138edfe5e35d16ccabb7e90d06360eb9ba32dc1be38696790fe"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-fad6570214ac423cba6a6d2fdaee1c5056e1ac7e565030ad610ef3c238c42ca16bb10348c6d0c138edfe5e35d16ccabb7e90d06360eb9ba32dc1be38696790fe"' : 'data-bs-target="#xs-injectables-links-module-AppModule-fad6570214ac423cba6a6d2fdaee1c5056e1ac7e565030ad610ef3c238c42ca16bb10348c6d0c138edfe5e35d16ccabb7e90d06360eb9ba32dc1be38696790fe"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-fad6570214ac423cba6a6d2fdaee1c5056e1ac7e565030ad610ef3c238c42ca16bb10348c6d0c138edfe5e35d16ccabb7e90d06360eb9ba32dc1be38696790fe"' :
                                        'id="xs-injectables-links-module-AppModule-fad6570214ac423cba6a6d2fdaee1c5056e1ac7e565030ad610ef3c238c42ca16bb10348c6d0c138edfe5e35d16ccabb7e90d06360eb9ba32dc1be38696790fe"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoinModule.html" data-type="entity-link" >CoinModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CoinModule-48cae05e99d729a6b5459e4e18cd73b65edef667cd2d7156bfb950264d284f80bb0ceca4d953ad8574a5df6305711d069172b6fbfd22dbc60b48496a6514ac7e"' : 'data-bs-target="#xs-controllers-links-module-CoinModule-48cae05e99d729a6b5459e4e18cd73b65edef667cd2d7156bfb950264d284f80bb0ceca4d953ad8574a5df6305711d069172b6fbfd22dbc60b48496a6514ac7e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CoinModule-48cae05e99d729a6b5459e4e18cd73b65edef667cd2d7156bfb950264d284f80bb0ceca4d953ad8574a5df6305711d069172b6fbfd22dbc60b48496a6514ac7e"' :
                                            'id="xs-controllers-links-module-CoinModule-48cae05e99d729a6b5459e4e18cd73b65edef667cd2d7156bfb950264d284f80bb0ceca4d953ad8574a5df6305711d069172b6fbfd22dbc60b48496a6514ac7e"' }>
                                            <li class="link">
                                                <a href="controllers/CoinController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoinController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CoinModule-48cae05e99d729a6b5459e4e18cd73b65edef667cd2d7156bfb950264d284f80bb0ceca4d953ad8574a5df6305711d069172b6fbfd22dbc60b48496a6514ac7e"' : 'data-bs-target="#xs-injectables-links-module-CoinModule-48cae05e99d729a6b5459e4e18cd73b65edef667cd2d7156bfb950264d284f80bb0ceca4d953ad8574a5df6305711d069172b6fbfd22dbc60b48496a6514ac7e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoinModule-48cae05e99d729a6b5459e4e18cd73b65edef667cd2d7156bfb950264d284f80bb0ceca4d953ad8574a5df6305711d069172b6fbfd22dbc60b48496a6514ac7e"' :
                                        'id="xs-injectables-links-module-CoinModule-48cae05e99d729a6b5459e4e18cd73b65edef667cd2d7156bfb950264d284f80bb0ceca4d953ad8574a5df6305711d069172b6fbfd22dbc60b48496a6514ac7e"' }>
                                        <li class="link">
                                            <a href="injectables/CoinService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoinService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Coin.html" data-type="entity-link" >Coin</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCoinDto.html" data-type="entity-link" >CreateCoinDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCoinDto.html" data-type="entity-link" >UpdateCoinDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});