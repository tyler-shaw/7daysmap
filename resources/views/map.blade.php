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
        Info Panel!
    </div>

    <div id="options-panel" class="panel panel-primary">
        <div id="options-wrap" class="panel-body">
            <h4>Options</h4>
            <input type="checkbox"> Show Road Labels?<br>
            <input type="checkbox"> Show Location Labels?
        </div>
        <div id="options-trigger">
            Show Options
        </div>
    </div>

    <script src="{{ elixir('js/app.js') }}"></script>
</body>
</html>