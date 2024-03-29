<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="Interactive world map for 7 Days to Die Alpha 15 & Alpha 16. Up-to-date with markers showing traders, caves, bomb shelters and more!">
    <title>7 Days to Die Map - 7daysmap.com</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <link rel="stylesheet" href="/build/css/leaflet.css">
    <link rel="stylesheet" href="{{ mix('css/map.css') }}">
    @if(config('app.env') == 'production')
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-98016531-1', 'auto');
            ga('send', 'pageview');
        </script>
    @endif
</head>
<body>
    <div id="map-container"></div>

    <div id="ui-panel">
        <button id="menu-trigger" type="button" class="btn btn-default">
            <span class="glyphicon glyphicon-menu-hamburger"></span>
        </button>
        {{-- UI for when the search bar is implemented - Also need to update the css file
            <div id="search-panel" class="input-group">
              <input type="text" class="form-control" placeholder="Search Map Locations...">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">
                    <span class="glyphicon glyphicon-search"></span>
                </button>
              </span>
            </div>
        --}}
    </div>

    <div id="info-panel">
        <div id="logo-wrapper">
            <img src="/images/logo.png" class="img-responsive">
        </div>
        <hr>
        <p>
            Welcome to 7DaysMap.com! This brand new map provides an overview of
            the various Points of Interest that can be found in 7 Days to Die.
        </p>
        <p>
            We've just launched, so please be patient as we add any missing markers
            and make various improvements to the map. If you have any suggestions, or
            see any issues with the map - please <a href="#contact-modal" data-toggle="modal">reach out</a> and let me know.
        </p>
        <hr>
        <div class="text-center">
            <a class="btn btn-success mt5" href="#updates-modal" data-toggle="modal">Update Log</a>
        </div>
        <hr>
        <div class="text-center">
            7daysmap.com is an open source project.<br>
            <img src="/images/github.png" width="32" height="32"><br>
            <a href="https://github.com/tyler-shaw/7daysmap" target="_blank">Contribute on GitHub</a>
        </div>
    </div>

    <div id="options-panel" class="panel panel-primary">
        <h4 class="text-center">Select Map</h4>
        <select id="map-version">
            <option selected value="alpha16navezgane">Alpha 16 Navezgane</option>
            <option value="alpha15navezgane">Alpha 15 Navezgane</option>
        </select>
        <div id="options-wrap" class="panel-body">
            <h4>Options</h4>
            <div id="layer-options"></div>
        </div>
        <div class="text-center">
            <div id="options-trigger">Show Options</div>
        </div>
    </div>

    <div id="contact-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title">Contact</h4>
                </div>
                <div class="modal-body">
                    <p>
                        Feel free to reach out with any suggestions or bugs you may run into. You can also message me on
                        <a href="https://www.reddit.com/user/Bowthingy/" target="_blank">Reddit</a>, if you prefer.
                    </p>
                    <p>
                        Please use your actual email so I can respond if necessary. This form goes directly to me (the owner of the website).
                        I won't send you any unprovoked emails or add you to any kind of list.
                    </p>
                    <div id="alert-wrap"></div>
                    <form id="contact-form">
                        <div class="form-group">
                            <label>Email</label>
                            <input id="email" class="form-control" type="email" required>
                        </div>
                        <div class="form-group">
                            <label>Message</label>
                            <textarea id="message" class="form-control" placeholder="Your message here.." required></textarea>
                        </div>
                        <div class="form-group text-right">
                            <button id="contact-submit" class="btn btn-success">Send It!</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div id="updates-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title">Map Updates</h4>
                </div>
                <div class="modal-body">
                    <p>
                        As support for the website grows, more features will be added. Thanks for all of the support
                        so far!
                    </p>
                    <ul id="updates-list">
                        <li>
                            <strong>January 29th, 2020</strong>
                            <ul>
                                <li>Various technical updates to technology used for this project.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>February 10, 2019</strong>
                            <ul>
                                <li>Tons of technical clean up, allowing for easier changes in the future.</li>
                                <li>7 Days Map is now Open Source! You can find the code and make
                                    contributions on <a href="https://github.com/tyler-shaw/7daysmap" target="_blank">GitHub</a>!</li>
                            </ul>
                        </li>
                        <li>
                            <strong>July 24, 2018</strong>
                            <ul>
                                <li>Added support for switching map versions.</li>
                                <li>Added Alpha 16 map.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>August 2, 2017</strong>
                            <ul>
                                <li>Moved all map tiles to a CDN.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>July 20, 2017</strong>
                            <ul>
                                <li>Added the update log.</li>
                                <li>Fixed some issues with the contact form.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>April 24, 2017</strong>
                            <ul>
                                <li>Initial public release 7daysmap.com!</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
