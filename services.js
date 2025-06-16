 window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-122322388-1');
        gtag('config', 'AW-462155644');
        //     ........
          $('.grid').infiniteScroll({
            path: '.pagination__next',
            append: '.grid-item',
            history: false,
        });
        // .....
         window.fbAsyncInit = function () {
            FB.init({
                xfbml: true,
                version: 'v6.0'
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = '../connect.facebook.net/en_US/sdk/xfbml.customerchat.html';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
