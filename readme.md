# 7DaysMap.com

7daysmap.com is the top interactive map for 7 Days to Die. Developed for use by the community, it's now open sourced with the hope
that the community can improve it. Below you'll find basic documentation on the project along with information on how you
can help contribute to the development of the map.

## Technical Details

The site is extremely simple consisting of only a couple routes and views - with the bulk of the content beings the interactive
map on the front end. Here are some of the major technologies used in the project:

- Laravel 5.3 on the back end.
- Leaflet for the map.
- Laravel Elixir for asset compilation, etc.

Tiles for the various maps are hosted on a CDN and will need manually added by the project owner as new map versions are released.

## Contributing

Thank you for considering contributing to the project. We'll gladly accept any pull requests improving the existing the project,
adding new markers, or updating the map with new versions as alpha are released. If there's a change you're eagar to see then
please feel free to submit and PR and they'll be reviewed promptly.

Another great way to contribute is by opening issues should find any bugs or have any suggestions.

### Website Setup

Setting up the project is fairly simple. The project isn't using a database at the moment, so you'll only need to follow a couple steps.
Since the project isn't using a database, you'll mainly just need to copy the `.env.example` file and update it for your environment.
We're not using a lot of the features that this offers, so setting the `APP_KEY` and the mail settings should be all you need to do.

### Other Notes

If you wish to add a new version of the map, you'll need to add the configuration for the map and it's markers in the appropriate script. You can see `resource/assets/js/maps.js` for the current map versions and an example of how their config is laid out.

Tiles must be 256px by 256px. If you want to discuss adding a new version of the map, then please reach out. Currently, all tiles are hosted on my personal CDN account and I'll need to upload any new ones. If this becomes a large inconvenience we can look for a new solution.

## Security Vulnerabilities

If you discover a security vulnerability within the project, please send an e-mail to Tyler Shaw at tshaw0813@gmail.com. All security vulnerabilities will be promptly addressed.

## License

This project is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
