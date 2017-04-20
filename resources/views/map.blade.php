<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>7 Days to Die Map</title>
    <link rel="stylesheet" href="{{ elixir ('css/map.css') }}">
    {{-- Analytics Code Here --}}
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
            see any issues with the map - please <a href="#myModal" data-toggle="modal">reach out</a> and let me know.
        </p>
    </div>

    <div id="options-panel" class="panel panel-primary">
        <div id="options-wrap" class="panel-body">
            <h4>Options</h4>
            <label><input id="armyBasesLayerToggle" type="checkbox"> Army Bases</label>
            <label><input id="cavesLayerToggle" type="checkbox"> Caves</label>
            <label><input id="housesLayerToggle" type="checkbox"> Houses</label>
            <label><input id="tradersLayerToggle" type="checkbox"> Trader Posts</label>
            <label><input id="otherLayerToggle" type="checkbox"> Other</label>
        </div>
        <div id="options-trigger">
            Show Options
        </div>
    </div>

    <div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
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
                    <form>
                        <div class="form-group">
                            <label>Email</label>
                            <input class="form-control" type="text">
                        </div>

                        <div class="form-group">
                            <label>Message</label>
                            <textarea class="form-control" placeholder="Your message here.."></textarea>
                        </div>

                        <div class="form-group">
                            <button type="submit" class="btn btn-success">Send It!</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script src="{{ elixir('js/app.js') }}"></script>
</body>
</html>
