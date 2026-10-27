var spec2 = "js/lego_colour_bar_chart.json";
vegaEmbed('#bar_chart', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec3 = "js/lego_theme_heat_map.json";
vegaEmbed('#heatmap', spec3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec4 = "js/lego_choropleth_map.json";
vegaEmbed('#choropleth_map', spec4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec5 = "js/lego_point_map.json";
vegaEmbed('#point_map', spec5).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec6 = "js/lego_revenue_line_bar_chart.json";
vegaEmbed('#line_bar_chart', spec6).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec7 = "js/lego_treemap.json";
vegaEmbed('#treemap', spec7).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec8 = "js/lego_ridgeline_chart.json";
vegaEmbed('#ridgeline_chart', spec8).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec9 = "js/lego_bump_chart.json";
vegaEmbed('#bump_chart', spec9).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec10 = "js/lego_proportional_symbol_map.json";
vegaEmbed('#proportional_symbol_map', spec10).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec11 = "js/lego_box_plot.json";
vegaEmbed('#box_plot', spec11).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec12 = "js/lego_radial_bar_chart.json";
vegaEmbed('#radial_bar_chart', spec12).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

document.addEventListener("DOMContentLoaded", async function () {
    const slider = document.getElementById("shared_year");
    const yearLabel = document.getElementById("selected_year");

    try {
        const [barResult, treemapResult] = await Promise.all([
            vegaEmbed(
                "#bar_chart",
                "js/lego_colour_bar_chart.json"
            ),
            vegaEmbed(
                "#treemap",
                "js/lego_treemap.json"
            )
        ]);

        let updates = Promise.resolve();

        slider.addEventListener("input", function () {
            const year = Number(slider.value);

            yearLabel.textContent = year;

            updates = updates.then(async function () {
                await Promise.all([
                    barResult.view
                        .signal("year_selection", year)
                        .runAsync(),

                    treemapResult.view
                        .signal("year_selection", year)
                        .runAsync()
                ]);
            }).catch(console.error);
        });

        slider.disabled = false;
    } catch (error) {
        console.error("Shared year filter error:", error);
    }
});

vegaEmbed(
    '#radial_bar_chart',
    'js/lego_radial_bar_chart.json',
    {
        bind: '#radial_year_slider'
    }
).catch(console.error);