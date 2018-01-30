<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io" style="padding: 0 42px 0 43px;">
                    <i class="fas fa-coffee"></i> &nbsp; COMPANY LOGO
                    <!--<img src="../assets/img/interos-logo-md.png" alt="Interos logo">-->
                </a>

                <button class="button navbar-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                        <i class="fal fa-fire"></i> &nbsp; Enterprise Risk Threshold
                    </a>
                    <a class="navbar-item">
                        <i class="fal fa-book"></i> &nbsp; Portfolios
                    </a>
                    <a class="navbar-item">
                        <i class="fal fa-shopping-cart"></i> &nbsp; Vendors
                    </a>
                </div>
                <div class="navbar-end">

                    <a class="navbar-item">
                        <i class="fal fa-user"></i> &nbsp; John Smith
                    </a>
                    <a class="navbar-item">
                        <i class="fal fa-cog"></i> &nbsp; Settings
                    </a>
                    <a class="navbar-item">
                        <i class="fal fa-sign-out"></i> &nbsp; Sign out
                    </a>
                </div>
            </div>
        </nav>
        <nuxt/>
    </div>
</template>

<style>
    /*
    html {
        font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
    }

    .button--green {
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #3b8070;
        color: #3b8070;
        text-decoration: none;
        padding: 10px 30px;
    }

    .button--green:hover {
        color: #fff;
        background-color: #3b8070;
    }

    .button--grey {
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #35495e;
        color: #35495e;
        text-decoration: none;
        padding: 10px 30px;
        margin-left: 15px;
    }

    .button--grey:hover {
        color: #fff;
        background-color: #35495e;
    }
    */
</style>
