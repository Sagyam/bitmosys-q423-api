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
                                            'data-bs-target="#controllers-links-module-AppModule-4aea1b7f64fabee21723e74be8cd881f33e68d6bc31bbf4c490a4b650b860598400ac103d28c753cc0f1273ece976e002804adb14cc7afabbed85877f0536659"' : 'data-bs-target="#xs-controllers-links-module-AppModule-4aea1b7f64fabee21723e74be8cd881f33e68d6bc31bbf4c490a4b650b860598400ac103d28c753cc0f1273ece976e002804adb14cc7afabbed85877f0536659"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-4aea1b7f64fabee21723e74be8cd881f33e68d6bc31bbf4c490a4b650b860598400ac103d28c753cc0f1273ece976e002804adb14cc7afabbed85877f0536659"' :
                                            'id="xs-controllers-links-module-AppModule-4aea1b7f64fabee21723e74be8cd881f33e68d6bc31bbf4c490a4b650b860598400ac103d28c753cc0f1273ece976e002804adb14cc7afabbed85877f0536659"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-4aea1b7f64fabee21723e74be8cd881f33e68d6bc31bbf4c490a4b650b860598400ac103d28c753cc0f1273ece976e002804adb14cc7afabbed85877f0536659"' : 'data-bs-target="#xs-injectables-links-module-AppModule-4aea1b7f64fabee21723e74be8cd881f33e68d6bc31bbf4c490a4b650b860598400ac103d28c753cc0f1273ece976e002804adb14cc7afabbed85877f0536659"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-4aea1b7f64fabee21723e74be8cd881f33e68d6bc31bbf4c490a4b650b860598400ac103d28c753cc0f1273ece976e002804adb14cc7afabbed85877f0536659"' :
                                        'id="xs-injectables-links-module-AppModule-4aea1b7f64fabee21723e74be8cd881f33e68d6bc31bbf4c490a4b650b860598400ac103d28c753cc0f1273ece976e002804adb14cc7afabbed85877f0536659"' }>
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
                                            'data-bs-target="#controllers-links-module-CoinModule-fd7d7eeef0ca8b7457902faec006057e09e245134e02b6c0d9a9d22b1af67fc122f88a4d8bc49280bc67cd5e1235671b5be9fee6c577488babfc4896cfb254a0"' : 'data-bs-target="#xs-controllers-links-module-CoinModule-fd7d7eeef0ca8b7457902faec006057e09e245134e02b6c0d9a9d22b1af67fc122f88a4d8bc49280bc67cd5e1235671b5be9fee6c577488babfc4896cfb254a0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CoinModule-fd7d7eeef0ca8b7457902faec006057e09e245134e02b6c0d9a9d22b1af67fc122f88a4d8bc49280bc67cd5e1235671b5be9fee6c577488babfc4896cfb254a0"' :
                                            'id="xs-controllers-links-module-CoinModule-fd7d7eeef0ca8b7457902faec006057e09e245134e02b6c0d9a9d22b1af67fc122f88a4d8bc49280bc67cd5e1235671b5be9fee6c577488babfc4896cfb254a0"' }>
                                            <li class="link">
                                                <a href="controllers/CoinController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoinController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CoinModule-fd7d7eeef0ca8b7457902faec006057e09e245134e02b6c0d9a9d22b1af67fc122f88a4d8bc49280bc67cd5e1235671b5be9fee6c577488babfc4896cfb254a0"' : 'data-bs-target="#xs-injectables-links-module-CoinModule-fd7d7eeef0ca8b7457902faec006057e09e245134e02b6c0d9a9d22b1af67fc122f88a4d8bc49280bc67cd5e1235671b5be9fee6c577488babfc4896cfb254a0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoinModule-fd7d7eeef0ca8b7457902faec006057e09e245134e02b6c0d9a9d22b1af67fc122f88a4d8bc49280bc67cd5e1235671b5be9fee6c577488babfc4896cfb254a0"' :
                                        'id="xs-injectables-links-module-CoinModule-fd7d7eeef0ca8b7457902faec006057e09e245134e02b6c0d9a9d22b1af67fc122f88a4d8bc49280bc67cd5e1235671b5be9fee6c577488babfc4896cfb254a0"' }>
                                        <li class="link">
                                            <a href="injectables/CoinService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoinService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommonModule.html" data-type="entity-link" >CommonModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CommonModule-32b03e32ff27d12d40ddd3a907c15ebe1a5f5cedd7518ab9528c141d7e3d314052d699b862134b9431a8afc04a669d2eb8bb704a5bcb3f3fb22571fc7be15fbc"' : 'data-bs-target="#xs-injectables-links-module-CommonModule-32b03e32ff27d12d40ddd3a907c15ebe1a5f5cedd7518ab9528c141d7e3d314052d699b862134b9431a8afc04a669d2eb8bb704a5bcb3f3fb22571fc7be15fbc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CommonModule-32b03e32ff27d12d40ddd3a907c15ebe1a5f5cedd7518ab9528c141d7e3d314052d699b862134b9431a8afc04a669d2eb8bb704a5bcb3f3fb22571fc7be15fbc"' :
                                        'id="xs-injectables-links-module-CommonModule-32b03e32ff27d12d40ddd3a907c15ebe1a5f5cedd7518ab9528c141d7e3d314052d699b862134b9431a8afc04a669d2eb8bb704a5bcb3f3fb22571fc7be15fbc"' }>
                                        <li class="link">
                                            <a href="injectables/CloudinaryConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CloudinaryConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CloudinaryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CloudinaryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PaginationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TransactionModule.html" data-type="entity-link" >TransactionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TransactionModule-fad21947d63b361a61b343e540a5ac7e657b97af2877c0281422808cd6997fade6bc0b21932caca620ac5a2f1a608dd89acf0f8073741ddce559775937da1995"' : 'data-bs-target="#xs-controllers-links-module-TransactionModule-fad21947d63b361a61b343e540a5ac7e657b97af2877c0281422808cd6997fade6bc0b21932caca620ac5a2f1a608dd89acf0f8073741ddce559775937da1995"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TransactionModule-fad21947d63b361a61b343e540a5ac7e657b97af2877c0281422808cd6997fade6bc0b21932caca620ac5a2f1a608dd89acf0f8073741ddce559775937da1995"' :
                                            'id="xs-controllers-links-module-TransactionModule-fad21947d63b361a61b343e540a5ac7e657b97af2877c0281422808cd6997fade6bc0b21932caca620ac5a2f1a608dd89acf0f8073741ddce559775937da1995"' }>
                                            <li class="link">
                                                <a href="controllers/TransactionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransactionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TransactionModule-fad21947d63b361a61b343e540a5ac7e657b97af2877c0281422808cd6997fade6bc0b21932caca620ac5a2f1a608dd89acf0f8073741ddce559775937da1995"' : 'data-bs-target="#xs-injectables-links-module-TransactionModule-fad21947d63b361a61b343e540a5ac7e657b97af2877c0281422808cd6997fade6bc0b21932caca620ac5a2f1a608dd89acf0f8073741ddce559775937da1995"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TransactionModule-fad21947d63b361a61b343e540a5ac7e657b97af2877c0281422808cd6997fade6bc0b21932caca620ac5a2f1a608dd89acf0f8073741ddce559775937da1995"' :
                                        'id="xs-injectables-links-module-TransactionModule-fad21947d63b361a61b343e540a5ac7e657b97af2877c0281422808cd6997fade6bc0b21932caca620ac5a2f1a608dd89acf0f8073741ddce559775937da1995"' }>
                                        <li class="link">
                                            <a href="injectables/TransactionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransactionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-e1d603b6c48de7c3f6533856c9c52f4a6528556150d44abcf1c1315c6110c00ade1dd46db41627b6cd09b1785193114988052f94685fcba848ea305272146471"' : 'data-bs-target="#xs-controllers-links-module-UserModule-e1d603b6c48de7c3f6533856c9c52f4a6528556150d44abcf1c1315c6110c00ade1dd46db41627b6cd09b1785193114988052f94685fcba848ea305272146471"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-e1d603b6c48de7c3f6533856c9c52f4a6528556150d44abcf1c1315c6110c00ade1dd46db41627b6cd09b1785193114988052f94685fcba848ea305272146471"' :
                                            'id="xs-controllers-links-module-UserModule-e1d603b6c48de7c3f6533856c9c52f4a6528556150d44abcf1c1315c6110c00ade1dd46db41627b6cd09b1785193114988052f94685fcba848ea305272146471"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-e1d603b6c48de7c3f6533856c9c52f4a6528556150d44abcf1c1315c6110c00ade1dd46db41627b6cd09b1785193114988052f94685fcba848ea305272146471"' : 'data-bs-target="#xs-injectables-links-module-UserModule-e1d603b6c48de7c3f6533856c9c52f4a6528556150d44abcf1c1315c6110c00ade1dd46db41627b6cd09b1785193114988052f94685fcba848ea305272146471"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-e1d603b6c48de7c3f6533856c9c52f4a6528556150d44abcf1c1315c6110c00ade1dd46db41627b6cd09b1785193114988052f94685fcba848ea305272146471"' :
                                        'id="xs-injectables-links-module-UserModule-e1d603b6c48de7c3f6533856c9c52f4a6528556150d44abcf1c1315c6110c00ade1dd46db41627b6cd09b1785193114988052f94685fcba848ea305272146471"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WalletModule.html" data-type="entity-link" >WalletModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-WalletModule-a75b4e71acf11620753b4f2715ccf835cbfc7683a172c7b5f48fe6bd90df457578afd8f5cc370b14363716e82886c7eef29efeb676b85c215428059c7a818008"' : 'data-bs-target="#xs-controllers-links-module-WalletModule-a75b4e71acf11620753b4f2715ccf835cbfc7683a172c7b5f48fe6bd90df457578afd8f5cc370b14363716e82886c7eef29efeb676b85c215428059c7a818008"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-WalletModule-a75b4e71acf11620753b4f2715ccf835cbfc7683a172c7b5f48fe6bd90df457578afd8f5cc370b14363716e82886c7eef29efeb676b85c215428059c7a818008"' :
                                            'id="xs-controllers-links-module-WalletModule-a75b4e71acf11620753b4f2715ccf835cbfc7683a172c7b5f48fe6bd90df457578afd8f5cc370b14363716e82886c7eef29efeb676b85c215428059c7a818008"' }>
                                            <li class="link">
                                                <a href="controllers/WalletController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WalletController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-WalletModule-a75b4e71acf11620753b4f2715ccf835cbfc7683a172c7b5f48fe6bd90df457578afd8f5cc370b14363716e82886c7eef29efeb676b85c215428059c7a818008"' : 'data-bs-target="#xs-injectables-links-module-WalletModule-a75b4e71acf11620753b4f2715ccf835cbfc7683a172c7b5f48fe6bd90df457578afd8f5cc370b14363716e82886c7eef29efeb676b85c215428059c7a818008"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WalletModule-a75b4e71acf11620753b4f2715ccf835cbfc7683a172c7b5f48fe6bd90df457578afd8f5cc370b14363716e82886c7eef29efeb676b85c215428059c7a818008"' :
                                        'id="xs-injectables-links-module-WalletModule-a75b4e71acf11620753b4f2715ccf835cbfc7683a172c7b5f48fe6bd90df457578afd8f5cc370b14363716e82886c7eef29efeb676b85c215428059c7a818008"' }>
                                        <li class="link">
                                            <a href="injectables/WalletService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WalletService</a>
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
                                <a href="classes/CreateTransactionDto.html" data-type="entity-link" >CreateTransactionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateWalletDto.html" data-type="entity-link" >CreateWalletDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginatedRequestDTO.html" data-type="entity-link" >PaginatedRequestDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginatedResponseDTO.html" data-type="entity-link" >PaginatedResponseDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/Transaction.html" data-type="entity-link" >Transaction</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCoinDto.html" data-type="entity-link" >UpdateCoinDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTransactionDto.html" data-type="entity-link" >UpdateTransactionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateWalletDto.html" data-type="entity-link" >UpdateWalletDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/Wallet.html" data-type="entity-link" >Wallet</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CloudinaryConfigService.html" data-type="entity-link" >CloudinaryConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CloudinaryService.html" data-type="entity-link" >CloudinaryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImageValidationPipe.html" data-type="entity-link" >ImageValidationPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaginationService.html" data-type="entity-link" >PaginationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
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